const express =  require('express')
const route = express.Router();
const {getAll,addOne,deleteOne,getBySubMenu,listSearch} =  require('../../controllers/Products/ProductCateg')

route.get("/get-all-productcategory",getAll)
route.post('/add-one-productcategory',addOne)
route.delete('/remove-one-category/:id',deleteOne);
route.get('/get-productcategory-by-submenuid/:id',getBySubMenu)
route.get('/productsCategory/search', listSearch);


module.exports =  route;
