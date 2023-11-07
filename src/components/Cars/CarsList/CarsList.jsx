import PropTypes from 'prop-types';
import { COUNT_CARS } from '../../../shared/constants/constants';
import { useLoadMore } from '../../../shared/hooks/useLoadMore';
import { filteredCars } from '../../../shared/utils/utils';
import CarItem from '../CarItem/CarItem';
import { CarsArr, LoadBtn } from './CarsList.styled';

const CarsList = ({ adverts }) => {
  const [currentPage, carsLimit, loadMore] = useLoadMore(COUNT_CARS);

  const indexOfLastCar = currentPage * carsLimit;

  return (
    <>
      <CarsArr>
        {filteredCars(adverts, indexOfLastCar).map((car) => (
          <CarItem car={car} key={car.id} />
        ))}
      </CarsArr>
      {adverts?.length >= indexOfLastCar && (
        <LoadBtn onClick={loadMore}>Load more</LoadBtn>
      )}
    </>
  );
};

CarsList.propTypes = {
  adverts: PropTypes.array,
};

export default CarsList;
