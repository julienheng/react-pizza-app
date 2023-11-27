import CartOverview from '../features/cart/CartOverview';
import Header from './Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader';

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading';
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <div className="overflow-scroll flex items-center">
        <main className="mx-auto max-w-3xl">
          {' '}
          {/* overflow-scroll makes the specific content scroll when the screen is small */}
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}
