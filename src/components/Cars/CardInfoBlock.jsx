import PropTypes from 'prop-types';
import { formatedValue, renderItems } from '../../shared/utils/utils';
import Separator from '../Separator/Separator';

const CardInfoBlock = ({ locationData, carData }) => {
  return (
    <>
      <ul>{renderItems(locationData, <Separator />)}</ul>
      <ul>
        {Object.entries(carData).map(([key, value], idx, arr) => (
          <li key={idx}>
            {formatedValue(key, value)}
            {idx < arr.length - 1 && <Separator />}
          </li>
        ))}
      </ul>
    </>
  );
};

CardInfoBlock.propTypes = {
  carData: PropTypes.object.isRequired,
  locationData: PropTypes.array.isRequired,
};

export default CardInfoBlock;
