const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: `${process.env.DB_HOST}` ??'localhost',
  user: process.env.DB_USER ?? 'root',
  password: process.env.DB_PASSWORD ?? '',
  database: process.env.DATABASE ?? 'movies_db',
  multipleStatements: true
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('db is connected');
  }
});

/* module.exports = mysqlConnection; */
/* export default mysqlConnection; */