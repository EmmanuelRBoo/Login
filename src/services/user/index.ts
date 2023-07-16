import { db } from '../../db'

const getUserByEmail = async (email: string) => {
    const user = await db.user.findUnique({ where: { email }})

    if (user) {
        const { email, key, name } = user
        return { email, key, name }
    }

    return null
}

export default {
    getUserByEmail
}