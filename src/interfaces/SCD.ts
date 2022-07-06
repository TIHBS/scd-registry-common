import { BlockchainType, Lifecycle } from "./Types";
import { Event } from "./Event";
import { Function } from "./Function";
import { BigNumberish } from "ethers";
import { Metadata } from "./Metadata";

export interface SCD {
  scdl_version: string;
  author_pub_key: string;
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

export interface SCDWithID {
  id: BigNumberish;
  scd: SCD;
}

export interface SCDWithMetadata {
  metadata: Metadata;
  scd: SCD;
}
