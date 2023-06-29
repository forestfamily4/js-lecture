const temperature= 100;

if (temperature < 0&& temperature>273) {
    console.log("寒い");
}
else if(temperature===0){ //===にする癖を
    console.log("零度");
}
else if(temperature>0 && temperature<=100){
    console.log("0度以上100度未満");
}
else{
    console.log("???");
}

//関数で複雑なif文処理があるときは初めのほうにreturnしておく。
//関数の中でreturnがあると、それ以降の処理は実行されない。
//関数の中でreturnがないときは、undefinedが返される。