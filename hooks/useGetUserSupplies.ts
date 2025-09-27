import { SupplyTypes } from "@/types/market";
import { useQuery } from "@tanstack/react-query";
import { useAccount } from "wagmi";

function useGetUserSupplies() {
  const { address } = useAccount();
  return useQuery({
    queryKey: ["supplies", address],
    queryFn: async () => {
      const res = await fetch(`/api/supply?address=${address}`);
      if (!res.ok) throw new Error("Failed to fetch orders");
      return res.json() as Promise<SupplyTypes[]>;
    },
    enabled: !!address,
  });
}

export default useGetUserSupplies;
