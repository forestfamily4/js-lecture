const person={
    name:"John",
    age:20,
    hobbies:["reading","coding","gaming"],
    intoroduceYourSelf:function(){
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`)
        console.log(`My hobbies are ${this.hobbies.join(",")}`)
        console.log(`My hobbies are ${this.hobbies[0]},${this.hobbies[1]},${this.hobbies[2]}`)
        console.log(`My hobbies are ${this.hobbies}`)
    },
    intoroduceYourSelf2:()=>{
        console.log(this)
        console.log(global)
        //ここのthisはglobal(window)オブジェクトを指す。
    }
}

person.intoroduceYourSelf2()

