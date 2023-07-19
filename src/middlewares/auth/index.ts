import { auth, user } from '../../services'
import { Request, Response, NextFunction } from 'express'

import msg from '../../messages'

const verifyEmailNotExist = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body

    const verify = await user.getUserByEmail(email)

    if (verify === null) {
        return res.status(401).json({ message: msg.email.notExist })
    }

    return next()
}

const verifyEmailExist = async (req: Request, res: Response, next: NextFunction) => {
    const { email } = req.body

    const verify = await user.getUserByEmail(email)

    if (verify) {
        return res.status(401).json({ message: msg.email.exist })
    }

    return next()
}

const verifyPassword = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body

    const verify = await auth.verifyPassword({ email, password })

    if (!verify) {
        return res.status(401).json({ message: msg.password.invalid })
    }

    return next()
} 

export default { 
    verifyEmailNotExist,
    verifyEmailExist,
    verifyPassword 
}