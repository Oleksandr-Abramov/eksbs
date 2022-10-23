import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import { Footer } from 'components/Footer/Footer';
import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <BurgerMenu />
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};
