import { useSelector } from 'react-redux';
import {
  selectFavorites,
  selectFilter,
} from '../../../redux/cars/carsSelectors';
import { filterCars } from '../../../shared/utils/utils';
import CarItem from '../CarItem/CarItem';
import { FavoreList, NotFound } from './FavoritesList.styled';

const FavoritesList = () => {
  const favoriteCars = useSelector(selectFavorites);
  const filter = useSelector(selectFilter);
  const filteredCars = filterCars(favoriteCars, filter);

  return (
    <div>
      {!filteredCars.length && <NotFound>List is empty</NotFound>}
      <FavoreList>
        {filteredCars.map((car) => (
          <CarItem car={car} key={car.id} />
        ))}
      </FavoreList>
    </div>
  );
};

export default FavoritesList;
