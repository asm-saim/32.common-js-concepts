//scope:
//1. block scope
//2. function scope
//3. global scope
//4. lexical scope

const number = 100; //global scope

//block Scope: {}-only accessible in third bracket. 
if (true) {
    const data = 100;
    console.log(data);
    names("Tom", " Hanks"); //hoisting
}
// console.log(data);

for (let num of [3, 56, 8, 9, 4]) {
    console.log(num);

}
// console.log(num);

//Function Scope:Variables declared with var inside a function are only accessible within that function.
function test() {
    var age = 15;
    console.log(age);
}

test();
// console.log(age); - error


//Ex:2
function names(a, b) {
    let fullName = a + b;
    console.log(values(100, 100)); //hoisting
    console.log(fullName);

    function values(x, y) {
        sum = x + y;
        return sum;
    }
}
// console.log(a, b);
//console.log(values(100, 100)); will give error, cause we can not access a function in function form outside.

//Ex: here we will understand, how var ignores block scope.
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}

//Lexical Scope: A function can access variables from its own scope and its outer (parent) scope.
let message = "Hello"

function outer() {
    console.log(message);

    function inner() {
        console.log("Greetings!")
    }
    inner()
}
outer()