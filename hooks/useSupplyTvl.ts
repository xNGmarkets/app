import BORROW_AND_SUPPLY_ABI from "@/config/abis/borrowAndSupply.abi";
import { BORROW_SUPPLY_CONTRACT } from "@/constants/contracts";
import { useReadContract } from "wagmi";

const useSupplyTvl = () => {
  const { data } = useReadContract({
    address: BORROW_SUPPLY_CONTRACT,
    abi: BORROW_AND_SUPPLY_ABI,
    functionName: "totalReservesE6",
  });

  if (!data) return 0;
  return Number(data);
};

export default useSupplyTvl;
