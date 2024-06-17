import express from 'express'
import MyCommitmentController from '../controllers/MyCommitmentsController'
import { jwtCheck, jwtParse } from '../middleware/auth'

const router = express.Router()

router.post(
	'/newCommitment/:type',
	jwtCheck,
	jwtParse,
	MyCommitmentController.createNewCommitment,
)

export default router
