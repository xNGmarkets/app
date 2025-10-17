import CLOB_ABI from "@/config/abis/clob.abi";
import { CLOB_CONTRACT } from "@/constants/contracts";
import { useReadContract } from "wagmi";
import useExchangeRate from "./useExchangeRate";

type BandData = {
  bidE6?: bigint;
  askE6?: bigint;
};

const useGetBestPrices = (asset: string) => {
  const rate = useExchangeRate();
  const { data } = useReadContract({
    address: CLOB_CONTRACT,
    abi: CLOB_ABI,
    functionName: "best",
    args: [asset],
    query: {
      enabled: !!asset,
    },
  }) as { data?: BandData };

  if (!data) {
    return {
      bidPrice: 0,
      askPrice: 0,
    };
  }
  const bidPrice = (data?.bidE6 ? Number(data.bidE6) / 1_000_000 : 0) * rate;
  const askPrice = (data?.askE6 ? Number(data?.askE6) / 1_000_000 : 0) * rate;

  return {
    bidPrice,
    askPrice,
  };
};

export default useGetBestPrices;
