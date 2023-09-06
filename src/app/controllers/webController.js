
exports.index = (req, res)=> {
    res.render('web/index', {
        titulek: 'Index moment',
    });
}

exports.prihlaseni = (req, res)=> { //stejny s roterem
    res.render('web/prihlaseni', {  //stejny s ejs souborem
        titulek: 'Index moment',
    });
}
