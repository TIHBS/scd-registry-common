/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Util, UtilInterface } from "../Util";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "copy",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_str",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "pos",
        type: "uint256",
      },
    ],
    name: "split",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_str",
        type: "string",
      },
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
    ],
    name: "substring",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_str",
        type: "string",
      },
      {
        internalType: "string",
        name: "_delim",
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
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061102d806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80631dcd9b551461005157806325ff7a98146100815780632739527d146100b257806357c82cc1146100e2575b600080fd5b61006b60048036038101906100669190610953565b610112565b6040516100789190610a4a565b60405180910390f35b61009b60048036038101906100969190610a6c565b610128565b6040516100a9929190610ac8565b60405180910390f35b6100cc60048036038101906100c79190610aff565b610140565b6040516100d99190610c83565b60405180910390f35b6100fc60048036038101906100f79190610ca5565b610154565b6040516101099190610a4a565b60405180910390f35b606061011f848484610166565b90509392505050565b60608061013584846101a8565b915091509250929050565b606061014c838361023d565b905092915050565b606061015f8261032e565b9050919050565b60608060608061017687876101a8565b809450819350505061019383878761018e9190610d1d565b6101a8565b80925081945050508293505050509392505050565b60608060006101b685610350565b905060006101cb6101c687610350565b61037e565b905060008583600001516101df9190610d1d565b905080836000018181516101f39190610d1d565b91508181525050808260000181815250508583602001516102149190610d51565b826020018181525050610226836103aa565b61022f836103aa565b945094505050509250929050565b6060600061024a84610350565b9050600061025784610350565b905060006001610270838561042690919063ffffffff16565b61027a9190610d51565b67ffffffffffffffff811115610293576102926107f2565b5b6040519080825280602002602001820160405280156102c657816020015b60608152602001906001900390816102b15790505b50905060005b8151811015610321576102f06102eb84866104ce90919063ffffffff16565b6103aa565b82828151811061030357610302610da7565b5b6020026020010181905250808061031990610dd6565b9150506102cc565b5080935050505092915050565b606061034961034461033f84610350565b61037e565b6103aa565b9050919050565b6103586107a9565b600060208301905060405180604001604052808451815260200182815250915050919050565b6103866107a9565b60405180604001604052808360000151815260200183602001518152509050919050565b60606000826000015167ffffffffffffffff8111156103cc576103cb6107f2565b5b6040519080825280601f01601f1916602001820160405280156103fe5781602001600182028036833780820191505090505b509050600060208201905061041c81856020015186600001516104e8565b8192505050919050565b600080826000015161044a8560000151866020015186600001518760200151610594565b6104549190610d51565b90505b8360000151846020015161046b9190610d51565b81116104c757818061047c90610dd6565b92505082600001516104b68560200151836104979190610d1d565b86600001516104a69190610d1d565b8386600001518760200151610594565b6104c09190610d51565b9050610457565b5092915050565b6104d66107a9565b6104e18383836106de565b5092915050565b5b6020811061052757815183526020836105029190610d51565b92506020826105119190610d51565b91506020816105209190610d1d565b90506104e9565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9050600082111561057e5760018260206105649190610d1d565b6101006105719190610f52565b61057b9190610d1d565b90505b8019835116818551168181178652505050505050565b60008084905060008685116106c55760208511610667576000808611156105ed5760018660206105c49190610d1d565b60086105d09190610f9d565b60026105dc9190610f52565b6105e69190610d1d565b1960001b90505b60008186511690506000878a8a6106049190610d51565b61060e9190610d1d565b905060008386511690505b82811461065957818610610640578a8a6106339190610d51565b96505050505050506106d6565b858061064b90610dd6565b965050838651169050610619565b8596505050505050506106d6565b60008585209050600091505b858861067f9190610d1d565b82116106c35760008684209050808214156106a057839450505050506106d6565b6001846106ad9190610d51565b93505081806106bb90610dd6565b925050610673565b505b86866106d19190610d51565b925050505b949350505050565b6106e66107a9565b60006107048560000151866020015186600001518760200151610594565b905084602001518360200181815250508460200151816107249190610d1d565b836000018181525050846000015185602001516107419190610d51565b81141561075857600085600001818152505061079e565b8360000151836000015161076c9190610d51565b8560000181815161077d9190610d1d565b915081815250508360000151816107949190610d51565b8560200181815250505b829150509392505050565b604051806040016040528060008152602001600081525090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61082a826107e1565b810181811067ffffffffffffffff82111715610849576108486107f2565b5b80604052505050565b600061085c6107c3565b90506108688282610821565b919050565b600067ffffffffffffffff821115610888576108876107f2565b5b610891826107e1565b9050602081019050919050565b82818337600083830152505050565b60006108c06108bb8461086d565b610852565b9050828152602081018484840111156108dc576108db6107dc565b5b6108e784828561089e565b509392505050565b600082601f830112610904576109036107d7565b5b81356109148482602086016108ad565b91505092915050565b6000819050919050565b6109308161091d565b811461093b57600080fd5b50565b60008135905061094d81610927565b92915050565b60008060006060848603121561096c5761096b6107cd565b5b600084013567ffffffffffffffff81111561098a576109896107d2565b5b610996868287016108ef565b93505060206109a78682870161093e565b92505060406109b88682870161093e565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b60005b838110156109fc5780820151818401526020810190506109e1565b83811115610a0b576000848401525b50505050565b6000610a1c826109c2565b610a2681856109cd565b9350610a368185602086016109de565b610a3f816107e1565b840191505092915050565b60006020820190508181036000830152610a648184610a11565b905092915050565b60008060408385031215610a8357610a826107cd565b5b600083013567ffffffffffffffff811115610aa157610aa06107d2565b5b610aad858286016108ef565b9250506020610abe8582860161093e565b9150509250929050565b60006040820190508181036000830152610ae28185610a11565b90508181036020830152610af68184610a11565b90509392505050565b60008060408385031215610b1657610b156107cd565b5b600083013567ffffffffffffffff811115610b3457610b336107d2565b5b610b40858286016108ef565b925050602083013567ffffffffffffffff811115610b6157610b606107d2565b5b610b6d858286016108ef565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b6000610bbf826109c2565b610bc98185610ba3565b9350610bd98185602086016109de565b610be2816107e1565b840191505092915050565b6000610bf98383610bb4565b905092915050565b6000602082019050919050565b6000610c1982610b77565b610c238185610b82565b935083602082028501610c3585610b93565b8060005b85811015610c715784840389528151610c528582610bed565b9450610c5d83610c01565b925060208a01995050600181019050610c39565b50829750879550505050505092915050565b60006020820190508181036000830152610c9d8184610c0e565b905092915050565b600060208284031215610cbb57610cba6107cd565b5b600082013567ffffffffffffffff811115610cd957610cd86107d2565b5b610ce5848285016108ef565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610d288261091d565b9150610d338361091d565b925082821015610d4657610d45610cee565b5b828203905092915050565b6000610d5c8261091d565b9150610d678361091d565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610d9c57610d9b610cee565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000610de18261091d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610e1457610e13610cee565b5b600182019050919050565b60008160011c9050919050565b6000808291508390505b6001851115610e7657808604811115610e5257610e51610cee565b5b6001851615610e615780820291505b8081029050610e6f85610e1f565b9450610e36565b94509492505050565b600082610e8f5760019050610f4b565b81610e9d5760009050610f4b565b8160018114610eb35760028114610ebd57610eec565b6001915050610f4b565b60ff841115610ecf57610ece610cee565b5b8360020a915084821115610ee657610ee5610cee565b5b50610f4b565b5060208310610133831016604e8410600b8410161715610f215782820a905083811115610f1c57610f1b610cee565b5b610f4b565b610f2e8484846001610e2c565b92509050818404811115610f4557610f44610cee565b5b81810290505b9392505050565b6000610f5d8261091d565b9150610f688361091d565b9250610f957fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8484610e7f565b905092915050565b6000610fa88261091d565b9150610fb38361091d565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610fec57610feb610cee565b5b82820290509291505056fea26469706673582212201f7562a8cb0fce8bdf13fffcbed2a5430036b5c4b0dbb2274574c9c5ecd8df9264736f6c63430008090033";

type UtilConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UtilConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Util__factory extends ContractFactory {
  constructor(...args: UtilConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "Util";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Util> {
    return super.deploy(overrides || {}) as Promise<Util>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Util {
    return super.attach(address) as Util;
  }
  connect(signer: Signer): Util__factory {
    return super.connect(signer) as Util__factory;
  }
  static readonly contractName: "Util";
  public readonly contractName: "Util";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UtilInterface {
    return new utils.Interface(_abi) as UtilInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Util {
    return new Contract(address, _abi, signerOrProvider) as Util;
  }
}