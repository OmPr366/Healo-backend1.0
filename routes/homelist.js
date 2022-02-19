const express = require ('express')
const {addOne,editSingle,getAll,removeOne,removefromlist,read,update} = require('../controllers/HomePage/homeLists')

const route =  express.Router();

route.get('/getHomeList',getAll);
route.post('/addHomeList',addOne);
route.put('/editHomeList/:id',editSingle);
route.put('/updateHomeList/:id',update);
 route.delete('/removeHomeList/:id',removeOne);
 route.put('/delete-the-product/:id',removefromlist);
route.get('/read-offer/:id',read)

module.exports = route;


