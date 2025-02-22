import { ec } from 'elliptic';
import { Buffer } from 'buffer';

const EC = new ec('secp256k1');
const BN = EC.curve.n.constructor;
const ZERO = new BN(0);

/**
 * Generates a valid random private key.
 *
 * @returns {string} A private key represented as a string in hexadecimal format.
 *
 * @example
 * const privateKey = generatePrivateKey();
 * console.log(privateKey); // Example output: '3a1070cd...', always 64 characters
 */
export const generatePrivateKey = () => {
  let privateKey = '';
  do {
    privateKey = randomBytes(32).toString('hex');
  } while (!isValidPrivateKey(privateKey));

  return privateKey;
};

const randomBytes = (size: number) => {
  const array = new Uint8Array(size);

  if (typeof window !== 'undefined' && window.crypto) {
    window.crypto.getRandomValues(array);
  } else if (typeof global !== 'undefined' && global.crypto) {
    global.crypto.getRandomValues(array);
  } else {
    throw new Error('Random byte generation is not supported in this environment');
  }

  return Buffer.from(array);

};


/**
 * Verifies if the provided private key is valid for the `secp256k1` curve.
 *
 * @param {string} privateKey - A string in hexadecimal format representing a private key.
 * @returns {boolean} `true` if the private key is valid, or `false` otherwise.
 *
 * @example
 * const valid = isValidPrivateKey('e9873d79c6d87dc0fb6a5778633389...');
 * console.log(valid); // true or false
 */
const isValidPrivateKey = (privateKey: string) => {
  const bn = EC.keyFromPrivate(privateKey, 'hex').getPrivate();
  return bn.gt(ZERO) && bn.lt(EC.curve.n);
};
