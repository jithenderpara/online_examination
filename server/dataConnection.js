var mysql = require('mysql2');
var pool = mysql.createPool({
    connectionLimit: 100, //important
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'online examination system',
    debug: false
});
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
        console.log(req.body)
        const {user_email, user_password}= req.body
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
function handle_register(req, res) {
    pool.getConnection(function (err, connection) {
        console.log(err)
        if (err) {
            connection.release();
            res.json({ "code": 100, "status": "Error in connection database" });
            return;
        }
        console.log(req.body)
        const {email, name, password, group}= req.body
        console.log('connected as id ' + connection.threadId);
        const sql_query = `INSERT INTO students (email, name, password, group) VALUES ('${email}', '${name}', '${password}', '${group}')`;
        console.log(sql_query)
        connection.query(sql_query, function (err, rows) {
            connection.release();
            if (!err) {
                try {
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
function handle_setResults(req, res) {
    pool.getConnection(function (err, connection) {
        console.log(err)
        if (err) {
            connection.release();
            res.json({ "code": 100, "status": "Error in connection database" });
            return;
        }
        const {results}= req.body
        // const {email, id} = req.session.user
        const {email, id} = req.body
        console.log('connected as id ' + connection.threadId);
        let status= "Fail"
        let results_data= results.map((result)=>({"id":result.id, "value":result.value, "ans":result.ans}))
        let score = results_data.filter((obj)=>obj.value == obj.ans);
        score = score.length
        results_data = JSON.stringify(results_data)
        let perc = ((score/100) * 100).toFixed(3);
        if (perc >=35){
            status= "Pass"
        }
        const sql_query= `UPDATE students SET result = '${(results_data)}', finalStatus = '${status}', marks='${score}' WHERE email = '${email}';`
        console.log(sql_query)
        connection.query(sql_query, function (err, rows) {
            connection.release();
            if (!err) {
                try {
                    console.log(rows)
                    res.json(rows);
                } catch (error) {
                    console.log(error)
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
function handle_getResults(req, res) {
    pool.getConnection(function (err, connection) {
        console.log(err)
        if (err) {
            connection.release();
            res.json({ "code": 100, "status": "Error in connection database" });
            return;
        }
        const {email, id, results}= req.body
        console.log('connected as id ' + connection.threadId);
        sql_query= "SELECT `name`, `group`, `finalStatus`, `marks` from students where email="+ `"${email}"`
        console.log(sql_query)
        connection.query(sql_query, function (err, rows) {
            connection.release();
            if (!err) {
                try {
                    console.log(rows)
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
module.exports = {
    handle_login: handle_login,
    handle_database: handle_database,
    handle_register: handle_register,
    handle_setResults:handle_setResults,
    handle_getResults:handle_getResults,
};