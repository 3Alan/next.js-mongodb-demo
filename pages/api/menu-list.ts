import clientPromise from '../../utils/mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function (req: NextApiRequest, res: NextApiResponse) {
  const client = await clientPromise;
  const menuListCollection = await client.db('menu_order').collection('menu_list');

  const menuList = await menuListCollection.find({}).toArray(); // Returns true or false

  res.json(menuList);
}
