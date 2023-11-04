import PropTypes from 'prop-types';

// import DefaultCar from '../../assets/images/youngman.jpg';

const ThumbImage = ({ src, alt, className, blockClass, width, height }) => {
  return (
    <div className={blockClass ? ` ${blockClass}` : ''}>
      <img
        src={src ? `${src}` : ''}
        alt={alt}
        className={className ? `block ${className}` : 'block'}
        width={width}
        height={height}
        loading="lazy"
      />
    </div>
  );
};

ThumbImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  blockClass: PropTypes.string,
  width: PropTypes.string.isRequired,
  height: PropTypes.string,
};

export default ThumbImage;
