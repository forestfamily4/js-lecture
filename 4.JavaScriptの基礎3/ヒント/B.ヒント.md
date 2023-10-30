## ヒント

これからたくさんの関数が出てきますが、`isNaN(n)`(`n`には元々数値が代入されているものとします)のように変換したい数値を引数に入れて使う関数と、`n.toString()`のように数値がプロパティとして持っている関数があります。前者がグローバルオブジェクトで、後者はメソッドと呼ばれます。間違って`n.isNaN()`や`toString(n)`などとしないように、この違いに気を付けましょう。

### 大問1

1. 
- 座標に対応する変数xとyを定義しましょう。乱数を生成するには、関数[`Math.random()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/random)が使えます。この関数は0以上1未満の乱数を返します。
- ある点(x, y)が円の中にあるかどうかは、x^2 + y^2 が 1以下かどうかで判定できます。

### 大問2

1.
- 関数[`Math.floor()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)は数値を切り捨てる関数です。引数が負の数のときの挙動を確認しておきましょう。

2.
- 文字列を数値にする方法にはいくつかあります。[`parseInt()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/parseInt)・[`parseFloat()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)・[`Number()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/Number)などです。引数にいろいろな値を入れてみて、実際にそれぞれの挙動を確かめましょう(小数、負の数、数値ではない文字列など)。
- 上で実験をしていくと、`NaN`という値が出てきたと思います。これはNot A Numberの略で、文字通り数値ではないことを表します。変換した結果が`NaN`かを確かめるためには、関数[`isNaN()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/isNaN)を使います。
- 上に挙げた関数を使って文字列を数値に変換したら、1問目で作った関数を使って整数に変換しましょう。

3.
- まずは第2問で作った関数を使って、文字列を整数に変換しましょう。
- [`toString()`](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)は、あらゆるものを文字列に変換してくれる関数です。
- 引数に基数(=何進数か)を指定することで、数値をその基数に変換した文字列を返します。

4.
- `parseInt()`の第二引数に基数(何進数か)を指定することで、第一引数の文字列を指定した基数の数値と解釈して変換します。(例: `parseInt("ff", 16)` -> `255`)
