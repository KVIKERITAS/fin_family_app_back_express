import express from 'express'
import { getUserByEmail } from '../data/user'
import { hashPassword } from '../helpers'
import { SignUpSchema } from '../schemas'
import { db } from '../utils/db'

export const signUp = async (req: express.Request, res: express.Response) => {
	try {
		const validatedFields = SignUpSchema.safeParse(req.body)

		if (!validatedFields.success)
			return res.json({ error: 'Something went wrong!' })

		const { email, password, name } = validatedFields.data

		const hash = await hashPassword(password)

		const existingUser = await getUserByEmail(email)

		if (existingUser) return res.json({ error: 'Email already in use!' })

		await db.user.create({ data: { name, email, hash } })

		res.json({ success: 'User successfully created!' })
	} catch {
		return res.sendStatus(400)
	}
}
