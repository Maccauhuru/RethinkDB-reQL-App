const r = require('rethinkdb');
r.connect({
    host: 'localhost',
    port: 28015,
    db: 'books_db'
}, (err, conn) => {
    if (err) throw err;
    //createTable(conn, 'publishers')
    //addPublishers(conn);
    getBooks(conn);
});

function createTable(conn, tableName) {
    r.tableCreate(tableName).run(conn, (err, result) => {
        if (err) throw err;
        console.log(JSON.stringify(result));
    });
}

function addPublishers(conn) {
    const publishers = [
        { name: 'John Doe', city: 'Miami', age: 34 },
        { name: 'Sara Wilson', city: 'Boston', age: 28 },
        { name: 'Steve Smith', city: 'Detroit', age: 49 },
        { name: 'Jen Williams', city: 'Miami', age: 35 }
    ]
    r.table('publishers')
        .insert(publishers)
        .run(conn, (err, result) => console.log(JSON.stringify(result)));
}


function getBooks(conn) {
    r.table('Hardy_Boys').run(conn, (err, cursor) => {
        cursor.toArray((err, result) => console.log(JSON.stringify(result)));
    });
}