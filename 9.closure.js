//closure:A closure is created when an inner function remembers and accesses variables from its outer function even after the outer function has finished execution.

function outer() {
    let count = 0;

    return function inner() {
        count = count + 1;
        return count;
    }
}

const outerFunc = outer();
console.log(outerFunc()) //1
console.log(outerFunc()) //2
console.log(outerFunc()) //3
console.log(outerFunc()) //4