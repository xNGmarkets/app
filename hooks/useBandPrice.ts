import ORACLE_HUB_ABI from "@/config/abis/oraclehub.abi";
import { ORACLE_HUB_CONTRACT } from "@/constants/contracts";
import { useReadContract } from "wagmi";

type BandData = {
  midE6?: bigint;
  widthBps?: number;
  // add other properties if needed
};

const useBandPrice = (address: string) => {
  const { data } = useReadContract({
    address: ORACLE_HUB_CONTRACT,
    abi: ORACLE_HUB_ABI,
    functionName: "getBand",
    args: [address],
    query: {
      enabled: !!address,
    },
  }) as { data?: BandData };

  if (!data) {
    return {
      band: 0,
      price: 0,
      lowestPrice: 0,
      highestPrice: 0,
    };
  }
  const price = data?.midE6 ? Number(data.midE6) / 1_000_000 : 0;
  const band = data?.widthBps ? data?.widthBps / 100 : 0;
  const lowestPrice = price - (band / 100) * price;
  const highestPrice = price + (band / 100) * price;

  return {
    band,
    price,
    lowestPrice,
    highestPrice,
  };
};

export default useBandPrice;
