import bcrypt from 'bcryptjs'

export const hashPassword = (password: string) => {
	const hash = bcrypt.hash(password, 10)

	return hash
}

export const checkPassword = (password: string, hash: string) => {
	const passwordMatch = bcrypt.compare(password, hash)

	return passwordMatch
}
