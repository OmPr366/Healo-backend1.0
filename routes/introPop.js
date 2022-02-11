const express = require  ('express')
const route = express.Router();
const {create,update,getData} = require ('../controllers/introPop')


// route.post('/add-about',about)
// route.get('/get-about',getAbout)
route.put('/update-intropop',update)
route.get('/get-intropop',getData)
route.post('/update-intropop',create)




module.exports = route;
