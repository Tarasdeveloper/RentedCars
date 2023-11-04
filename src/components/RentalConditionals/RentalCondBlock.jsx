import PropTypes from 'prop-types';

import RentalCondItem from './RentalCondItem';

const RentalCondBlock = ({ rentConditions, mile, price, title }) => {
  return (
    <div>
      <p>{title}:</p>
      <ul>
        <RentalCondItem
          conditionText={rentConditions[0]}
          conditionValue={rentConditions[1]}
        />
        <RentalCondItem conditionText={rentConditions[2]} />
        <RentalCondItem conditionText={rentConditions[3]} />
        <RentalCondItem conditionText={'Mileage: '} conditionValue={mile} />
        <RentalCondItem
          conditionText={'Price: '}
          conditionValue={`${price}$`}
        />
      </ul>
    </div>
  );
};

RentalCondBlock.propTypes = {
  rentConditions: PropTypes.array.isRequired,
  mile: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default RentalCondBlock;
