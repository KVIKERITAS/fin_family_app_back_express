import express from 'express'
import { createTransaction, editTransaction } from '../controllers/finances'

export default (router: express.Router) => {
	router.post('/finances/createTransaction', createTransaction)
	router.get('/finances/editTransaction', editTransaction)
}
