import { CircularProgress } from '@mui/material';
import { FC } from 'react';
import useSWR from 'swr';
import FoodCard, { Food } from './FoodCard';

const FoodList: FC = () => {
  const { data: menuList, error } = useSWR('/api/menu-list');

  if (error) return <div>failed to load</div>;
  if (!menuList) return <CircularProgress />;

  return (
    <div>
      {menuList.map((item: Food) => (
        <FoodCard key={item._id} detail={item} handleAddCart={() => {}} />
      ))}
    </div>
  );
};

export default FoodList;
