import PropTypes from 'prop-types';

const Title = ({ children }) => {
  return <h2>{children}</h2>;
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Title;
