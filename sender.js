var math = 12 - 5;

console.log(math);


module.exports = {
    name: 'Wade',
    age: 22,
    greet: function () {
        console.log(`Hi!  My name is ${this.name} and I'm ${this.age}`)
    }

}
