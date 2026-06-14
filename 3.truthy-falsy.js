//shortcut : there are few types of falsy value, everything else is truthy:
//falsy values:
// false
// 0
// -0
// 0n      // BigInt zero
// ""      // Empty string
// null
// undefined
// NaN

let data;
data = 0;
data = "";
data = " ";
data = {};
data = null;
data = true;
data = false;
if (data) {
    console.log(data, "is truthy")
}
else {
    console.log(data, "is falsy")
}

//if I need to check only the falsy value use logical not:
if (!data) {
    console.log("The value is falsy");
}

//if I need to check all truthy value use double not(!!)
if (!!data === true) {
    console.log("Value is truthy");
}

//!value -> gives the opposite boolean
//!!value -> gives the actual boolean 