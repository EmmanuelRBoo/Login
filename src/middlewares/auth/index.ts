import { auth } from '../../services'
import { Request, Response, NextFunction } from 'express'

const verifyPassword = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body

    const verify = await auth.verifyPassword({ email, password })

    if (!verify) {
        return res.status(401).json({ message: 'Senha inválida' })
    }

    return next()
} 

export default { 
    verifyPassword 
}