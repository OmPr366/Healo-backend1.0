const express =  require('express')
const route = express.Router();
const {getAll,addOne,deleteOne} =  require('../../controllers/Products/ProductCateg')

route.get("/get-all-product-category",getAll)
route.get('/add-one-category',addOne)
route.get('/remove-one-category/:id',deleteOne);

module.exports =  route;
