const express = require('express');
const router = express.Router();

router.get('/prihlaseni', require('../controllers/uzivatelController').prihlaseni); //modry stejny jako v controlleru
router.get('/registrace', require('../controllers/uzivatelController').registrace); //modry stejny jako v controlleru


router.post('/registrace', require('../controllers/uzivatelController').registrovani); //musí být jiné než getovací   //modrý musí být vždy jiný//
router.post('/prihlaseni', require('../controllers/uzivatelController').prihlasit); //musí být jiné než getovací   //modrý musí být vždy jiný//




module.exports = router;