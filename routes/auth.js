const express = require('express');
// var passport = require('passport');
// const facebookStrategy = require('passport-facebook').Strategy
 const User = require('../models/user');
const router = express.Router();
const { signup, signin, signout, requireSignIn ,googlesignin ,signInNumber } = require('../controllers/auth');

// validators
const { runValidation } = require('../validators');
const { userSignupValidator, userSigninValidator } = require('../validators/auth');

router.post('/signup',  userSignupValidator, runValidation, signup);
router.post('/signin', userSigninValidator, runValidation, signin);
router.get('/signout', signout);
router.route("/googlelogin").post();
router.post("/save-googleuser-details",googlesignin);
router.post('/signin-number', signInNumber);

module.exports = router;
