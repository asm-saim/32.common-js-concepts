//arguments: arguments are the actual values we pass, into a function when we call it.

function numbers(a, b) {
    console.log(arguments);
    const params = [...arguments]
    console.log(params)
}
numbers(33, 5, 7, 8, 9, 5, 89);