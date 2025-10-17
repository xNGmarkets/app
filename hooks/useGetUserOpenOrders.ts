import CLOB_ABI from "@/config/abis/clob.abi";
import { CLOB_CONTRACT } from "@/constants/contracts";
import { processRawOpenOrders } from "@/helper/order";
import { useReadContract } from "wagmi";

export function useGetUserOpenOrders(address: string) {
  const { data } = useReadContract({
    address: CLOB_CONTRACT,
    abi: CLOB_ABI,
    functionName: "getOpenOrders",
    args: [address],
    query: {
      enabled: !!address,
    },
  });

  if (!data) {
    return [];
  }

  const orders = processRawOpenOrders(data as any);

  return orders;
}
