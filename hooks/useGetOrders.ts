import { sortOrders } from "@/helper/order";
import { useQuery } from "@tanstack/react-query";
import useBlockchainOrders from "./useBlockchainOrders";

export function useOrdersByStockId(stockId: string, limit: number = 30) {
  return useQuery({
    queryKey: ["orders", stockId, limit],
    queryFn: async () => {
      const res = await fetch(`/api/stocks/${stockId}/orders?limit=${limit}`);
      if (!res.ok) throw new Error("Failed to fetch orders");
      return res.json() as Promise<{ asks: any[]; bids: any[] }>;
    },
    refetchInterval: 30000, // refresh every 30s
  });
}

export function useOrdersByStockIdAndUserAddress(
  stockId: string,
  userAddress: string,
) {
  return useQuery({
    queryKey: ["orders", stockId, userAddress],
    queryFn: async () => {
      const res = await fetch(
        `/api/stocks/${stockId}/orders/user?address=${userAddress}`,
      );
      if (!res.ok) throw new Error("Failed to fetch user orders");
      return res.json();
    },
    enabled: !!stockId && !!userAddress, // only run if both provided
  });
}

export function useGetOrdersByStockAddress(address: string) {
  const orders = useBlockchainOrders();

  return sortOrders(address, orders);
}

export function useGetUserOrdersByStockAddressAndUserAddress(
  assetAddress: string,
  userAddress: string,
) {
  const orders = useBlockchainOrders();

  const userOrders = orders.filter(
    (order) => order.asset === assetAddress && order.trader === userAddress,
  );
  return userOrders;
}
