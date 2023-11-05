import { useSelector } from 'react-redux';
import { selectFavorites, selectFilter } from '../../redux/cars/carsSelectors';
import { filterCars } from '../../shared/utils/utils';
import CarItem from './CarItem';
// import NotFound from '../NotFound/NotFound';

const FavoritesList = () => {
  const favoriteCars = useSelector(selectFavorites);
  const filter = useSelector(selectFilter);
  const filteredCars = filterCars(favoriteCars, filter);

  return (
    <div>
      {!filteredCars.length && {}}
      <ul>
        {filteredCars.map((car) => (
          <CarItem car={car} key={car.id} />
        ))}
      </ul>
    </div>
  );
};

export default FavoritesList;
