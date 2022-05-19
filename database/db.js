import mysql from 'mysql2'

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'petcare',
  port: 3306,
  password: ''
});

export default db;
