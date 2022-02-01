/* We can classify generics as if we want to use type checking and make it possible to function to
receive and handle multiple or specific type of arguments types */

function sendCombinedArray<A, B>(a: A, b: B): [A, B] {
    return [a, b];
}

sendCombinedArray<number, string>(5, 'database');

/* Set Default Type In Generic */ 

function sendCombinedArray<A = string, B = number>(a: A, b: B): [A, B] {
    return [a, b];
}
