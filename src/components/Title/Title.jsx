import PropTypes from 'prop-types';

const Title = ({ children, className }) => {
  return (
    <h2 className={className ? `${className}` : 'title-card flex '}>
      {children}
    </h2>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Title;
