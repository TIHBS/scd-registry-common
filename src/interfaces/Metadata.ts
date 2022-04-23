import { BlockchainType } from "./Types";

export interface Metadata {
  name: string;
  author: string;
  version: string;
  signature: string;
  internal_address: string;
  url: URL;
  blockchain_type: BlockchainType;
  functions: string[];
  events?: string[];
  is_valid: boolean;
}
