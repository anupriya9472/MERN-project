const dotenv = require('dotenv');
const express = require('express');
const app = express();


dotenv.config({ path: './config.env' });

//db connection
require('./db/conn');

//const Uaer = require('./model/userSchema');

//specify data type which is json data
app.use(express.json());

//Linking router files 
app.use(require('./router/auth'));

const port = process.env.PORT;

//Middleware
/* const middleware = (req, res, next) => {
    console.log("Hello Middleware");
    next();
}; */


/* app.get('/', (req, res) => {
    res.send("Home Page");
});
 */
/* app.get('/about', middleware, (req, res) => {
    res.send("About Page");
}); */

/* app.get('/contact', (req, res) => {
    res.cookie('test','anu');
    res.send("contact Page");
}); */

/* app.get('/signin', (req, res) => {
    res.send("signin Page");
});

app.get('/signup', (req, res) => {
    res.send("signup Page");
}); */

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})