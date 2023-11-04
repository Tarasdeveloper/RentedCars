import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import DefaultCar from '../../assets/images/youngman.jpg';
import Button from '../Button/Button';
import { useToggle } from '../../shared/hooks/useToggle';
import Modal from '../Modal/Modal';
import ModalCardDetail from '../Modal/ModalCardDetail';
import { getCarData, getLocationData } from '../../shared/utils/utils';
import {
  removeFromFavorites,
  setToFavorites,
} from '../../redux/cars/carsSlice';
import { selectFavorites } from '../../redux/cars/carsSelectors';
import ThumbImage from '../ThumbImage/ThumbImage';
import CardInfoBlock from './CardInfoBlock';

const CarItem = ({ car }) => {
  const { isOpen, open, close } = useToggle(false);
  const favorites = useSelector(selectFavorites);
  const dispatch = useDispatch();

  const { id, year, make, model, img, rentalPrice, address } = car;

  const carData = getCarData(car);
  const locationData = getLocationData(address, car);

  const isFavorite = favorites?.some((favCar) => favCar.id === id);

  const handleToggleFavorite = () => {
    return isFavorite
      ? dispatch(removeFromFavorites(car))
      : dispatch(setToFavorites(car));
  };

  return (
    <>
      <li className="card flex-auto">
        <Button
          type="button"
          iconURL="#icon-heart"
          ariaLabel="heart icon"
          onClick={handleToggleFavorite}
          className={`heart ${isFavorite ? 'favorite' : ''}`}
        />
        <ThumbImage
          className="card-image"
          src={img ? img : DefaultCar}
          alt={`${make} ${model}`}
          width="274"
          height="426"
          loading="lazy"
        />
        {/* <Title> */}
        <span>
          {make}
          <span>{model}</span>, {year}
        </span>
        <span>{rentalPrice}</span>
        {/* </Title> */}

        <CardInfoBlock locationData={locationData} carData={carData} />

        <Button label="Learn more" className="card-big-button" onClick={open} />
        {isOpen && (
          <Modal isOpen={isOpen} onClose={close}>
            <ModalCardDetail car={car} />
          </Modal>
        )}
      </li>
    </>
  );
};

CarItem.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    functionalities: PropTypes.array.isRequired,
    rentalPrice: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
  }).isRequired,
  fav: PropTypes.bool,
};

export default CarItem;
