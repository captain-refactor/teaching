function template(strings, ...interpolations) {
    let result = [];
    interpolations = interpolations.map(item => {
        if (typeof item === 'string') item = item.replace(/'/g, "''")
        return item;
    });
    for (let i = 0; i < strings.length; i++) {
        result.push(strings[i]);
        if (interpolations[i])
            if (typeof interpolations[i] === 'string') {
                result.push("'" + interpolations[i] + "'");
            } else {
                result.push(interpolations[i]);
            }
    }
    return result.join('');
}

let message = "I won't do it";


let result = template`insert into table (message) values (${message})`;
let result2 = template(['insert into table (message) values (', ')'], message);


console.log(result === result2);
