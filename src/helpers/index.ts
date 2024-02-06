import bcrypt from 'bcryptjs'

export const hashPassword = (password: string) => {
	const hash = bcrypt.hash(password, 10)

	return hash
}
