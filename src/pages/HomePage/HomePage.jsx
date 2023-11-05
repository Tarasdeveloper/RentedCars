import Appreciate from '../../components/Appreciate/Appreciate';
import ChooseClass from '../../components/ChooseClass/ChooseClass';
import Explain from '../../components/Explain/Explain';
import VideoImage from '../../components/HomeImage/HomeImage';
import Reasons from '../../components/Reasons/Reasons';
import { Container, HomeTitle, HomeWrap } from './HomePage.styled';

const HomePage = () => {
  return (
    <HomeWrap>
      <Container>
        <HomeTitle>Car rental in Ukraine from RentedCars</HomeTitle>
        <ChooseClass />
        <Explain />
        <Appreciate />
      </Container>
      <VideoImage />
      <Container>
        <Reasons />
      </Container>
    </HomeWrap>
  );
};

export default HomePage;
