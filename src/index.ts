import bodyParser from 'body-parser'
import cors from 'cors'
import * as dotenv from 'dotenv'
import express from 'express'
import http from 'http'
import MyUserRoute from './routes/MyUserRoute'

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(bodyParser.json())

const server = http.createServer(app)

app.use('/api/my/user', MyUserRoute)

server.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`)
})
