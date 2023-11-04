import { video } from '../../assets/images/video_cars.jpg';
import ThumbImage from '../ThumbImage/ThumbImage';
// import MainTitle from './MainTitle';

const NotFound = () => {
  return (
    <section>
      {/* <MainTitle>No followed cars</MainTitle> */}
      <ThumbImage src={video} alt="Car" width="1200" />
    </section>
  );
};

export default NotFound;
