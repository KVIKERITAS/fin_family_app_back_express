import express from 'express'
import { signIn, signUp } from '../controllers/auth'

export default (router: express.Router) => {
	router.post('/auth/signup', signUp)
	router.post('/auth/signin', signIn)
}
