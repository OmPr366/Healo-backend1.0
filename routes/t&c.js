const express = require('express');
const { create ,read,update,updateprivatepolicy,readprivatepolicies} = require('../controllers/t&c');
// const { update } = require('lodash');
const router = express.Router();

router.put('/update-tandc',update);
router.put('/update-privatepolicy',updateprivatepolicy);
router.get('/get-tandc', read);
router.get('/get-privatepolicy', readprivatepolicies);


//auth user blog crud

module.exports=router;