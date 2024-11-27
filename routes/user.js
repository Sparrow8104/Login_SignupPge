const express=require('express')
const register=require('../controllers/register')
const login=require('../controllers/login')
const forgetPassword=require('../controllers/forgetPasssword')

const router=express.Router()

router.post('/register',register)
router.post('/login',login)
router.post('/forget/password',forgetPassword)

module.exports=router