import { Parameter } from "./Parameter";
import { Scope } from "./Types";

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
