// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import User from '../../../database/models/users';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { method } = req;

  switch (method) {
    case 'POST':
      try {
        const user = await User.findAll({
          where: { email: req.body.email, password: req.body.password },
        });
        if (user.length) res.status(201).json(user);
        else res.status(403).json({ success: false });
      } catch (error) {
        res.status(400).json({ message: 'User não encontrado' });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
