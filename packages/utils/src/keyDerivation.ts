import BN from "bn.js";

import { mimcHash } from "./mimcsponge";

// creates subkeys via MiMC hash, output keys are not padded
export function subkey(keyHex: string, input: Buffer): string {
  const privKeyBuf = new BN(keyHex, "hex").toBuffer();
  // TODO: check against existing usage of mimc
  // TODO: check that MPC is possible with mimc, with tests
  const output = mimcHash(1, privKeyBuf, input);
  return output.xL.toString(16);
}
