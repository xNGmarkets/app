import { BorrowTypes } from "@/types/market";
import { useQuery } from "@tanstack/react-query";
import { useAccount } from "wagmi";

function useGetUserBorrows() {
  const { address } = useAccount();
  return useQuery({
    queryKey: ["borrows", address],
    queryFn: async () => {
      const res = await fetch(`/api/borrow?address=${address}`);
      if (!res.ok) throw new Error("Failed to fetch orders");
      return res.json() as Promise<BorrowTypes[]>;
    },
    enabled: !!address,
  });
}

export default useGetUserBorrows;
