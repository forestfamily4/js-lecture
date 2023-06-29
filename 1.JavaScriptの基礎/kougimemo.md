# memo

## 1 package.json
npm init

node i axios

```js
const axios=require("axios")

const data=(await axios.get("http://www.nada.ac.jp/i/index.html")).data

console.log(data)
```
objectを理解する
```js
const person={}
```
```js
const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function () {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
        console.log(`Hi! I'm ${this.name[0]}.`);
    },
}
```
```js
const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function () {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
        console.log(`Hi! I'm ${this.name[0]}.`);
    },
}

console.log(person.name)
console.log(person.bio)
console.log(person.bio())
console.log(person.introduceSelf())
console.log(person["bio"]())
```
オブジェクト型はがプリミティブ型だが、中身は更新できる。配列やmapも同様。
```js
const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function () {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
        console.log(`Hi! I'm ${this.name[0]}.`);
    },
}

person.age=23 //ok
console.log(person.age)
```
プロパティの追加
```js
const person = {
    name: ["Bob", "Smith"],
    age: 32,
    bio: function () {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
        console.log(`Hi! I'm ${this.name[0]}.`);
    },
}

person.farewell = function () {
  console.log("Bye everybody!");
};

console.log(person)
```
このままではオブジェクトを再利用、コピーすることができません。
関数では次のように表現できます。
```js
function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}

const John=createPerson("John")

console.log(John)
```


