import PropTypes from 'prop-types';

const RentalCondItem = ({ conditionText, conditionValue }) => {
  return (
    <li>
      <p>{conditionText}</p>
      {conditionValue && <span>{conditionValue}</span>}
    </li>
  );
};

RentalCondItem.propTypes = {
  conditionText: PropTypes.string.isRequired,
  conditionValue: PropTypes.string,
};

export default RentalCondItem;
