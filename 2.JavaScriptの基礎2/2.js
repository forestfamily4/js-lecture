//問題2

function getRandom(start,end){
    const random=Math.random() //0以上1未満の乱数を生成
   return (end-start)*random+start  
}

const a= getRandom(1,6)
console.log(a)