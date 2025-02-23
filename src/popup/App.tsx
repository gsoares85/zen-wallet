import { generatePrivateKey } from '../utils/keyGenerator.ts';
import { useState } from 'react';
import { derivePublicKey } from '../utils/keyDerivation.ts';

function Popup() {
  const [privateKey, setPrivateKey] = useState('');
  const [publicKey, setPublicKey] = useState('');

  const handleGeneratePrivateKey = () => {
    setPrivateKey(generatePrivateKey());
  }

  const handleDerivatePublicKey = () => {
    setPublicKey(derivePublicKey(privateKey));
  }

  return (
    <div className="w-96 bg-white p-4 flex flex-col items-center justify-center shadow-lg">
      <h1 className="text-lg font-bold text-gray-900">Zen Wallet</h1>
      <button
        onClick={handleGeneratePrivateKey}
        className="cursor-pointer mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        type="button"
      >
        Generate Private Key
      </button>
      <p className="text-[10px] mt-4 text-gray-500 break-all px-2">
        {privateKey}
      </p>

      <button
        onClick={handleDerivatePublicKey}
        className="cursor-pointer mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        type="button"
      >
        Generate Private Key
      </button>
      <p className="text-[10px] mt-4 px-2 text-gray-500 break-all">
        {publicKey}
      </p>
    </div>
  );
}

export default Popup;
