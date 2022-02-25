const express = require('express');
const {read,update} = require('../controllers/recentlyadded');

const router = express.Router();

router.put('/update-recentlyadded',update);

router.get('/get-recentlyadded', read);



//auth user blog crud

module.exports=router;