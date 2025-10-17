import CLOB_ABI from "@/config/abis/clob.abi";
import { CLOB_CONTRACT } from "@/constants/contracts";
import { processRawOrders, sortOrders } from "@/helper/order";
import { useReadContract } from "wagmi";

export function useGetOrderBook(assetAddress: string) {
  const { data } = useReadContract({
    address: CLOB_CONTRACT,
    abi: CLOB_ABI,
    functionName: "getOrderBook",
    args: [assetAddress],
    query: {
      enabled: !!assetAddress,
    },
  });

  if (!data) {
    return { asks: [], bids: [] };
  }

  const orders = processRawOrders(data as any);

  return sortOrders(orders);
}
