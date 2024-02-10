import express from 'express'
import { findUserById } from '../controllers/user'

export default (router: express.Router) => {
	router.get('/user/:id', findUserById)
}
