import Express from 'express'
import Cors from 'cors'

import { authRouter } from './routes'

require('dotenv').config()

const app = Express()
const port = process.env.PORT

app.use(Express.json())
app.use(Cors())

app.use('/login', authRouter)

app.listen(port)