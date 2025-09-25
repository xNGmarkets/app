const ORACLE_HUB_ABI = [
  {
    type: "constructor",
    stateMutability: "undefined",
    payable: false,
    inputs: [{ type: "uint64", name: "maxStaleness_" }],
  },
  {
    type: "event",
    anonymous: false,
    name: "BandSet",
    inputs: [
      { type: "address", name: "asset", indexed: true },
      { type: "uint256", name: "midE6", indexed: false },
      { type: "uint32", name: "widthBps", indexed: false },
      { type: "uint64", name: "ts", indexed: false },
    ],
  },
  {
    type: "event",
    anonymous: false,
    name: "MaxStalenessSet",
    inputs: [{ type: "uint64", name: "seconds_", indexed: false }],
  },
  {
    type: "event",
    anonymous: false,
    name: "OwnerSet",
    inputs: [{ type: "address", name: "owner", indexed: true }],
  },
  {
    type: "event",
    anonymous: false,
    name: "PriceSet",
    inputs: [
      { type: "address", name: "asset", indexed: true },
      { type: "uint256", name: "priceE6", indexed: false },
      { type: "uint64", name: "seq", indexed: false },
      { type: "uint64", name: "ts", indexed: false },
      { type: "bytes32", name: "hcsMsgId", indexed: false },
    ],
  },
  {
    type: "function",
    name: "getBand",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [{ type: "address", name: "asset" }],
    outputs: [
      {
        type: "tuple",
        name: "",
        components: [
          { type: "uint256", name: "midE6" },
          { type: "uint32", name: "widthBps" },
          { type: "uint64", name: "ts" },
        ],
      },
    ],
  },
  {
    type: "function",
    name: "getPrice",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [{ type: "address", name: "asset" }],
    outputs: [
      {
        type: "tuple",
        name: "",
        components: [
          { type: "uint256", name: "priceE6" },
          { type: "uint64", name: "seq" },
          { type: "uint64", name: "ts" },
          { type: "bytes32", name: "hcsMsgId" },
        ],
      },
    ],
  },
  {
    type: "function",
    name: "maxStaleness",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [],
    outputs: [{ type: "uint64", name: "" }],
  },
  {
    type: "function",
    name: "owner",
    constant: true,
    stateMutability: "view",
    payable: false,
    inputs: [],
    outputs: [{ type: "address", name: "" }],
  },
  {
    type: "function",
    name: "setBand",
    constant: false,
    payable: false,
    inputs: [
      { type: "address", name: "asset" },
      {
        type: "tuple",
        name: "b",
        components: [
          { type: "uint256", name: "midE6" },
          { type: "uint32", name: "widthBps" },
          { type: "uint64", name: "ts" },
        ],
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "setBands",
    constant: false,
    payable: false,
    inputs: [
      { type: "address[]", name: "assets" },
      {
        type: "tuple[]",
        name: "bs",
        components: [
          { type: "uint256", name: "midE6" },
          { type: "uint32", name: "widthBps" },
          { type: "uint64", name: "ts" },
        ],
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "setMaxStaleness",
    constant: false,
    payable: false,
    inputs: [{ type: "uint64", name: "s" }],
    outputs: [],
  },
  {
    type: "function",
    name: "setPrice",
    constant: false,
    payable: false,
    inputs: [
      { type: "address", name: "asset" },
      {
        type: "tuple",
        name: "p",
        components: [
          { type: "uint256", name: "priceE6" },
          { type: "uint64", name: "seq" },
          { type: "uint64", name: "ts" },
          { type: "bytes32", name: "hcsMsgId" },
        ],
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "setPrices",
    constant: false,
    payable: false,
    inputs: [
      { type: "address[]", name: "assets" },
      {
        type: "tuple[]",
        name: "ps",
        components: [
          { type: "uint256", name: "priceE6" },
          { type: "uint64", name: "seq" },
          { type: "uint64", name: "ts" },
          { type: "bytes32", name: "hcsMsgId" },
        ],
      },
    ],
    outputs: [],
  },
  {
    type: "function",
    name: "transferOwnership",
    constant: false,
    payable: false,
    inputs: [{ type: "address", name: "newOwner" }],
    outputs: [],
  },
];

export default ORACLE_HUB_ABI;
