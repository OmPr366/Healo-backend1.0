const express =  require('express')
const route = express.Router();
const {getAll,addOne,deleteOne,getByCategory,updateProduct,listSearch,singleProduct} =  require('../../controllers/Products/Product')

route.get("/get-all-product",getAll)
route.get("/get-single-product/:id",singleProduct);
route.post('/add-one-product',addOne)
route.delete('/remove-one-product/:id',deleteOne); 
route.put('/update-single-product/:id',updateProduct);
route.get('/get-product-by-category/:id',getByCategory)
route.get('/products/search', listSearch);

module.exports =  route;
