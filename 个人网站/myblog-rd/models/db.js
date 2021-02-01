var mysql = require('mysql');
const {HOST,USER,PASSWORD,DATABASE} = require('../config/db.config');
//连接池
var pool = mysql.createPool({
  connectionLimit: 10,
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
});

module.exports = {
  query(sql,values,) {
    return new Promise((resolve,reject) => {
        pool.getConnection(function(err, connection) {
            if (err) throw err; // not connected!
           
            // Use the connection
            connection.query(sql, values,function (error, results) {
              // When done with the connection, release it.
              connection.release();
              // Handle error after the release.
              if (error) {
                reject(error)
              } else{
                resolve(results);
              }
              // Don't use the connection here, it has been returned to the pool.
            });
          });
    })
}
}
