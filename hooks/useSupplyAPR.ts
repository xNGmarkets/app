import BORROW_AND_SUPPLY_ABI from "@/config/abis/borrowAndSupply.abi";
import { BORROW_SUPPLY_CONTRACT } from "@/constants/contracts";
import { useReadContract } from "wagmi";

const useSupplyAPR = () => {
  const { data } = useReadContract({
    address: BORROW_SUPPLY_CONTRACT,
    abi: BORROW_AND_SUPPLY_ABI,
    functionName: "currentSupplyAPR_BPS",
  });

  if (!data) return 0;
  return Number(data) / 100;
};

export default useSupplyAPR;
