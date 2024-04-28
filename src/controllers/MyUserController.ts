import { Request, Response } from 'express'
import { db } from '../utils/db'

const createNewUser = async (req: Request, res: Response) => {
	try {
		const { auth0Id } = req.body
		const existingUser = await db.user.findUnique({ where: { auth0Id } })

		if (existingUser) return res.status(200).send()

		const newUser = await db.user.create({ data: req.body })

		res.status(201).json(newUser)
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: 'Error creating user' })
	}
}

export default { createNewUser }
