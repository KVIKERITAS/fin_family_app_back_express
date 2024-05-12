import express from 'express'
import MyTransactionController from '../controllers/MyTransactionController'
import { jwtCheck, jwtParse } from '../middleware/auth'
import { validateMyTransactionCategoryRequest } from '../middleware/validation'

const router = express.Router()

router.post(
	'/category',
	jwtCheck,
	jwtParse,
	validateMyTransactionCategoryRequest,
	MyTransactionController.createNewTransactionCategory,
)

export default router
