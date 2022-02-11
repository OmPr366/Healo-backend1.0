const express = require  ('express')
const route = express.Router();
const {about,putAbout,getAbout} = require ('../controllers/aboutControl')


route.post('/add-about',about)
route.get('/get-about',getAbout)
route.put('/update-about',putAbout)



module.exports = route;
