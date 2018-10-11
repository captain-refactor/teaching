function add(a, b) {
    return a + b;
}

let args = [5, 10];
console.log(add(...args) === add(args[0], args[1]));

function sum(...items) {
    let result = 0;
    for (let item of items) {
        result += item;
    }
    return result;
}

let obj = {
    a: 1,
    b: 2,
    c: 3
};
let merged = {
    d: 4,
    ...obj
};
console.log('merged: ', JSON.stringify(merged));

let {a, b, ...rest} = merged;
console.log('rest: ', rest);