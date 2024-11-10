import { Request, Response } from 'express'
import { db } from '../db/db'

const createNewCommitment = async (req: Request, res: Response) => {
	try {
		const user = await db.user.findFirst({ where: { id: req.userId } })

		if (!user) {
			return res.status(404).json({ message: 'User not found' })
		}

		const {
			name,
			feeType,
			type,
			fee,
			commitmentStart,
			commitmentEnds,
			interestRate,
			fullSum,
			initialPayment,
		} = req.body

		await db.commitments.create({
			data: {
				userId: user.id,
				name,
				fee_type: feeType,
				fee,
				type,
				commitment_start: commitmentStart,
				commitment_end: commitmentEnds ? commitmentEnds : null,
				interest_rate: interestRate ? interestRate : null,
				full_sum: fullSum ? fullSum : null,
				initial_payment: initialPayment ? initialPayment : null,
			},
		})

		res.status(200).json(req.body)
	} catch (error) {
		console.log(error)
		res.status(500).json({ message: 'Error creating new commitment' })
	}
}

export default { createNewCommitment }
