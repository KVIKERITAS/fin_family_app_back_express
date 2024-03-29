import express from 'express'
import { db } from '../utils/db'

export const createTransaction = async (
	req: express.Request,
	res: express.Response,
) => {
	try {
		console.log('createTransaction req.body', req.body)

		const createTransations = await db.transactions.create({
			data: req.body,
		})
		console.log('createTransations', createTransations)

		return { ok: 'ok' }
	} catch (error) {
		console.log('error', error)
		return res.sendStatus(400)
	}
}

export const editTransaction = async (
	req: express.Request,
	res: express.Response,
) => {
	try {
		return { ok: 'ok' }
	} catch {
		return res.sendStatus(400)
	}
}
