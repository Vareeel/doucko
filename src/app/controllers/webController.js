
exports.index = (req, res)=> {
    res.render('web/index', {
        titulek: 'Index moment',
        jmeno: req.session.u || "",
    });
}

    
