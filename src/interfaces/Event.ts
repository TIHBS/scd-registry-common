import { Parameter } from "./Parameter";

export interface Event {
  name: string;
  description?: string;
  outputs: Parameter[];
}
