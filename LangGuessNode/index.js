const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

const input = process.argv[2];
const langCode = franc(input);

if (langCode === 'und') {
  console.log('Sorry could not find langaue! please input more of it!'.red);
} else {
  console.log(`The langauge is: ${langs.where('3', langCode).name}`.green);
}
