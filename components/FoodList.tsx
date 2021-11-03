import { CircularProgress } from '@mui/material';
import axios from 'axios';
import { FC } from 'react';
import useSWR from 'swr';
import FoodCard, { Food } from './FoodCard';

const FoodList: FC = () => {
  const { data: menuList, error } = useSWR('/api/menu-list');
  const name = 'Paul';
  const _id = '617fb8113cbcbde9a07c000a';

  if (error) return <div>failed to load</div>;
  if (!menuList) return <CircularProgress />;

  const handleAddCart = async (item: Food) => {
    await axios('/api/add-cart', {
      method: 'POST',
      data: {
        _id,
        user: name,
        food: {
          ...item
        }
      }
    });
  };

  return (
    <div>
      {menuList.map((item: Food) => (
        <FoodCard key={item._id} detail={item} handleAddCart={() => handleAddCart(item)} />
      ))}
    </div>
  );
};

export default FoodList;
