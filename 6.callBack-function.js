// sayHi() 👉 “Do it now!”
// sayHi 👉 “Here is the instruction, do it later”

//call Back function:
setTimeout(function () {
    console.log("Hi, runs after 2 seconds.")
}, 2000)
//here, arguments it self is a function.

//Ex:2
function name(name, callback) {
    console.log("Hi", name)
    callback();
}
function bye() {
    console.log("Bye, Bye.")
}

name("Saber", bye);

//Ex:3
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Bye!");
}

greet("Saim", sayBye);

// sayBye() -> “Do it now!”
// sayBye -> “Here is the instruction, do it later”



//after an event: This function runs only when click happens.
// button.addEventListener("click", function () {
//     console.log("Button clicked");
// });