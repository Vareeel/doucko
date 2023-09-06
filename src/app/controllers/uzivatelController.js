
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


