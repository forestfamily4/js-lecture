# Promise と非同期処理

## 問題

1. 以下のコードを実行すると、どのような順番で出力されるか予想してください。

```js
const promise = new Promise((resolve, reject) => {
  console.log("promise");
  resolve();
});

promise.then(() => console.log("then"));

console.log("global");
```

2. 3 秒後に Hello World!と出力されるコードを書いてください。

3. 以下のコードを完成させてください。

```js
async function execAsync(callback,time){
    ...
}

// 以下のコードを実行すると、1秒後にHello World!と出力される

execAsync(() => {console.log("Hello World!")}, 1000);

```

4. 以下のコードを完成させてください。

```js
async function asyncFunc1() {
    return setTimeout(() => {
        return 1;
    }, 3000);
}

async function asyncFunc2() {
    return setTimeout(() => {
        return 2;
    }, 2000);
}

async function asyncFunc3() {
    return setTimeout(() => {
        return 3;
    }, 1000);
}

asyncParallel([asyncFunc1, asyncFunc2, asyncFunc3], result => {
    console.log(result);
    // 1, 2, 3 と順番に実行し結果を表示する。
});

async function asyncParallel(asyncFuncs, callback) {
    ...
}

```

