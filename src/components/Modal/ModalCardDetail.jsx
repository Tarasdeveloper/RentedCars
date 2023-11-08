import PropTypes from 'prop-types';
import ThumbImage from '../ThumbImage/ThumbImage';
import RentalCondBlock from '../RentalConditionals/RentalCondBlock';
import AccessoriesBlock from '../Accessories/AccessoriesBlock';

import {
  getFuelEngineData,
  getFullCarData,
  parseMileage,
  parsePrice,
  parseRentalConditions,
  renderItems,
} from '../../shared/utils/utils';
import { CarsLocateData, ModalTitle } from './ModalCardDetail.styled';

const ModalCardDetail = ({ car }) => {
  const {
    year,
    make,
    model,
    img,
    rentalPrice,
    address,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
  } = car;

  const carData = getFuelEngineData(car);
  const locationData = getFullCarData(address, car);
  const rentConditions = parseRentalConditions(rentalConditions);
  const mile = parseMileage(mileage);
  const price = parsePrice(rentalPrice);

  return (
    <>
      <ThumbImage
        width="461"
        height="248"
        src={img}
        alt={`${make} ${model}`}
        loading="lazy"
      />
      <ModalTitle>
        {make} <span>{model}</span>, {year}
      </ModalTitle>
      <CarsLocateData>
        <ul>{renderItems(locationData)}</ul>
        <ul>{renderItems(carData)}</ul>
      </CarsLocateData>
      <div>{description}</div>
      <AccessoriesBlock
        title="Accessories and functionalities"
        accessories={accessories}
        functionalities={functionalities}
      />
      <RentalCondBlock
        title="Rental Conditions"
        rentConditions={rentConditions}
        mile={mile}
        price={price}
      />
      <a href="tel:+380730000000">Rental car</a>
    </>
  );
};

ModalCardDetail.propTypes = {
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
    accessories: PropTypes.array.isRequired,
    rentalConditions: PropTypes.string.isRequired,
  }).isRequired,
};

export default ModalCardDetail;
