const db = require('./db');
module.exports = {
    getUserData(username,password){
        return db.query(
            'select * from t_user where username=? and password=?',
            [username,password]
           );
    },
    saveUserData(user){
        return db.query(
            'INSERT INTO t_user SET ?',user
        )
    },
    getUserName(username){
        return db.query(
            'select * from t_user where username=? ',
            [username]
           );
    }
}