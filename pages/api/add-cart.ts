import clientPromise from '../../utils/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ObjectId } from 'mongodb';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const orderListCollection = await client.db('menu_order').collection('order_list');

  console.log(req.body);

  const { _id, user, food } = req.body;

  await orderListCollection.updateOne(
    { _id: new ObjectId(_id) },
    { $push: { list: { user, food } } }
  );

  res.json('124');
}
