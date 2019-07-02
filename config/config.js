const r = require('rethinkdb');
r.connect({
    host: 'localhost',
    port: 28015,
    db: 'books_db'
}, (err, conn) => {
    if (err) throw err;
    createTable(conn, 'publishers')
});

function createTable(conn, tableName) {
    r.tableCreate(tableName).run(conn, (err, result) => {
        if (err) throw err;
        console.log(JSON.stringify(result));
    });
}