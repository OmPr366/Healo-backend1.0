const express = require('express');
const {read,update} = require('../controllers/topRated');

const router = express.Router();

router.put('/update-topated',update);

router.get('/get-toprated', read);



//auth user blog crud

module.exports=router;