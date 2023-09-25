const express = require('express');
const session = require('express-session');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');


// middle-ware pro praic se session
app.use(session({
    secret: "lol",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
}));

app.use(express.urlencoded({ extended: false }));

app.use(express.static('./www'));

app.use('/web', require('./routers/webRouter'));
app.use('/uzivatele', require('./routers/uzivateleRouter'));

app.get('/', (req, res) => res.redirect('/web/index'));

//Neexistuje 😭
app.get('*', (req, res) => res.redirect('/web/error'));

module.exports = app;
