import type { NextPage } from 'next';
import FoodList from '../components/FoodList';
import OrderDetail from '../components/OrderDetail';

const Home: NextPage = () => {
  return (
    <div>
      <OrderDetail />
      <FoodList />
    </div>
  );
};

export default Home;
