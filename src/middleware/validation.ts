import { NextFunction, Request, Response } from 'express'
import z from 'zod'

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

const UserSchema = z.object({
	name: z.string().min(1, 'Name must be a string'),
})
