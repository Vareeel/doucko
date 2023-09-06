const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.urlencoded({ extended: false }));

app.use(express.static('./www'));

app.use('/web', require('./routers/webRouter'));
app.use('/uzivatele', require('./routers/uzivateleRouter'));

app.get('/', (req, res) => res.redirect('/web/index'));

//Neexistuje 😭
app.get('*', (req, res) => res.redirect('/web/error'));

module.exports = app;
