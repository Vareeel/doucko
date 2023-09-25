const { response } = require("express");

const model = require('../../models/uzivatelmodel');


exports.prihlaseni = (req, res)=> { //stejny s roterem
    res.render('uzivatele/prihlaseni', {  //stejny s ejs souborem
        titulek: 'Index moment',
    });
}

exports.registrace = (req, res)=> { //stejny s roterem
    res.render('uzivatele/registrace', {  //stejny s ejs souborem
        titulek: 'Index moment',
    });

}



exports.registrovani = (req, res)=> {
    const email = req.body.email
    const heslo = req.body.heslo
    const heslo2 = req.body.heslo2
    const jmeno = req.body.jmeno


    if (heslo == heslo2) {
    model.pridatUzivatele(email, jmeno, heslo)
    return res.redirect("/uzivatele/prihlaseni")  //rediractování musí byt lomeno na zacatku, aleeeee v tom normalnim nahore neee!!!!!! picovina to jeee
    }


    return res.redirect("/uzivatele/registrace")

    
}

exports.prihlasit = (req, res)=> {
    const jmeno = req.body.jmeno
    const heslo = req.body.heslo

    if (model.existuje(jmeno) == true){
        if (model.spravneheslo(jmeno,heslo)) {
            req.session.u = jmeno

            return res.redirect("/web/index")
        }

    }

    return res.redirect("/uzivatele/prihlaseni")
}