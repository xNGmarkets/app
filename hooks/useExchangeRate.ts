import ORACLE_HUB_ABI from "@/config/abis/oraclehub.abi";
import { ORACLE_HUB_CONTRACT, XNGN } from "@/constants/contracts";
import { useReadContract } from "wagmi";

type Props = {
  priceE6?: bigint;
};

const useExchangeRate = () => {
  const { data } = useReadContract({
    address: ORACLE_HUB_CONTRACT,
    abi: ORACLE_HUB_ABI,
    functionName: "getPrice",
    args: [XNGN],
  }) as { data: Props };

  if (!data) {
    return 0;
  }
  const rate = data?.priceE6 ? Number(data?.priceE6) / 1_000_000 : 0;
  return rate;
};

export default useExchangeRate;
