import { describe, it, expect } from 'vitest';
import { generatePrivateKey } from './keyGenerator.ts';

describe('Key generator', () => {
  it('should generate a valid private key', () => {
    const privateKey = generatePrivateKey();
    expect(privateKey).toMatch(/^[0-9a-fA-F]{64}$/);
  });
  it('Should generate different private keys on each execution', () => {
    const key1 = generatePrivateKey();
    const key2 = generatePrivateKey();

    expect(key1).not.toBe(key2);
  });
  it('Private key should have 64 characters', () => {
    const key = generatePrivateKey();

    expect(key.length).toBe(64);
  })
});