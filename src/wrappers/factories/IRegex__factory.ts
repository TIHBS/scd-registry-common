/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { IRegex, IRegexInterface } from "../IRegex";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "input",
        type: "string",
      },
    ],
    name: "count",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "input",
        type: "string",
      },
    ],
    name: "find",
    outputs: [
      {
        internalType: "uint256",
        name: "begin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "end",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "accepts",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "setUtilAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "input",
        type: "string",
      },
    ],
    name: "tokenize",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IRegex__factory {
  static readonly abi = _abi;
  static createInterface(): IRegexInterface {
    return new utils.Interface(_abi) as IRegexInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IRegex {
    return new Contract(address, _abi, signerOrProvider) as IRegex;
  }
}
