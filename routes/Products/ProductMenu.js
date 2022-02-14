const express =  require('express')
const route = express.Router();
const {getAll,addOne,deleteOne} =  require('../../controllers/Products/ProductMenu')

route.get("/get-all-product-menu",getAll)
route.get('/add-one-productmenu',addOne)
route.get('/remove-one-productmenu/:id',deleteOne);

module.exports =  route;
