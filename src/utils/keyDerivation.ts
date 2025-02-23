import { ec } from 'elliptic';

const EC = new ec('secp256k1');

export const derivePublicKey = (privateKey: string) => {
  if (!/^[0-9a-fA-F]{64}$/.test(privateKey)) {
    throw new Error('Invalid private key');
  }
  const keyPair = EC.keyFromPrivate(privateKey, 'hex');
  return keyPair.getPublic().encode('hex', false);
}