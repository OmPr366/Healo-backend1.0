const express =  require('express')
const route = express.Router();
const {getAll,addOne,removeOne,getByMenu} =  require('../../controllers/Products/ProductSubMenu')

route.get("/get-all-productsubmenu",getAll)
route.post('/add-one-productsubmenu',addOne)
route.put('/remove-one-productmenu/:id',removeOne);
route.get('get-submenu-by-menuid',)

module.exports =  route;
