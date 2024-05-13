const { Router } = require('express');
const { createUser } = require('../controller/Auth')
const userRouter = Router();

//Routes for user
userRouter.post('/register', createUser)



module.exports = userRouter;