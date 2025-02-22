import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const popupPath = resolve('./dist/popup.html');

let popupContent = readFileSync(popupPath, 'utf-8');

popupContent = popupContent.replace(
  '<script type="module" src="/src/popup/index.tsx"></script>',
  '<script type="module" src="/assets/popup.js"></script>'
);

writeFileSync(popupPath, popupContent, 'utf-8');
console.log('popup.html atualizado com o caminho correto para o script.');
