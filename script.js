// input = '' output : reverse the string
//var sender = require('./sender');


//console.log(sender.greet());


//console.log(process.argv);
//console.log(process.argv[2])
//
//console.log(process.argv[2].split('').reverse().join(''));



console.log('Hello There!')

var tempArr = process.argv.slice(2)
//console.log(tempArr);

console.log(tempArr.reduce(function (sum, val) {
    return (sum += parseInt(val));
}, 0));


