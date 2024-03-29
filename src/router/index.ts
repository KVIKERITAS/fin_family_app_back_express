import express from 'express'
import auth from './auth'
import finances from './finances'
import user from './user'

const router = express.Router()

export default (): express.Router => {
	auth(router)
	user(router)
	finances(router)

	return router
}
