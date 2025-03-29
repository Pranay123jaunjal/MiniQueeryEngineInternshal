const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database(":memory:");

const initDB = () => {
  db.serialize(() => {
    db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)");
    db.run("INSERT INTO users (name, age) VALUES ('Alice', 25), ('Bob', 30), ('Charlie', 22)");
  });
};
cd
module.exports = { db, initDB };
