import PropTypes from 'prop-types';
import { AccessItemList } from './AccessoriesBlock.styled';

const AccessoriesItem = ({ items, separator }) => {
  return (
    <AccessItemList>
      {items.map((item, idx) => (
        <li key={idx}>
          {item}
          {idx < items.length - 1 && separator}
        </li>
      ))}
    </AccessItemList>
  );
};

AccessoriesItem.propTypes = {
  items: PropTypes.array.isRequired,
  separator: PropTypes.any,
};

export default AccessoriesItem;
