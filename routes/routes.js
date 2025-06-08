const express = require("express");
const auth = require("../middleware/auth.middleare");
const authController = require('../controller/home');
const validate = require("../middleware/validate-middleware");
// const errMiddle = require("../middleware/error-middleware");
const {signupSchema, signinSchema} = require("../validators/validate-auth");
const router = express.Router();

router.route('/').get(auth, authController.home);
router.route("/register").post(validate(signupSchema), authController.register);
router.route('/login').post(authController.login);

// router.route('/*').get((req,res)=>{
//     res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'))
// });
// router.route('/login').post(errMiddle, authController.login);

// router.route('/login').post(validate(signinSchema), authController.login);
// router.route('/login').post(errMiddle, authController.login);

module.exports = router;