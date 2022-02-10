const express = require('express');
const { create ,read,update,updateprivatepolicy,readprivatepolicies} = require('../controllers/t&c');
// const { update } = require('lodash');
const router = express.Router();

router.post('/update-tandc',update);
router.post('/update-privatepolicy',updateprivatepolicy);
router.get('/t&c', read);
router.get('/get-privatepolicy', readprivatepolicies);


//auth user blog crud

module.exports=router;