const express = require('express');
const {read,update} = require('../../controllers/Products/Popularproduct')

const router = express.Router();

router.put('/update-popularproduct',update);

router.get('/get-popularproduct', read);



//auth user blog crud

module.exports=router;