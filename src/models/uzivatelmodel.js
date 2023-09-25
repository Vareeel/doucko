const bcrypt = require('bcrypt');
// const { request } = require('express');
const jsondb = require('simple-json-db');
// const { use } = require('../routers/uzivatelRouter');
// const { uspesnost } = require('../controllers/hlaskyController');
const db = new jsondb('./data/uzivatele.json');

exports.pridatUzivatele = (email, jmeno, hashHeslo) => {

    if (db.has(jmeno) == false) {

        db.set(jmeno, {
            email: email,
            heslo: hashHeslo
        })

        return "Uživatel byl vytvořen.";

    }


    return "Jeméno již existuje.";
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


