import Express from 'express'
import Cors from 'cors'

import { login } from './controllers/login'

require('dotenv').config()

const app = Express()
const port = process.env.PORT

app.use(Express.json())
app.use(Cors())

login({ email: 'Emmanuel@gmail.com', password: '1234' })

app.listen(port)