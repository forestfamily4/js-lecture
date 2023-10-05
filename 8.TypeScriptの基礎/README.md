# TypeScriptの基礎

基本的には[サバイバルTypeScript](https://typescriptbook.jp/)を参考にすること。

## 環境構築

プリントを参照。

## 型

### 基本

```typescript
let a: number = 1;
let b: string = 'hoge';
let c: boolean = true;
let g: number[] = [1, 2, 3];
let h: Array<number> = [1, 2, 3];
let i: [string, number] = ['hoge', 1];
let j: unknown[] = [1, 'hoge', true];

const a=1 //number型
```

```bash
npm init
npm i -D typescript
node dist/index.js
```