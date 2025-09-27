import CLOB_ABI from "@/config/abis/clob.abi";
import { initiateSigner } from "@/config/wagmi/ethers";
import { CLOB_CONTRACT } from "@/constants/contracts";
import { Contract } from "ethers";
import { erc20Abi } from "viem";

export async function approveTokenForSpend(
  tokenAddress: any,
  amount: any,
  spender: any,
) {
  const signer = await initiateSigner();

  const contract = new Contract(tokenAddress, erc20Abi, signer);
  const allowance = await contract.allowance(
    await signer.getAddress(),
    spender,
  );

  if (allowance < amount) {
    const res = await contract.approve(spender, amount);
    await res.wait();
  }
}

export async function buyAndSellStock(
  asset: string,
  price: number,
  quantity: number,
  side: number,
) {
  const signer = await initiateSigner();
  const contract = new Contract(CLOB_CONTRACT, CLOB_ABI, signer);

  const qtyE6 = BigInt(quantity * 1e6);
  const pxE6 = BigInt(price * 1e6);
  const res = await contract.place(asset, side, false, qtyE6, pxE6);
  const tx = await res.wait();

  //match orders after placing buy/sell order
  await matchOrders(asset);

  const logs = tx["logs"];
  const topics = logs[0]["topics"];
  const orderIdHex = topics[1];
  const orderId = Number(orderIdHex) ?? null;

  return { orderId };
}

export async function matchOrders(asset: string) {
  try {
    const signer = await initiateSigner();
    const contract = new Contract(CLOB_CONTRACT, CLOB_ABI, signer);
    const txM = await contract.matchBest(asset, 10);
    const rcM = await txM.wait();
    console.log(`  • matchBest tx: ${rcM.hash}`);
  } catch (error) {
    console.error("Error matching orders:", error);
  }
}
