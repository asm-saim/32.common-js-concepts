//Java script is dynamically typed programming language.
//data-type:
let data = 23;
data = 'Bay';
data = false;
data = undefined;
data = null;
data = { name: "rasel", age: 56 }
data = [45, 67, 44];
console.log(typeof data);

//Primitive data type:(immutable - can not bee changed)
const nam = "Faisal";
const num = 45;
const boolean = false;
let number;
const value = null;

//Non-primitive data type: (mutable- can be change)
const info = { name: 'Tom', age: 34 }
const names = ["Gilcrist", "Heiden", "Adam", "Lee"];

function name(value, callback) {
    console.log("My name is:", value);
    callback();
}
function getCall() {
    console.log("What's your?")
}
name("Sadiq", getCall);