import { sign } from 'jsonwebtoken'
import { user } from '../../services'

require('dotenv').config()

interface IData {
    email: string
    password: string
}

export const login =  async (data: IData) => {
    const token = process.env.SECRET

    const users = await user.verifyUser(data.email)

    console.log('t', users ? users?.id : 'nada')

}