import PropTypes from 'prop-types';
import { CondItem } from './RentalCond.styled';

const RentalCondItem = ({ conditionText, conditionValue }) => {
  return (
    <CondItem>
      <p>{conditionText}</p>
      {conditionValue && <span>{conditionValue}</span>}
    </CondItem>
  );
};

RentalCondItem.propTypes = {
  conditionText: PropTypes.string.isRequired,
  conditionValue: PropTypes.string,
};

export default RentalCondItem;
