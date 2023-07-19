import { Router } from 'express'
import { auth } from '../../controllers'
import { middlewareAuth } from '../../middlewares'

const authRouter = Router()

authRouter.post('/login', 
    middlewareAuth.verifyEmailNotExist,
    middlewareAuth.verifyPassword,
    auth.login
)

authRouter.post('/register',
    middlewareAuth.verifyEmailExist,
    auth.register
)

export default authRouter