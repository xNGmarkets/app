import {
  BORROW_SUPPLY_CONTRACT,
  USDC_XNG_CONTRACT,
} from "@/constants/contracts";
import { erc20Abi } from "viem";
import { useReadContract } from "wagmi";

const useSupplyTvl = () => {
  const { data } = useReadContract({
    address: USDC_XNG_CONTRACT,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [BORROW_SUPPLY_CONTRACT],
  });

  if (!data) return 0;
  return data ? Number(data) / 1_000_000 : 0;
};

export default useSupplyTvl;
