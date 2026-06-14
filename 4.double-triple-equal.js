// This is one of the most important JavaScript interview topics.

// == (Loose Equality)
// == compares two values after automatic type conversion (type coercion).

console.log(5 == "5");      // true
console.log(true == 1);     // true
console.log(false == 0);    // true
console.log(null == undefined); // true

//tricky Example:
console.log("" == 0);
console.log([] == false);
console.log('array equal',[]==[]); //cause, they are non-primitive, and diff reference.
//In loose equality:
// Primitive values: Compare VALUE
// Non-primitive values (Object, Array, Function): Compare REFERENCE


// === (Strict Equality)

// === compares both value and data type.
// No automatic type conversion happens.

console.log(5 === "5");      // false
console.log(true === 1);     // false
console.log(false === 0);    // false
console.log(5 === 5);        // true

//tricky Example:
console.log("" === 0);
console.log([] === false);
