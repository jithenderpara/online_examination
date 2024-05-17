var mysql = require('mysql2');
var pool = mysql.createPool({
    connectionLimit: 100, //important
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'online examination system',
    debug: false
});
// var con = mysql.createConnection({
//     host: "localhost",
//     user: "jithu",
//     password: "jithu"
//   });

//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });
// 'root@localhost'

// PORT= 3306
// [{"Name":"Howard Orn","Credit_Card_Number":"5273471157342926","Issuer":"mastercard","Expiry_Date":"01/29","cvv":"757"},{"Name":"Cindy Nienow","Credit_Card_Number":"5542450319921228","Issuer":"mastercard","Expiry_Date":"05/27","cvv":"959"},{"Name":"Ralph Barrows Jr.","Credit_Card_Number":"5112165246887587","Issuer":"mastercard","Expiry_Date":"04/25","cvv":"374"},{"Name":"Whitney Brakus","Credit_Card_Number":"5274325090348755","Issuer":"mastercard","Expiry_Date":"10/26","cvv":"412"},
// {"Name":"Sheryl Parisian PhD","Credit_Card_Number":"5444595154180725","Issuer":"mastercard","Expiry_Date":"02/26","cvv":"028"}]
function handle_database(req, res) {

    pool.getConnection(function (err, connection) {
        console.log(err)
        if (err) {
            connection.release();
            res.json({ "code": 100, "status": "Error in connection database" });
            return;
        }

        console.log('connected as id ' + connection.threadId);
        // CREATE SCHEMA IF NOT EXISTS `Online Examination System` DEFAULT CHARACTER SET utf8 

        connection.query("select * from students", function (err, rows) {
            connection.release();
            if (!err) {
                res.json(rows);
            }
        });

        connection.on('error', function (err) {
            res.json({ "code": 100, "status": "Error in connection database" });
            return;
        });
    });
}
function handle_login(req, res) {
    pool.getConnection(function (err, connection) {
        console.log(err)
        if (err) {
            connection.release();
            res.json({ "code": 100, "status": "Error in connection database" });
            return;
        }
        user_email = "jithu@gmail.com"
        user_password = "1234"
        console.log('connected as id ' + connection.threadId);
        sql_query= `select * from students where email='${user_email}' AND password='${user_password}'`
        console.log(sql_query)
        connection.query(sql_query, function (err, rows) {
            connection.release();
            if (!err) {
                try {
                    const { id, email, name, group } = rows;
                    var cleanUser = {
                        id: id,
                        email: email,
                        name: name,
                        group
                    };
                    req.session.user = cleanUser;
                    res.json(rows);
                } catch (error) {
                    res.json({ "code": 100, "status": "Error in "+ error });
                }

            }
        });

        connection.on('error', function (err) {
            res.json({ "code": 100, "status": "Error in connection database" });
            return;
        });
    });
}

// module.exports.handle_login = handle_login
// module.exports.handle_database = handle_database

module.exports = {
    handle_login: handle_login,
    handle_database: handle_database,
};