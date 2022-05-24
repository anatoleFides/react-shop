const Router = require('express')
const userController = require('../controllers/userController')
const authorization = require('../middelware/authMiddelware')

const router = new Router()

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', authorization, userController.check)

module.exports = router