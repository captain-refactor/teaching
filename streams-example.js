const {Readable, Transform, Writable, pipeline} = require('stream');

let readable = new Readable({
    objectMode: true,
    read() {
        this.push({
            a: 'a',
            b: 'b',
        });
        this.push({
            a: 'a',
            c: 'c',
        });
        this.push(null);
    }
});

let transform = new Transform({
    objectMode: true,
    transform(object, encoding, cb) {
        let json = JSON.stringify(object);
        this.push(json);
        cb();
    }
});

let writable = new Writable({
    objectMode: true,
    write(json, encoding, cb) {
        console.log(json);
        cb();
    }
});


pipeline(readable, transform, writable, (...args) => {
    console.log(args);
});