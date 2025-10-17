import { useGetUserOpenOrders } from "./useGetUserOpenOrders";

const useGetUserOrders = (assetAddress: string, userAddress: string) => {
  const orders = useGetUserOpenOrders(userAddress);

  const userOrders = orders.filter((order) => order.asset === assetAddress);
  return userOrders;
};

export default useGetUserOrders;
