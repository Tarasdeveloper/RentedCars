import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import DefaultCar from '../../../assets/images/matureman.jpg';
import { useToggle } from '../../../shared/hooks/useToggle';
import Modal from '../../Modal/Modal';
import ModalCardDetail from '../../Modal/ModalCardDetail';
import { getCarData, getLocationData } from '../../../shared/utils/utils';
import {
  removeFromFavorites,
  setToFavorites,
} from '../../../redux/cars/carsSlice';
import { selectFavorites } from '../../../redux/cars/carsSelectors';
import ThumbImage from '../../ThumbImage/ThumbImage';
import CardInfoBlock from '../CardInfoBlock';
import {
  CarListItem,
  HeartButton,
  IconHeart,
  ItemTitle,
  ItemTitleWrap,
  MoreButton,
} from './Caritem.styled';
import sprite from '../../../assets/sprite.svg';

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
      <CarListItem>
        <HeartButton type="button" onClick={handleToggleFavorite}>
          <IconHeart>
            <use href={`${sprite}#heart`} />
          </IconHeart>
        </HeartButton>
        <ThumbImage
          src={img ? img : DefaultCar}
          alt={`${make} ${model}`}
          loading="lazy"
        />

        <ItemTitleWrap>
          <ItemTitle>
            {make}
            <span> {model}</span>, {year}
          </ItemTitle>
          <span>{rentalPrice}</span>
        </ItemTitleWrap>

        <CardInfoBlock locationData={locationData} carData={carData} />

        <MoreButton label="Learn more" onClick={open}>
          Learn more
        </MoreButton>
        {isOpen && (
          <Modal isOpen={isOpen} onClose={close}>
            <ModalCardDetail car={car} />
          </Modal>
        )}
      </CarListItem>
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
