const express = require('express');
const {read,update} = require('../controllers/topSelling');

const router = express.Router();

router.put('/update-topSelling',update);

router.get('/get-topSelling', read);



//auth user blog crud

module.exports=router;