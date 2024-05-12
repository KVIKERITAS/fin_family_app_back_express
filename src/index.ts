import bodyParser from 'body-parser'
import cors from 'cors'
import * as dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import http from 'http'
import MyTransactionRoute from './routes/MyTransactionRoute'
import MyUserRoute from './routes/MyUserRoute'

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(bodyParser.json())

const server = http.createServer(app)

app.get('/health', async (req: Request, res: Response) => {
	res.send({ message: 'health OK!' })
})

app.use('/api/my/user', MyUserRoute)
app.use('/api/my/transaction', MyTransactionRoute)

server.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`)
})
