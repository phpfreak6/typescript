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

/* OR condition in generic types  */ 

sendCombinedArray<number|null|string, string>(5, 'database');

/* Extend Generics and make properties optional */

function makeFullName<T extends { firstName: string, lastName: string }>(obj: T) {
    return {
        ...obj,
        fullName: obj.firstName + ' ' + obj.lastName
    };
}
const result = makeFullName({ firstName: 'Abhishek', lastName: 'Tyagi', age: 15 });
console.log(result);

/* Generics with interfaces */

interface Tab<T>{
    id:number,
    position:string,
    data:T
}

type NumberTab = Tab<number>;
type StringTab = Tab<string>;
