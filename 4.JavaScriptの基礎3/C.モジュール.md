# モジュール

モジュールとはほかの人が書いてくれたコード群です。

## モジュールの導入方法

まず package.json というファイルを作成します。

```bash
npm init
```

するといろいろ聞かれますが、プロジェクト名以外は全部 Enter で OK です。
この時 package.json は次のようになります。

```json
{
  "name": "test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

例えば axios というパッケージをインストールします。

```bash
npm i axios
```

このとき、package.json は次のようになります。。

```json
{
  "name": "test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "dependencies": {
    // ここにインストールしたパッケージが追加される
    "axios": "^1.5.0"
  },
  "author": "",
  "license": "ISC"
}
```

## axios



### 問題

## dotenv

## express

### 問題

## node:fs

### 問題

## node:child_process

### 問題

## chalk

### 問題
