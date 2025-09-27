import CLOB_ABI from "@/config/abis/clob.abi";
import { CLOB_CONTRACT } from "@/constants/contracts";
import { processedOrders } from "@/helper/order";
import { useReadContracts } from "wagmi";
import useLengthOfOrders from "./useLengthOfOrders";

const useBlockchainOrders = () => {
  const ordersLength = useLengthOfOrders();
  const contracts: any = Array.from(
    { length: ordersLength },
    (_, i) => i + 1,
  ).map((index) => ({
    address: CLOB_CONTRACT,
    abi: CLOB_ABI,
    functionName: "orders",
    args: [index],
  }));

  const { data } = useReadContracts({
    contracts,
    allowFailure: false,
  });

  if (!data) {
    return [];
  }
  return processedOrders(data as any);
};

export default useBlockchainOrders;
