import fs from 'fs';
import path from 'path';

class Function {
    constructor() {
        this.FunctionKind = 2;
        this.Function = [
            {
                "label": "setup",
                "kind": this.FunctionKind,
                "documentation": "文字列",
                "insertText": "for"
            }
        ];
    }

    async setup() {
        let pdeFiles = await this.getPdeFiles();
        let pdeData = [];
        pdeFiles.forEach((element) => {
            pdeData[element.filename] = element.data;
        });
        this.Function = this.Function.map((block) => {
            const file = block.insertText;
            const text = pdeData[file];
            block.insertText = text;
            return block;
        });
        return this.Function;
    }

    getPdeFiles() {
        return new Promise((resolve) => {
            try {
                fs.readdir("Function/pde", (async (err, files) => {
                    if (err) throw err;
                    files = files.filter((file) => {
                        return /.pde$/.test(file)
                    })
                    let pdeFiles = await Promise.all(
                        files.map(async (file) => {
                            let filepath = path.join(__dirname, "pde", file);
                            return {
                                filename: file.replace('.pde', ''),
                                data: await this.getPdeFile(filepath)
                            }
                        })
                    );
                    resolve(pdeFiles);
                }));
            }
            catch (err) {
                console.warn(err);
            }
        });
    }

    getPdeFile(file) {
        return new Promise((resolve) => {
            fs.readFile(file, 'utf-8', ((err, data) => {
                resolve(data);
            }))
        });
    }
}
export default Function;
