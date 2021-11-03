import clientPromise from '../../utils/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongodb';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const orderListCollection = await client.db('menu_order').collection('order_list');

  const { id } = req.query;
  const orderDetail = await orderListCollection.findOne({ _id: new ObjectId(id as string) });

  console.log(orderDetail);

  res.json(orderDetail);
}
