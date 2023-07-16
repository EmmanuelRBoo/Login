import { Response, Request } from 'express'
import { sign } from 'jsonwebtoken'

import { user } from '../../services'

require('dotenv').config()

interface IData {
    email: string
    password: string
}

const login =  async (req: Request, res: Response) => {
    const { email } = req.body

    const secret = String(process.env.SECRET)
    const verify = JSON.stringify(await user.getUserByEmail(email))
    const config = { expiresIn: '2d' }

    if (verify) {
        const token = sign({ verify }, secret, config)

        return res.status(200).json({ auth: true, token, message: 'OK' })
    }

    return res.status(500).json({ auth: false, message: 'Erro ao fazer login, tente novamente mais tarde' })
}

export default {
    login
}