import { NextFunction, Request, Response } from 'express'
import z from 'zod'

const UserSchema = z.object({
	name: z.string().min(1, 'Name must be a string'),
})

export const validateMyUserRequest = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const validatedFields = UserSchema.safeParse(req.body)

	if (validatedFields.error) {
		return res.status(400).json({ error: validatedFields.error })
	}

	next()
}

const TransactionCategorySchema = z.object({
	name: z.string().min(3).max(20),
	icon: z.string().max(20),
	type: z.enum(['income', 'expense']),
})

export const validateMyTransactionCategoryRequest = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const validatedFields = TransactionCategorySchema.safeParse(req.body)

	if (validatedFields.error) {
		return res.status(400).json({ error: validatedFields.error })
	}

	next()
}
