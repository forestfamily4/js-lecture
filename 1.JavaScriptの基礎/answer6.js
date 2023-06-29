function multiplyNumbers(a,b){
    return a*b;
}

//とりあえずこれでもよいが、a,bに数値が入っていないときはどうなるだろうか。
//型を制限するとき、typeof value === 'type'という書き方をする。
//typeofはvalueの型を返す。'type'は文字列で指定する。

function multiplyNumbers(a,b){
    if(typeof a === 'number' && typeof b === 'number'){
        return a*b;
    }else{
        return '引数が数値ではありません';
    }
}