import fs from 'fs';

import Class from './Class';
import value from './Value';
import Function from './Function';

async function create() {
    // console.log(value);
    // console.log(Class);__dirname

    let func = new Function();
    let f = await func.setup();
    let json = Class.concat(value).concat(f);
    console.log(json);
    fs.writeFile('./processing-complete.json', JSON.stringify(json));
}

create();

