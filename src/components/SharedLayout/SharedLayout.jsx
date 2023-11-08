import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import Spinner from '../Spinner/Spinner';
import Footer from '../Footer/Footer';
import { LayoutHeader, Main } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <LayoutHeader>
        <Header />
      </LayoutHeader>
      <Main>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </Main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default SharedLayout;
