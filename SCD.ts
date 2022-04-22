export type Scope = "public" | "private" | "internal" | "external";
export type BlockchainType = "ethereum" | "bitcoin" | "fabric" | "neo";
export type Lifecycle = "ready" | "destroyed";

export interface Parameter {
  name: string;
  type: string;
  is_indexed?: boolean;
}

export interface Event {
  name: string;
  description?: string;
  outputs: string;
}

export interface Function {
  name: string;
  description?: string;
  scope: Scope;
  has_side_effects: boolean;
  dispatcher?: string;
  inputs: Parameter[];
  outputs: Parameter[];
  events?: string[];
}

export interface SCD {
  scdl_version: string;
  name: string;
  version: string;
  latest_URL?: URL;
  description?: string;
  author: string;
  created_on: string;
  updated_on?: string;
  life_cycle?: Lifecycle;
  scl?: string;
  blockchain_type: BlockchainType;
  blockchain_version: string;
  internal_address: string;
  metadata?: URL;
  hash?: string;
  is_stateful: true;
  functions: Function[];
  events?: Event[];
}
