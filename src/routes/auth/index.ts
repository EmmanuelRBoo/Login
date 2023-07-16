import { Router } from 'express'
import { auth } from '../../controllers'
import { middlewareAuth } from '../../middlewares'

const authRouter = Router()

authRouter.post('/', 
    middlewareAuth.verifyPassword,
    auth.login
)

export default authRouter