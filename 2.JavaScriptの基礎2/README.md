## 復習問題

1. 下の num1,num2 を入れ替えて代入してください。

```js
let num1 = 10,
  num2 = 20;
```

2. `Math.random`という関数は 0~1 の間の値を返します。
   下の関数を完成させてください。

```js
function getRandom(start, end) {
  //startからendまでのランダムな整数を返す
  //
}
```

3. 下の関数は文字列を反転させる関数です。下の関数を完成させてください。(ヒント:文字列の n 番目の文字はどうやって取得する..?)

```js
function reverseString(str) {
  //strを反転させた文字列を返す
  //
}
```

4. 下の関数を完成させてください。

```js
function reverseSentence(str) {
  //strを単語ごとに反転させた文字列を返す
  //
}

//ex

reverseSentence("I am a student."); // "student. a am I"
```

5. number 型の数が与えられます。それを反転した数を返す関数を作成してください。(0 で終わる場合は反転した時の 0 を省略してください。)

```js
function reverseNumber(num) {
  //numを反転させた数を返す
  //
}

//ex

reverseNumber(123); // 321
```

6. 12 時間形式で入力された時刻を 24 時間形式に変換できる関数を作成してください。

- AMとPMのチェックはendwith関数というものがあるらしい?

- 一桁の場合は最初に0がつきますが..?

```js
// Example
convertTo24HrsFormat("12:10AM"); // 00:10
convertTo24HrsFormat("5:00AM"); // 05:00
convertTo24HrsFormat("12:33PM"); // 12:33
convertTo24HrsFormat("01:59PM"); // 13:59
convertTo24HrsFormat("11:8PM"); // 23:08
convertTo24HrsFormat("10:02PM"); // 22:02
```

```js
function convertTo24HrsFormat(str){
    //strを24時間形式に変換して返す
    //
}
```

7. __発展__ 電話番号が与えられるのでそれが09012345678または08012345678の形式になっているかどうかを判定する関数を作成してください。

- 正規表現というものがあります。ググってください。

```js
function isValidPhoneNumber(str){
    //strが09012345678または08012345678の形式になっているかどうかを判定する
    const regex=/g???/
    return regex.test(str)
}
```

8. 配列が与えられるので、その配列の中にある文字列にnadaが含まれているものだけを抽出して返す関数を作ってください。

- array.map(item=>{???})という物がある...？mapとは...?

```js
function filterItems(arr){
    //arrの中にnadaが含まれているものだけを抽出して返す
    //
}

//ex

filterItems(["nada", "hoge", "nada", "fuga"]); // ["nada", "nada"]
```

