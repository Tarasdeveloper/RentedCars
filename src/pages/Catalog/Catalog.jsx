import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectCars, selectFilter } from '../../redux/cars/carsSelectors';
import { getAllCars } from '../../redux/cars/carsThunk';

import { filterCars } from '../../shared/utils/utils';
import Filter from '../../components/Filter/Filter';
import { setFilter } from '../../redux/cars/carsSlice';
import { Container } from './Catalog.styled';
import CarsList from '../../components/Cars/CarsList/CarsList';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  const filter = useSelector(selectFilter);

  const filteredCars = filterCars(cars, filter);

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setFilter(null));
  }, [dispatch]);

  return (
    <Container>
      <Filter cars={filteredCars} />
      {cars?.length > 0 && <CarsList adverts={filteredCars} />}
    </Container>
  );
};

export default CatalogPage;
