import users from '../routes/Users.route'

import express from 'express'
const app: express.Application = express()

app.use('/users', users)

export default app;