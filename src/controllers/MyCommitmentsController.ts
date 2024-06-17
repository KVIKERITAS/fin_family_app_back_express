import { Request, Response } from 'express'

const createNewCommitment = async (req: Request, res: Response) => {
	console.log('req.body', req.body)
	console.log('req.params', req.params)
	console.log('req.userId', req.userId)
	res.status(200).json({ message: 'New commitment created' })
}

export default { createNewCommitment }
