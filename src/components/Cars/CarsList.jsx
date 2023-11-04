import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { COUNT_CARS } from '../../shared/constants/constants';
import { useLoadMore } from '../../shared/hooks/useLoadMore';
import { filteredCars } from '../../shared/utils/utils';
import CarItem from './CarItem';

const CarsList = ({ adverts }) => {
  const [currentPage, carsLimit, loadMore] = useLoadMore(COUNT_CARS);

  const indexOfLastCar = currentPage * carsLimit;

  return (
    <>
      <ul className="cards-list">
        {filteredCars(adverts, indexOfLastCar).map((car) => (
          <CarItem car={car} key={car.id} />
        ))}
      </ul>
      {adverts?.length >= indexOfLastCar && (
        <Button className="button-load" label="Load more" onClick={loadMore} />
      )}
    </>
  );
};

CarsList.propTypes = {
  adverts: PropTypes.array,
};

export default CarsList;
