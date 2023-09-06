const express = require('express');
const router = express.Router();

router.get('/prihlaseni', require('../controllers/uzivatelController').prihlaseni); //modry stejny jako v controlleru
router.get('/registrace', require('../controllers/uzivatelController').registrace); //modry stejny jako v controlleru

module.exports = router;