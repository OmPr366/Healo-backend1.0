const express = require('express');
const { requireSignIn, authMiddleware} = require('../controllers/auth');
const router = express.Router();
const {read , publicProfile , update,photo, getAllUsers,getAllGoogleUsers,updateRoleStaff,getAllStaff, removeRoleStaff, updateprofile  } = require('../controllers/user');//, addCourse , coursesList
const {addGoogleUser} =  require('../controllers/google')

router.get('/allusers',getAllUsers);
router.get('/all-staff',getAllStaff);
router.get('/allgoogleusers',getAllGoogleUsers);
router.put('/update-role',updateRoleStaff);
router.put('/remove-updated-role',removeRoleStaff);
router.get('/user/profile', requireSignIn,authMiddleware ,read);
router.get('/user/:username', publicProfile);
router.put('/user/update', requireSignIn,authMiddleware ,update)
router.put('/user/updateprofile', requireSignIn,authMiddleware ,updateprofile)
router.put('/addgoogleuser', addGoogleUser)


// router.post('/user/addCourse',requireSignIn,addCourse)
// router.get('/user/courses',requireSignIn , coursesList )


module.exports= router;