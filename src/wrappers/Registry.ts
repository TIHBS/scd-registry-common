/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace Registry {
  export type SCDMetadataStruct = {
    name: string;
    author: string;
    internalAddress: string;
    url: string;
    signature: string;
    version: string;
    functions: string[];
    events: string[];
    isValid: boolean;
    blockChainType: BigNumberish;
  };

  export type SCDMetadataStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string,
    string[],
    string[],
    boolean,
    number
  ] & {
    name: string;
    author: string;
    internalAddress: string;
    url: string;
    signature: string;
    version: string;
    functions: string[];
    events: string[];
    isValid: boolean;
    blockChainType: number;
  };

  export type SCDMetadataWithIDStruct = {
    id: BigNumberish;
    metadata: Registry.SCDMetadataStruct;
  };

  export type SCDMetadataWithIDStructOutput = [
    BigNumber,
    Registry.SCDMetadataStructOutput
  ] & { id: BigNumber; metadata: Registry.SCDMetadataStructOutput };

  export type SCDMetadataInStruct = {
    name: string;
    internalAddress: string;
    url: string;
    signature: string;
    version: string;
    functions: string[];
    events: string[];
    blockChainType: BigNumberish;
  };

  export type SCDMetadataInStructOutput = [
    string,
    string,
    string,
    string,
    string,
    string[],
    string[],
    number
  ] & {
    name: string;
    internalAddress: string;
    url: string;
    signature: string;
    version: string;
    functions: string[];
    events: string[];
    blockChainType: number;
  };
}

