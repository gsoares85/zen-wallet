import { describe, expect, it } from 'vitest';
import { generatePrivateKey } from './keyGenerator.ts';
import { derivePublicKey } from './keyDerivation.ts';

describe("Key Derivation", () => {
  it("should derive key", () => {
    const privateKey = generatePrivateKey();
    const publicKey = derivePublicKey(privateKey);

    expect(publicKey).toMatch(/^[0-9a-fA-F]{130}$/);
  });
  it("Should throw error if private key is invalid", () => {
    expect(() => derivePublicKey('1234')).toThrow('Invalid private key');
  })
})