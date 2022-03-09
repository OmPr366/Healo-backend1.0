const express = require('express');
const {read,getOrdersByUsers,add} = require('../controllers/allOrders');

const router = express.Router();

// router.put('/get-allorders',update);
router.post('/add-one-order',add)
router.get('/get-orders-by-user/:id',getOrdersByUsers);
router.get('/get-all-orders', read);



//auth user blog crud

module.exports=router;