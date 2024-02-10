import express from 'express'
import { getUserById } from '../data/user'

export const findUserById = async (
	req: express.Request,
	res: express.Response,
) => {
	try {
		const { id } = req.params

		const user = await getUserById(id)
		if (!user) return res.json(null)

		return res.json(user)
	} catch {
		return res.sendStatus(400)
	}
}
