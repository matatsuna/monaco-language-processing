# monaco-language-processing

Microsoftが開発している[monaco](https://github.com/Microsoft/monaco-editor) のprocessing language定義を作ろうしたもの

## 注意

[monaco-languages](https://github.com/Microsoft/monaco-languages)に対応したプロジェクトではありません。

monacoの構文定義である[monarch](https://microsoft.github.io/monaco-editor/monarch.html)にかませるファイルです。

[javaのmonarch](https://github.com/Microsoft/monaco-editor/blob/master/website/monarch.html#L507)を元に足りない関数を`monaco.languages.registerCompletionItemProvider()`で判定します。

## 使い方

### step 1

`git clone`やzipダウンロードして`processing-language.json`をコピーする。

### step 2

```javascript
    import * as monaco from 'monaco-editor';
    import pde from './processingMonarch'; // javaのmonarchをコピーしたもの https://github.com/Microsoft/monaco-editor/blob/master/website/monarch.html#L507
    import processingSnipet from './processing-language.json';// このファイル

    // Register a new language
    monaco.languages.register({ id: 'Processing' });

    // Register a tokens provider for the language
    monaco.languages.setMonarchTokensProvider('Processing', pde);
    monaco.languages.registerCompletionItemProvider('Processing', {
        provideCompletionItems: function (model, position) {
            return processingSnipet;
        }
    });

    const container = document.getElementById("container");

    const editor = monaco.editor.create(container, {
        value: "",// コードの初期値を入れる
        language: "Processing",
        lineNumbers: "off",
        roundedSelection: false,
        scrollBeyondLastLine: false,
        readOnly: false,
        theme: "vs-dark",
    });
    setTimeout(() => {
        editor.updateOptions({
            lineNumbers: "on",
            "autoIndent": true,
            "formatOnPaste": true,
            "formatOnType": true
        });
    }, 1000);
```

## 開発

> npm start

- p5Function/pdeの中に関数が取りうる引数の数など
- `p5Function/func.json` , `p5Class.json` , `p5Value.json` の中 `documantation` に関数の説明
- 記法は[Monarch Documentaion](https://microsoft.github.io/monaco-editor/monarch.html)を参照
