import { db } from '../../db'

interface IVerify {
    email: string
    password: string
}

const verifyPassword = async ({ email, password }: IVerify) => {
    const verify = await db.user.findUnique({ where: { email }})

    if (password === verify?.password) {
        return true
    }

    return false
}

export default {
    verifyPassword
}