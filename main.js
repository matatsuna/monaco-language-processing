import fs from 'fs';
import p5Class from './p5Class.json';
import p5Value from './p5Value.json';
import p5Function from './p5Function';

async function create() {
    // processingの関数をリストから作成する
    let p5function = new p5Function();
    let p5f = await p5function.setup();

    // processingの定数をリストから作成する
    const valueKind = 11;
    const p5value = p5Value.map((value) => {
        value.kind = valueKind;
        return value;
    });

    // processingのクラスをリストから作成する
    const classKind = 6;
    const p5class = p5Class.map((c) => {
        c.kind = classKind;
        return c;
    });

    const json = p5class.concat(p5value).concat(p5f);
    fs.writeFile('./processing-language.json', JSON.stringify(json));
}

create();

