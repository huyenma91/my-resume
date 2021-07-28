const path = require('path');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const { config } = require('process');
const app = express();

app.use(cors());

app.use(express.json());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'build')));

const db = mysql.createConnection({
    host: 'us-cdbr-east-04.cleardb.com',
    user: 'b8ed52af29ac20',
    password: '432d8606',
    database: 'heroku_537477bd9f98412',
})

// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'matkhaulagi',
//     database: 'loginsystem',
// })

// app.get("/",(req,res)=>{
//     const sqlInsert = "INSERT INTO user (username, password) VALUES ('phuong','123');"
//     db.query(sqlInsert,(err,result)=>{
//         res.send('hello Phuong123')
//     })
// });
// app.use(bodyParser.json());
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.post('/api/register', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // const { username, password } = req.body
    const checkUser = await db.query('SELECT username FROM user WHERE username = ?;', [username], async (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            console.log('User: ' + result[0].username + ' hết')
            if (checkUser) {
                // res.sendStatus(409);
                res.send({ message: "User existed" })
            }
            // else{
            //     console.log('User is not created')
            // }
        }
        else {
            const passwordHash = await bcrypt.hash(password, 10);
            // console.log('this is hash :' + passwordHash + ' end')

            const resultQuery = await db.query("INSERT INTO user (username, password) VALUES (?,?);", [username, passwordHash], (err, result) => {
                if (err) throw err;
            })

            jwt.sign({}, process.env.JWT_SECRET,
                { expiresIn: '2d', }, (err, token) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.status(200).json({ token });
                }
            )
        }
    })
})

app.post('/api/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const passwordHash = await db.query("SELECT * FROM user WHERE username = ?", [username], async (err, result, fields) => {
        if (err) {
            res.send(err);
            console.log("AA");
        }
        if (result.length > 0) {
            const isCorrect = await bcrypt.compare(password, result[0].password)
            // console.log('day la result :' + result[0].password + ' hết')
            if (isCorrect) {
                jwt.sign({}, process.env.JWT_SECRET,
                    { expiresIn: '2d', }, (err, token) => {
                        if (err) {
                            return res.status(500).send(err);
                        }
                        res.status(200).json({ token });
                    }
                )
                console.log("BB")
                // res.send(result)
            } else {
                // res.sendStatus(401);
                res.send({ message: "Wrong username/password" })
                console.log("CC")
            }
        } 
        else {
            res.send({ message: "Wrong username/password" })
            console.log("DD")
        }
    });

    // db.query("SELECT * FROM user WHERE username = ? AND password = ?", [username, password], (err, result) => {
    //     if (err) {
    //         res.send(err);
    //     }
    //     if (result.length > 0) {
    //         res.send(result)
    //     }
    //     else {
    //         res.send({ message: "Wrong username/password" })
    //     }
    // })
})

// const isCorrect = await bcrypt.compare(password, passwordHash)
//     // .then((result) => {
//     //     if (result) {
//     //         console.log("authentication successful")
//     //         // do stuff
//     //     } else {
//     //         console.log("authentication failed. Password doesn't match")
//     //         // do other stuff
//     //     }
//     // })
//     .catch((err) => console.error(err))


// if (isCorrect) {
//     jwt.sign({}, process.env.JWT_SECRET, { expiresIn: '2d', }, (err, token) => {
//         if (err) {
//             res.send(err);
//         }
//         if (result.length > 0) {
//             res.send(result)
//         }
//         else {
//             res.send({ message: "Wrong username/password" })
//         }
//     })
// }

// app.get('/*',(req,res)=>{
//     res.sendFile(path.join(__dirname, 'build/index.html'));
//     console.log('______')
//     console.log('Path : ',path.join(__dirname, 'build/index.html'))
// })

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
app.listen(process.env.PORT || 3001, () => {
    console.log('run on port 3001')
});

