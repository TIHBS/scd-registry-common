/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IUtil, IUtilInterface } from "../IUtil";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        name: "_str",
        type: "string",
      },
      {
        name: "begin",
        type: "uint256",
      },
      {
        name: "end",
        type: "uint256",
      },
    ],
    name: "substring",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_str",
        type: "string",
      },
      {
        name: "pos",
        type: "uint256",
      },
    ],
    name: "split",
    outputs: [
      {
        name: "",
        type: "string",
      },
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "_str",
        type: "string",
      },
      {
        name: "_delim",
        type: "string",
      },
    ],
    name: "tokenize",
    outputs: [
      {
        name: "",
        type: "string[]",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "str",
        type: "string",
      },
    ],
    name: "copy",
    outputs: [
      {
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "pure",
    type: "function",
  },
];

export class IUtil__factory {
  static readonly abi = _abi;
  static createInterface(): IUtilInterface {
    return new utils.Interface(_abi) as IUtilInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IUtil {
    return new Contract(address, _abi, signerOrProvider) as IUtil;
  }
}