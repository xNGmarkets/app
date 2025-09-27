import { formatUnits, ZeroAddress } from "ethers";
import { erc20Abi } from "viem";
import { useAccount, useBalance, useReadContract } from "wagmi";

const useGetTokenBalance = (tokenAddress: string, decimals: number) => {
  const { address } = useAccount();
  const { data } = useBalance({
    address,
    query: {
      enabled: tokenAddress === ZeroAddress,
    },
  });

  const balance_result = useReadContract({
    address: tokenAddress as `0x${string}`,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [address!],
    query: {
      enabled: tokenAddress !== ZeroAddress && !!address,
    },
  });

  if (!tokenAddress) return { balance: "0.00" };

  const balance =
    (tokenAddress !== ZeroAddress
      ? formatUnits((balance_result?.data as any) ?? BigInt(0), decimals)
      : formatUnits(BigInt(data?.value || 0), decimals)) ?? "0.00";

  return { balance };
};

export default useGetTokenBalance;
