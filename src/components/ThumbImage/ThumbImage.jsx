import PropTypes from 'prop-types';

import DefaultCar from '../../assets/images/youngman.jpg';

const ThumbImage = ({ src, alt, width, height }) => {
  return (
    <div>
      <img
        src={src ? `${src}` : DefaultCar}
        alt={alt}
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
