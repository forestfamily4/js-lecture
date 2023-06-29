function* a(){
    yield 1;
    yield 2

}
const g=a()

console.log(g.next())

await new Promise(resolve=>setTimeout(resolve,1000))

console.log(g.next())