import cors from 'cors'
import * as dotenv from 'dotenv'
import express from 'express'
import http from 'http'

dotenv.config()

const app = express()
const PORT = process.env.PORT

app.use(
	cors({
		credentials: true,
	}),
)

const server = http.createServer(app)

server.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`)
})
