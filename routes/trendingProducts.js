const express = require('express');
const {read,update} = require('../controllers/trendingProducts');

const router = express.Router();

router.put('/update-trendingProducts',update);

router.get('/get-trendingProducts', read);



//auth user blog crud

module.exports=router;