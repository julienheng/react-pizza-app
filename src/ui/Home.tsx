/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state: any) => state.user.username);

  return (
    <div className="my-10 px-4 text-center sm:my-16">
      <h1 className="mb-8 text-2xl font-semibold md:text-5xl">
        The Best Pizza.
        <br />
        <span className="text-yellow-500 ">
          Straight out of the oven to your door.
        </span>
      </h1>

      {username === '' ? (
        <CreateUser />
      ) : (
        <Button to="/menu" type="primary">
          Continue Ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default Home;
