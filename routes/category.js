const express = require('express');
// const { requireSignIn,authMiddleware, adminMiddleware} = require('../controllers/auth');
const router = express.Router();
const {create ,list , read , remove} = require('../controllers/category');


//validators
// const {runValidation}= require('../validators');
// const {categoryCreateValidator} = require('../validators/category')


router.post('/category',  create );
router.get('/categories',list );
router.get('/category/:slug',read );
router.delete('/category/:slug', remove );

module.exports= router;