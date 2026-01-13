// function counter(){
//     let count = 0;
//     return function(){
//         count ++
//         return count
//     }
// }

// let c = counter()
// console.log(c());
// console.log(c());

// let d = counter()
// console.log(d());

function greeting(name) {
    return function (message) {
        return `${message}, ${name}!`
    }
}

const greetJohn = greeting("John");
console.log(greetJohn("Hello")); 
console.log(greetJohn("Good morning")); 