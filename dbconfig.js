// dbConfig.js
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',        // Replace with your MySQL host
  user: 'root',     // Replace with your MySQL username
  password: 'naresh123', // Replace with your MySQL password
  database: 'login'         // Replace with your MySQL database name
});

connection.connect((error) => {
  if (error) {
    console.error('Database connection failed:', error.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = connection;
