
const express= require('express');

const router= express.Router();
const usercontrollers= require('../../controllers/users/user');
router.get('/list', usercontrollers.allusers);


module.exports= router