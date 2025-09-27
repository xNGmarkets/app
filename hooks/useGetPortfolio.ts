import BORROW_AND_SUPPLY_ABI from "@/config/abis/borrowAndSupply.abi";
import { BORROW_SUPPLY_CONTRACT } from "@/constants/contracts";
import { useAccount, useReadContract } from "wagmi";

const useGetPortfolio = () => {
  const { address } = useAccount();
  const { data, refetch } = useReadContract({
    address: BORROW_SUPPLY_CONTRACT,
    abi: BORROW_AND_SUPPLY_ABI,
    functionName: "accountPortfolio",
    args: [address],
  }) as { data: bigint[]; refetch: () => void };

  const { data: lenderBalanceRaw, refetch: refetchLenderBalance } =
    useReadContract({
      address: BORROW_SUPPLY_CONTRACT,
      abi: BORROW_AND_SUPPLY_ABI,
      functionName: "lenderBalanceE6",
      args: [address],
    });

  const reset = () => {
    refetch();
    refetchLenderBalance();
  };

  if (!data) {
    return {
      supply: 0,
      borrow: 0,
      collateralValue: 0,
      ltvCurrent: 0,
      maxBorrow: 0,
      accrued: 0,
      lenderBalance: 0,
      reset,
    };
  }

  const supply = Number(data[0]) / 1_000_000;
  const lenderBalance = lenderBalanceRaw
    ? Number(lenderBalanceRaw) / 1_000_000
    : 0;

  return {
    supply,
    borrow: Number(data[1]) / 1_000_000,
    collateralValue: Number(data[2]) / 1_000_000,
    ltvCurrent: Number(data[3]) / 100,
    maxBorrow: Number(data[4]) / 1_000_000,
    accrued: lenderBalance - supply,
    lenderBalance,
    reset,
  };
};

export default useGetPortfolio;
