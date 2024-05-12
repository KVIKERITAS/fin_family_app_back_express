import { Request, Response } from 'express'

const createNewTransactionCategory = (req: Request, res: Response) => {
	try {
		console.log(req.body)

		res.status(200).json(req.body)
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: 'Error creating transaction category' })
	}
}

export default { createNewTransactionCategory }
