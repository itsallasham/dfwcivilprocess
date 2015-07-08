var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/mainCtrl');

/* GET home page. */
router.get('/', ctrlMain.landing);
router.get('/home', ctrlMain.home);

module.exports = router;
