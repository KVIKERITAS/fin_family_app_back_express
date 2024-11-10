import { TransactionType } from '@prisma/client'
import { Request, Response } from 'express'
import { db } from '../db/db'
import { EnumTransactionTypeFilter } from '../lib/types' // Adjust the import path as necessary

const getTransactionCategories = async (req: Request, res: Response) => {
	try {
		const { type } = req.params

		const user = await db.user.findFirst({ where: { id: req.userId } })

		if (!user) {
			return res.status(404).json({ message: 'User not found' })
		}

		const categories = await db.transactionCategory.findMany({
			where: {
				userId: user.id,
				type: type as
					| EnumTransactionTypeFilter<'TransactionCategory'>
					| TransactionType,
			},
		})

		res.status(200).json(categories)
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: 'Error fetching transaction categories' })
	}
}

const createNewTransactionCategory = async (req: Request, res: Response) => {
	try {
		const user = await db.user.findFirst({ where: { id: req.userId } })

		if (!user) {
			return res.status(404).json({ message: 'User not found' })
		}

		const { name, icon, type } = req.body

		await db.transactionCategory.create({
			data: { userId: user.id, name, icon, type },
		})

		res.status(200).json(req.body)
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: 'Error creating transaction category' })
	}
}

export default { createNewTransactionCategory, getTransactionCategories }
