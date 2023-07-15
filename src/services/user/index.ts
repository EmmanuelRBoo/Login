import { db } from '../../db'

const verifyUser = async (email: string) => {
    const user = await db.user.findUnique({ where: { email }})

    return user
}

export default {
    verifyUser
}