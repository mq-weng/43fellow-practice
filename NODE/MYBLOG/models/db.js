var mysql = require('mysql');
const { param } = require('../routes');
//连接池
var pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'myblog',
});

function query(params) {
    return new Promise((resolve,reject) => {
        pool.getConnection(function(err, connection) {
            if (err) throw err; // not connected!
           
            // Use the connection
            connection.query(params.sql, params.values,function (error, results, fields) {
              // When done with the connection, release it.
              connection.release();
           
              // Handle error after the release.
              if (error) throw error;
           
              // Don't use the connection here, it has been returned to the pool.
            });
          });
    })
}

module.exports = query;