import * as z from 'zod'

export const SignInSchema = z.object({
	email: z.string().email({ message: 'Email is required' }),
	password: z.string().min(1, { message: 'Password is required' }),
})

export const SignUpSchema = z
	.object({
		name: z.string().min(1, { message: 'Name is required' }),
		email: z.string().email({ message: 'Invalid email address' }),
		password: z
			.string()
			.min(6, { message: 'Password must be at least 6 characters' })
			.regex(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/, {
				message: 'Password must contain at least one letter and one number',
			}),
		pwRepeat: z.string(),
	})
	.refine(data => data.password === data.pwRepeat, {
		message: "Passwords don't match",
		path: ['pwRepeat'],
	})
