const express=require('express')
const { authenticateUser } = require('../app/middleware/authenticate')
const router=express.Router()

const categoriesController=require('../app/controller/categoriesController')

const notesController=require('../app/controller/notesController')

const usersController=require('../app/controller/userController')

router.get('/categories',categoriesController.list)
router.post('/categories',categoriesController.create)
router.get('/categories/:id',categoriesController.show)
router.put('/categories/:id',categoriesController.add)
router.delete('/categories/:id',categoriesController.del)

router.get('/notes',notesController.list)
router.post('/notes',notesController.create)
router.put('/notes/:id',notesController.show)
router.delete('/notes/:id',notesController.del)

router.post('/users/register',usersController.register)
router.post('/users/login',usersController.login)

router.get('/users/account', authenticateUser, usersController.account)

module.exports=router