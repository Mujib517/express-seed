const express= require('express');
const router= express.Router();
const homeCtrl=require('../controllers/home.ctrl');

router.get('/',homeCtrl.get);
router.get('/health',homeCtrl.health);

module.exports= router;