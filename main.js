import fs from 'fs';
import Class from './Class';
import value from './Value';
console.log(value);
console.log(Class);
let json = Class.concat(value);

fs.writeFile('./processing-complete.json', JSON.stringify(json));
