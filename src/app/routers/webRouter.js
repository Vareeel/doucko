const express = require('express');
const router = express.Router();

router.get('/index', require('../controllers/webController').index);           //modry stejny jako v controlleru

module.exports = router;

