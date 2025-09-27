import CLOB_ABI from "@/config/abis/clob.abi";
import { CLOB_CONTRACT } from "@/constants/contracts";
import { useReadContract } from "wagmi";

const useLengthOfOrders = () => {
  const { data } = useReadContract({
    address: CLOB_CONTRACT,
    abi: CLOB_ABI,
    functionName: "ordersLength",
  });

  return data ? Number(data) - 1 : 0;
};

export default useLengthOfOrders;
