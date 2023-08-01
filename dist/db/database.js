"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Setup the database and create table.
*/
const sqlite3 = require('sqlite3').verbose(); // import the sqlite package
let db = new sqlite3.Database('./db/todo-list.db', (err) => {
    if (err) {
        return console.log(err.message);
    }
    console.log('Connected to the in-memory Sqlite Database.');
});
db.run(` 
CREATE TABLE IF NOT EXISTS newtodo ( 
    id STRING,
    task TEXT NOT NULL,
    desc TEXT,
    completed BOOLEAN NOT NULL CHECK (completed IN (0, 1))
)  
`); // new table called newtodo is created.
exports.default = db;