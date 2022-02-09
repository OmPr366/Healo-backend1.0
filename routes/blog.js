const express = require('express');
const { create ,listAllBlogsCategories,list,photo,read,remove,update,listRelated,listSearch, listByUser} = require('../controllers/blog');
// const { requireSignIn, adminMiddleware ,authMiddleware,canUpdateDeleteBlog} = require('../controllers/auth');
// const { update } = require('lodash');
const router = express.Router();

router.post('/blog',create);
router.get('/blogs', list);
router.post('/blogs-categories', listAllBlogsCategories);
router.get('/blog/:slug', read);
router.delete('/blog/:slug',remove);
router.put('/blog/:slug',update);
router.get('/blog/photo/:slug', photo);
router.post('/blogs/related', listRelated);
router.get('/blogs/search', listSearch);


//auth user blog crud
router.post('/user/blog',create);
router.delete('/user/blog/:slug', remove);
 router.put('/user/blog/:slug', update);
router.get('/:username/blogs', listByUser);


module.exports=router;