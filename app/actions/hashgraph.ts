"use server";
import {
  AccountId,
  AccountInfoQuery,
  Client,
  PrivateKey,
  TokenGrantKycTransaction,
  TokenId,
} from "@hashgraph/sdk";

export async function checkTokenAssociation(
  userId: string,
  tokenAddress: string,
) {
  const operatorId = AccountId.fromString(process.env.OPERATOR_ID!);
  const operatorKey = PrivateKey.fromStringECDSA(process.env.OPERATOR_KEY!);
  const client = Client.forTestnet().setOperator(operatorId, operatorKey);

  try {
    const accountId = AccountId.fromString(userId);
    const tokenId = TokenId.fromEvmAddress(0, 0, tokenAddress);

    const accountInfo = await new AccountInfoQuery()
      .setAccountId(accountId)
      .execute(client);

    const isAssociated = Array.from(
      accountInfo.tokenRelationships.values(),
    ).some((rel) => rel.tokenId.toString() === tokenId.toString());

    return isAssociated;
  } catch (error) {
    console.error("Error checking token association:", error);
    return false;
  } finally {
    client.close();
  }
}

export async function grantKyc(userId: string, tokenAddress: string) {
  const operatorId = AccountId.fromString(process.env.OPERATOR_ID!);
  const operatorKey = PrivateKey.fromStringECDSA(process.env.OPERATOR_KEY!);
  const client = Client.forTestnet().setOperator(operatorId, operatorKey);
  try {
    const accountId = AccountId.fromString(userId);
    const tokenId = TokenId.fromEvmAddress(0, 0, tokenAddress);
    const tx = new TokenGrantKycTransaction()
      .setAccountId(accountId)
      .setTokenId(tokenId)
      .freezeWith(client);

    const resp = await tx.execute(client);
    const rec = await resp.getReceipt(client);
    console.log("KYC grant status:", rec.status.toString());
    return rec.status.toString() === "SUCCESS";
  } catch (error) {
    console.error("Error granting KYC on asset", error);
    return false;
  } finally {
    client.close();
  }
}
