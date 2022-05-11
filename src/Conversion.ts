import { Metadata } from "./interfaces/Metadata";
import { Registry } from "./wrappers/Registry";
import { fromBlockchainType, toBlockchainType } from "./interfaces/Types";

export function toContractType(metadata: Metadata): Registry.SCDMetadataStruct {
  return {
    name: metadata.name,
    author: metadata.author,
    internalAddress: metadata.internal_address,
    url: metadata.url.toString(),
    signature: metadata.signature,
    version: metadata.version,
    functions: metadata.functions,
    events: metadata.events ? metadata.events : [],
    isValid: metadata.is_valid,
    blockChainType: fromBlockchainType.get(metadata.blockchain_type)!,
  };
}

export function fromContractType(
  metadata: Registry.SCDMetadataStruct
): Metadata {
  return {
    name: metadata.name,
    author: metadata.author,
    internal_address: metadata.internalAddress,
    url: new URL(metadata.url),
    signature: metadata.signature,
    version: metadata.version,
    functions: metadata.functions,
    events: metadata.events,
    is_valid: metadata.isValid,
    blockchain_type: toBlockchainType.get(metadata.blockChainType as number)!,
  };
}
