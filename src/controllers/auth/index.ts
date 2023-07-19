import { Response, Request } from 'express'
import { sign } from 'jsonwebtoken'

import { user } from '../../services'
import msg from '../../messages'

require('dotenv').config()

const secret = String(process.env.SECRET)
const config = { expiresIn: '2d' }

const login = async (req: Request, res: Response) => {
    try {
        const { email } = req.body

        const verify = JSON.stringify(await user.getUserByEmail(email))

        if (verify) {
            const token = sign({ verify }, secret, config)

            return res.status(200).json({ auth: true, token, message: msg.ok })
        }
    } catch (e) {
        return res.status(500).json({ auth: false, message: msg.error.login })
    }
}

const register = async (req: Request, res: Response) => {
    try {
        const { email, name, password } = req.body

        const verify = JSON.stringify(await user.getUserByEmail(email))

        const token = sign({ verify }, secret, config)

        await user.createUser({ email, name, password })

        return res.status(201).json({ auth: true, token, message: msg.ok })
        
    } catch (e) {
        return res.status(500).json({ auth: false, message: msg.error.register })
    }
}

export default {
    login,
    register
}
