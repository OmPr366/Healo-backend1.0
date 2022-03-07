const express =  require('express')
const route = express.Router();
const {getAll,addOne,deleteOne,updateOne} =  require('../../controllers/Products/Coupons')

route.get("/get-all-coupon",getAll);
route.post('/add-one-coupon',addOne);
route.put('/update-coupon/:id',updateOne);
route.delete('/remove-one-coupon/:id',deleteOne) ;
// route.put('/update-single-product/:id',updateProduct);
// route.get('/get-product-by-category/:id',getByCategory)


module.exports =  route;
