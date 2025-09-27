import { useQuery } from "@tanstack/react-query";
import { useAccount } from "wagmi";

const useGetAccountID = () => {
  const { address } = useAccount();

  const { data } = useQuery({
    queryKey: ["accountId", address],
    queryFn: async () => {
      try {
        const response = await fetch(
          `https://testnet.mirrornode.hedera.com/api/v1/accounts/${address}`,
        );
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching account ID:", error);
        return null;
      }
    },
    refetchOnWindowFocus: false,
    enabled: !!address,
  });

  return data?.account;
};

export default useGetAccountID;
