const person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.firstName); // "John"と表示される
console.log(person.fullName()); // "John Doe"と表示される