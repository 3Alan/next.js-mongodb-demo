import type { NextPage } from 'next';
import FoodList from '../components/FoodList';
import ParticipantList from '../components/ParticipantList';

const Home: NextPage = () => {
  return (
    <div>
      <FoodList />
      <ParticipantList />
    </div>
  );
};

export default Home;
