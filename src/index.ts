import './databases/mongoose'

import app from './config/express'
app.listen(3333, () => console.log('[express] Express iniciado com sucesso.'))