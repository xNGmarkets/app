// HTS associate() exposed by the token facade (Hedera)
export const HTS_ASSOC_ABI = [
  {
    name: "isAssociated",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "account", type: "address" },
      { name: "token", type: "address" },
    ],
    outputs: [{ type: "bool" }],
  },
];
