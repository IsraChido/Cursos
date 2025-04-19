/*import fs from 'fs';

const message = 'Tabla del 5:';

console.log(message + ' \n');

let array = [];

array.push(message);

for(let i = 1; i < 10; i++) {
    console.log('5 * ' + i + ' = ' + (5 * i));
    array.push('5 * ' + i + ' = ' + (5 * i));
}

fs.writeFileSync('./outputs/tabla-5.txt', array.toString());*/
import {yarg} from './config/plugins/args.plugin';

import fs from 'fs';

let outputMessage = '';
const base = yarg.b;
const headerMessage = 'Tabla del ' + base + ': \n\n';

for (let i = 1; i <= yarg.l; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;
if(yarg.s === true) {
    console.log(outputMessage);
}

const outputPath = `outputs/folder1/folder2`;

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`./${outputPath}/tabla-${base}.txt`, outputMessage);
console.log('File created!');