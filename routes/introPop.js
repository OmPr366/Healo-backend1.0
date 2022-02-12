const express = require  ('express')
const route = express.Router();
const {create,update,getData,updateState,getState} = require ('../controllers/introPop')


// route.post('/add-about',about)
// route.get('/get-about',getAbout)
route.put('/update-intropop',update)
route.get('/get-intropop',getData)
route.post('/update-intropop',create)
route.put('/update-popup-state',updateState)
route.get('/get-popup-state',getState)



module.exports = route;
