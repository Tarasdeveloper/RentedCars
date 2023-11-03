import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { AppWrapper } from './App.styled';
import { Suspense, lazy } from 'react';
import Spinner from './components/Spinner/Spinner';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog'));
const Favorites = lazy(() => import('./pages/Favorites/Favorites'));
import './fonts.css';

function App() {
  return (
    <BrowserRouter basename="/RentedCars">
      <AppWrapper>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </Suspense>
      </AppWrapper>
    </BrowserRouter>
  );
}
export default App;
