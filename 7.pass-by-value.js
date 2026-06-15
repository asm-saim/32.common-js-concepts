// Rule of thumb: primitives copy the value, objects copy the reference (the "address"), not the data itself.
//Pass by value:

let a = 10;
let b = a;
b = 20;
console.log("a=", a);
console.log("b=", b);

//Pass by reference:
let person1 = { name: "Alice" };
let person2 = person1; // obj2 points to the same object
person2.name = "Bob";
console.log(person1);

// A simple way to remember it: think of a primitive as writing a number on a sticky note — copying the note gives you a separate number. An object is like a house — the variable is just an address. If you give someone the address and they repaint the house, it's the same house for everyone who has that address.

// One tricky bit: if you reassign the variable itself (not modify its contents), it doesn't affect the other variable:
let info1 = { location: "Uttora" };
let info2 = info1;
info2 = { location: "Eskaton" };
console.log(info1);