import PropTypes from 'prop-types';

const AccessoriesItem = ({ items, separator }) => {
  return (
    <ul>
      {items.map((item, idx) => (
        <li key={idx}>
          {item}
          {idx < items.length - 1 && separator}
        </li>
      ))}
    </ul>
  );
};

AccessoriesItem.propTypes = {
  items: PropTypes.array.isRequired,
  separator: PropTypes.any,
};

export default AccessoriesItem;
