import express from 'express'
import { getUserByEmail } from '../data/user'
import { checkPassword, hashPassword } from '../helpers'
import { SignInSchema, SignUpSchema } from '../schemas'
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

export const signIn = async (req: express.Request, res: express.Response) => {
	try {
		const validatedFields = SignInSchema.safeParse(req.body)

		if (!validatedFields.success) return res.json(null)

		const { email, password } = validatedFields.data

		const user = await getUserByEmail(email)

		if (!user) return res.json(null)

		const passwordMatch = await checkPassword(password, user.hash)

		if (!passwordMatch) return res.json(null)

		return res.json(user)
	} catch {
		return res.sendStatus(400)
	}
}
