const express =  require('express')
const route = express.Router();
const {getAll,addOne,deleteOne} =  require('../../controllers/Products/ProductMenu')

route.get("/get-all-productmenu",getAll);
route.post('/add-one-productmenu',addOne);
route.delete('/remove-one-productmenu/:id',deleteOne);

module.exports =  route;
