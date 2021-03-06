/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface IRegexInterface extends utils.Interface {
  contractName: "IRegex";
  functions: {
    "count(string)": FunctionFragment;
    "find(string)": FunctionFragment;
    "setUtilAddress(address)": FunctionFragment;
    "tokenize(string)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "count", values: [string]): string;
  encodeFunctionData(functionFragment: "find", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setUtilAddress",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "tokenize", values: [string]): string;

  decodeFunctionResult(functionFragment: "count", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "find", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setUtilAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tokenize", data: BytesLike): Result;

  events: {};
}

export interface IRegex extends BaseContract {
  contractName: "IRegex";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IRegexInterface;

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
    count(input: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    find(
      input: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, boolean] & {
        begin: BigNumber;
        end: BigNumber;
        accepts: boolean;
      }
    >;

    setUtilAddress(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tokenize(input: string, overrides?: CallOverrides): Promise<[string[]]>;
  };

  count(input: string, overrides?: CallOverrides): Promise<BigNumber>;

  find(
    input: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, boolean] & {
      begin: BigNumber;
      end: BigNumber;
      accepts: boolean;
    }
  >;

  setUtilAddress(
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tokenize(input: string, overrides?: CallOverrides): Promise<string[]>;

  callStatic: {
    count(input: string, overrides?: CallOverrides): Promise<BigNumber>;

    find(
      input: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, boolean] & {
        begin: BigNumber;
        end: BigNumber;
        accepts: boolean;
      }
    >;

    setUtilAddress(_address: string, overrides?: CallOverrides): Promise<void>;

    tokenize(input: string, overrides?: CallOverrides): Promise<string[]>;
  };

  filters: {};

  estimateGas: {
    count(input: string, overrides?: CallOverrides): Promise<BigNumber>;

    find(input: string, overrides?: CallOverrides): Promise<BigNumber>;

    setUtilAddress(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tokenize(input: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    count(
      input: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    find(
      input: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setUtilAddress(
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tokenize(
      input: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
