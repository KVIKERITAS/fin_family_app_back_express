import { Request, Response } from 'express'
import { db } from '../db/db'

const getCurrentUser = async (req: Request, res: Response) => {
	try {
		const currentUser = await db.user.findFirst({ where: { id: req.userId } })

		if (!currentUser) return res.status(404).json({ message: 'User not found' })

		res.json(currentUser)
	} catch (error) {
		console.log(error)
		return res.status(500).json({ message: 'Something went wrong' })
	}
}

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

const updateCurrentUser = async (req: Request, res: Response) => {
	try {
		const { name } = req.body
		const user = await db.user.findFirst({ where: { id: req.userId } })

		if (!user) {
			return res.status(404).json({ message: 'User not found' })
		}

		user.name = name

		await db.user.update({ where: { id: req.userId }, data: user })

		res.send(user)
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: 'Error updating user' })
	}
}

export default { getCurrentUser, createNewUser, updateCurrentUser }
