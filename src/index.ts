import Express from 'express'
import Cors from 'cors'

import routes from './routes'

require('dotenv').config()

const app = Express()
const port = process.env.PORT

app.use(Express.json())
app.use(Cors())

app.use('/', routes.authRouter)

app.listen(port)