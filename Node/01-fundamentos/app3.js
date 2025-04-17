const fs = require('fs');

const content = fs.readFileSync('readme.md', 'utf8');

const wordCount = content.split(' ').length;

const words = content.split(' ');

/*let reactWordCount = 0;*/

/*for (let i = 0; i < wordCount; i++) {
    if (words[i].toLowerCase() === 'react') {
        reactWordCount++;
    }
}*/

/*for (let i = 0; i < wordCount; i++) {
    if (words[i].toLowerCase().includes('react')) {
        reactWordCount++;
    }
}*/

const reactWordCount = content.match(/react/gi ?? []).length;

console.log('Palabras: ', wordCount);
console.log('Palabras React: ', reactWordCount);