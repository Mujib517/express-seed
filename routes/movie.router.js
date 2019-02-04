const express= require('express');
const router= express.Router();
const movieCtrl=require('../controllers/movie.ctrl');

router.get('/',movieCtrl.get);
router.post('/',movieCtrl.post);

module.exports= router;