export interface RegistryInterface extends utils.Interface {
  contractName: "Registry";
  functions: {
    "indicesToMetadata(uint256[])": FunctionFragment;
    "query(string)": FunctionFragment;
    "regexAddress()": FunctionFragment;
    "retrieveByAuthor(address)": FunctionFragment;
    "retrieveByEvent(string)": FunctionFragment;
    "retrieveByFunction(string)": FunctionFragment;
    "retrieveById(uint256)": FunctionFragment;
    "retrieveByInternalAddress(string)": FunctionFragment;
    "retrieveByName(string)": FunctionFragment;
    "retrieveBySignature(string)": FunctionFragment;
    "retrieveByType(uint8)": FunctionFragment;
    "retrieveByUrl(string)": FunctionFragment;
    "retrieveByVersion(string)": FunctionFragment;
    "setRegexAddress(address)": FunctionFragment;
    "store((string,string,string,string,string,string[],string[],uint8))": FunctionFragment;
    "storeMultiple((string,string,string,string,string,string[],string[],uint8)[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "indicesToMetadata",
    values: [BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "query", values: [string]): string;
  encodeFunctionData(
    functionFragment: "regexAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "retrieveByAuthor",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "retrieveByEvent",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "retrieveByFunction",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "retrieveById",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "retrieveByInternalAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "retrieveByName",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "retrieveBySignature",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "retrieveByType",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "retrieveByUrl",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "retrieveByVersion",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setRegexAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "store",
    values: [Registry.SCDMetadataInStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "storeMultiple",
    values: [Registry.SCDMetadataInStruct[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "indicesToMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "query", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "regexAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retrieveByAuthor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retrieveByEvent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retrieveByFunction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retrieveById",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retrieveByInternalAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retrieveByName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retrieveBySignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retrieveByType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retrieveByUrl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "retrieveByVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRegexAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "store", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "storeMultiple",
    data: BytesLike
  ): Result;

  events: {
    "ContractRegistered(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ContractRegistered"): EventFragment;
}

export type ContractRegisteredEvent = TypedEvent<
  [BigNumber],
  { id: BigNumber }
>;

export type ContractRegisteredEventFilter =
  TypedEventFilter<ContractRegisteredEvent>;

export interface Registry extends BaseContract {
  contractName: "Registry";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RegistryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    indicesToMetadata(
      indices: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[Registry.SCDMetadataWithIDStructOutput[]]>;

    query(
      _query: string,
      overrides?: CallOverrides
    ): Promise<[Registry.SCDMetadataWithIDStructOutput[]]>;

    regexAddress(overrides?: CallOverrides): Promise<[string]>;

    retrieveByAuthor(
      _author: string,
      overrides?: CallOverrides
    ): Promise<[Registry.SCDMetadataWithIDStructOutput[]]>;

    retrieveByEvent(
      _event: string,
      overrides?: CallOverrides
    ): Promise<[Registry.SCDMetadataWithIDStructOutput[]]>;

    retrieveByFunction(
      _function: string,
      overrides?: CallOverrides
    ): Promise<[Registry.SCDMetadataWithIDStructOutput[]]>;

    retrieveById(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[Registry.SCDMetadataWithIDStructOutput]>;

    retrieveByInternalAddress(
      _internalAddress: string,
      overrides?: CallOverrides
    ): Promise<[Registry.SCDMetadataWithIDStructOutput[]]>;

    retrieveByName(
      _name: string,
      overrides?: CallOverrides
    ): Promise<[Registry.SCDMetadataWithIDStructOutput[]]>;

    retrieveBySignature(
      _signature: string,
      overrides?: CallOverrides
    ): Promise<[Registry.SCDMetadataWithIDStructOutput[]]>;

    retrieveByType(
      _type: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[Registry.SCDMetadataWithIDStructOutput[]]>;

    retrieveByUrl(
      _url: string,
      overrides?: CallOverrides
    ): Promise<[Registry.SCDMetadataWithIDStructOutput[]]>;

    retrieveByVersion(
      _version: string,
      overrides?: CallOverrides
    ): Promise<[Registry.SCDMetadataWithIDStructOutput[]]>;

    setRegexAddress(
      _regexAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    store(
      _metadata: Registry.SCDMetadataInStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    storeMultiple(
      _metadata: Registry.SCDMetadataInStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  indicesToMetadata(
    indices: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<Registry.SCDMetadataWithIDStructOutput[]>;

  query(
    _query: string,
    overrides?: CallOverrides
  ): Promise<Registry.SCDMetadataWithIDStructOutput[]>;

  regexAddress(overrides?: CallOverrides): Promise<string>;

  retrieveByAuthor(
    _author: string,
    overrides?: CallOverrides
  ): Promise<Registry.SCDMetadataWithIDStructOutput[]>;

  retrieveByEvent(
    _event: string,
    overrides?: CallOverrides
  ): Promise<Registry.SCDMetadataWithIDStructOutput[]>;

  retrieveByFunction(
    _function: string,
    overrides?: CallOverrides
  ): Promise<Registry.SCDMetadataWithIDStructOutput[]>;

  retrieveById(
    _id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<Registry.SCDMetadataWithIDStructOutput>;

  retrieveByInternalAddress(
    _internalAddress: string,
    overrides?: CallOverrides
  ): Promise<Registry.SCDMetadataWithIDStructOutput[]>;

  retrieveByName(
    _name: string,
    overrides?: CallOverrides
  ): Promise<Registry.SCDMetadataWithIDStructOutput[]>;

  retrieveBySignature(
    _signature: string,
    overrides?: CallOverrides
  ): Promise<Registry.SCDMetadataWithIDStructOutput[]>;

  retrieveByType(
    _type: BigNumberish,
    overrides?: CallOverrides
  ): Promise<Registry.SCDMetadataWithIDStructOutput[]>;

  retrieveByUrl(
    _url: string,
    overrides?: CallOverrides
  ): Promise<Registry.SCDMetadataWithIDStructOutput[]>;

  retrieveByVersion(
    _version: string,
    overrides?: CallOverrides
  ): Promise<Registry.SCDMetadataWithIDStructOutput[]>;

  setRegexAddress(
    _regexAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  store(
    _metadata: Registry.SCDMetadataInStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  storeMultiple(
    _metadata: Registry.SCDMetadataInStruct[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    indicesToMetadata(
      indices: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<Registry.SCDMetadataWithIDStructOutput[]>;

    query(
      _query: string,
      overrides?: CallOverrides
    ): Promise<Registry.SCDMetadataWithIDStructOutput[]>;

    regexAddress(overrides?: CallOverrides): Promise<string>;

    retrieveByAuthor(
      _author: string,
      overrides?: CallOverrides
    ): Promise<Registry.SCDMetadataWithIDStructOutput[]>;

    retrieveByEvent(
      _event: string,
      overrides?: CallOverrides
    ): Promise<Registry.SCDMetadataWithIDStructOutput[]>;

    retrieveByFunction(
      _function: string,
      overrides?: CallOverrides
    ): Promise<Registry.SCDMetadataWithIDStructOutput[]>;

    retrieveById(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<Registry.SCDMetadataWithIDStructOutput>;

    retrieveByInternalAddress(
      _internalAddress: string,
      overrides?: CallOverrides
    ): Promise<Registry.SCDMetadataWithIDStructOutput[]>;

    retrieveByName(
      _name: string,
      overrides?: CallOverrides
    ): Promise<Registry.SCDMetadataWithIDStructOutput[]>;

    retrieveBySignature(
      _signature: string,
      overrides?: CallOverrides
    ): Promise<Registry.SCDMetadataWithIDStructOutput[]>;

    retrieveByType(
      _type: BigNumberish,
      overrides?: CallOverrides
    ): Promise<Registry.SCDMetadataWithIDStructOutput[]>;

    retrieveByUrl(
      _url: string,
      overrides?: CallOverrides
    ): Promise<Registry.SCDMetadataWithIDStructOutput[]>;

    retrieveByVersion(
      _version: string,
      overrides?: CallOverrides
    ): Promise<Registry.SCDMetadataWithIDStructOutput[]>;

    setRegexAddress(
      _regexAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    store(
      _metadata: Registry.SCDMetadataInStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    storeMultiple(
      _metadata: Registry.SCDMetadataInStruct[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ContractRegistered(uint256)"(id?: null): ContractRegisteredEventFilter;
    ContractRegistered(id?: null): ContractRegisteredEventFilter;
  };

  estimateGas: {
    indicesToMetadata(
      indices: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    query(_query: string, overrides?: CallOverrides): Promise<BigNumber>;

    regexAddress(overrides?: CallOverrides): Promise<BigNumber>;

    retrieveByAuthor(
      _author: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    retrieveByEvent(
      _event: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    retrieveByFunction(
      _function: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    retrieveById(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    retrieveByInternalAddress(
      _internalAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    retrieveByName(
      _name: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    retrieveBySignature(
      _signature: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    retrieveByType(
      _type: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    retrieveByUrl(_url: string, overrides?: CallOverrides): Promise<BigNumber>;

    retrieveByVersion(
      _version: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setRegexAddress(
      _regexAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    store(
      _metadata: Registry.SCDMetadataInStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    storeMultiple(
      _metadata: Registry.SCDMetadataInStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    indicesToMetadata(
      indices: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    query(
      _query: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    regexAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    retrieveByAuthor(
      _author: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    retrieveByEvent(
      _event: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    retrieveByFunction(
      _function: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    retrieveById(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    retrieveByInternalAddress(
      _internalAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    retrieveByName(
      _name: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    retrieveBySignature(
      _signature: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    retrieveByType(
      _type: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    retrieveByUrl(
      _url: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    retrieveByVersion(
      _version: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setRegexAddress(
      _regexAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    store(
      _metadata: Registry.SCDMetadataInStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    storeMultiple(
      _metadata: Registry.SCDMetadataInStruct[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
