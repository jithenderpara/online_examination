var bodyParser = require('body-parser');
var express = require('express');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
var session = require('client-sessions');
var path = require('path');
var app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const { handle_database, handle_login, handle_register, handle_getResults, handle_setResults } = require("./dataConnection")
const { get_questions } = require("./questions")
const cors = require('cors'); // Import the cors package
// Define the CORS options
const corsOptions = {
  credentials: true,
  origin: ['http://localhost:3001', 'http://localhost:80'] // Whitelist the domains you want to allow
};
app.use(cors(corsOptions)); // Use the cors middleware with your options
// Set up Global configuration access
dotenv.config();
app.use(express.json())
let PORT = process.env.PORT || 3000;
// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  cookieName: 'session',
  secret: 'keyboard cat',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));
app.use(express.static(path.join(__dirname, 'build')));
app.get("/", function (req, res) {
  const {user}= req.session
  console.log(user, '------------------------user')
  if (user){
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  }else{
    res.redirect('/login');
  }  
})
app.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
app.get("/results", function (req, res) {
  console.log(req.session, '-----------------------------------------session' )
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

app.get("/logout", function (req, res) {
  req.session.destroy();
  req.session.user = null
  res.redirect('/login');
})
app.get("/db", function (req, res) {
  handle_database(req, res);
});
app.get("/api/questions", (req, res) => {
  questions = get_questions()
  res.status(200).send(questions);
})
app.get("/api/getResults", (req, res) => {
  handle_getResults(req, res);
})
app.get("/api/getUserInfo", (req, res) => {
  const {
    id: id,
    email: email,
    name: name,
    group } = req.session.user;
  res.status(200).send({ id, email, name, group });
})
/*****
 * 
 * 
 * all post Methods
 */
app.post("/api/login", function (req, res) {
  handle_login(req, res);
});
app.post("/api/register", function (req, res) {
  handle_register(req, res);
});
app.post("/api/setResults", (req, res) => {
  handle_setResults(req, res);
})
app.post("/api/getResults", (req, res) => {
  handle_getResults(req, res);
})

/*****
 * 
 * 
 * end all post Methods
 */
server.listen(PORT, () => {
  console.log(`application is running on http://localhost:3000/`)
})