const bcrypt = require('bcrypt');
// const { request } = require('express');
const jsondb = require('simple-json-db');
// const { use } = require('../routers/uzivatelRouter');
// const { uspesnost } = require('../controllers/hlaskyController');
const db = new jsondb('./data/uzivatele.json');

exports.pridatUzivatele = (email, jmeno, hashHeslo) => {
    db.set(jmeno, {
        email: email,
        heslo: hashHeslo
    })

    return true;
}

exports.existuje = (jmeno) => {
    if (db.has(jmeno) == true) {
        return true
    }

    return false;
}

exports.spravneheslo = (jmeno, heslo) => {
    const dbheslo = db.JSON()[jmeno].heslo

    if (heslo == dbheslo) {
        return true
    }

    return false

}