import { BigNumberish } from "ethers";

export type Scope = "public" | "private" | "internal" | "external";
export type BlockchainType = "ethereum" | "bitcoin" | "fabric" | "neo";
export type Lifecycle = "ready" | "destroyed";

const toScope = new Map<number, Scope>([
  [0, "public"],
  [1, "private"],
  [2, "internal"],
  [3, "external"],
]);

const toBlockchainType = new Map<number, BlockchainType>([
  [0, "bitcoin"],
  [1, "ethereum"],
  [2, "fabric"],
  [3, "neo"],
]);

const toLifecycle = new Map<number, Lifecycle>([
  [0, "ready"],
  [1, "destroyed"],
]);

const fromScope = new Map<Scope, BigNumberish>([
  ["public", 0],
  ["private", 1],
  ["internal", 2],
  ["external", 3],
]);

const fromBlockchainType = new Map<BlockchainType, BigNumberish>([ 
  ["bitcoin", 0],
  ["ethereum", 1],
  ["fabric", 2],
  ["neo", 3],
]);

const fromLifecycle = new Map<Lifecycle, BigNumberish>([
  ["ready", 0],
  ["destroyed", 1],
]);

export {
  toScope,
  toLifecycle,
  toBlockchainType,
  fromScope,
  fromBlockchainType,
  fromLifecycle,
};
