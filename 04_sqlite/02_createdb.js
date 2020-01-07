var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database("../../sqlite/test.db");

sql = `CREATE TABLE IF NOT EXISTS bbs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    writer TEXT NOT NULL,
    timestamp datetime DEFAULT CURRENT_TIMESTAMP,
    content TEXT)`;
db.run(sql);

db.close();
