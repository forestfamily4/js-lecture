//問題7

const a = filterItems(["nada", "hoge", "nada", "fuga"]);
console.log(a);

function filterItems(arr) {
  return arr.filter((item) => item.includes("nada"));
}

const b=[12,43,23,56]

const c=b.map(item=>item*5)
const d=b.map((item,index)=>item+index)
