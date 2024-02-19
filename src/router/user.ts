import express from 'express'
import { changeUserSettings, findUserById } from '../controllers/user'

export default (router: express.Router) => {
	router.get('/user/:id', findUserById)
	router.post('/user/settings', changeUserSettings)
}
