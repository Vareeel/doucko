const bcrypt = require('bcryptjs');
// const { request } = require('express');
const jsondb = require('simple-json-db');
// const { use } = require('../routers/uzivatelRouter');
// const { uspesnost } = require('../controllers/hlaskyController');
const db = new jsondb('./data/uzivatele.json');

exports.pridatUzivatele = (email, hashHeslo) => {
    db.set(jmeno, {
        email: email,
        heslo: hashHeslo
    })

    return true;
}