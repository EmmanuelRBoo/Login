import { db } from '../../db'

interface IUser {
    name: string
    password: string
    email: string
}

const getUserByEmail = async (email: string) => {
    const user = await db.user.findUnique({ where: { email }})

    if (user) {
        const { email, key, name } = user
        return { email, key, name }
    }

    return null
}

const createUser = async (data: IUser) => {
    const user = await db.user.create({ data })

    const { email, key, name } = user
    
    return { email, key, name }
}

export default {
    getUserByEmail,
    createUser
}