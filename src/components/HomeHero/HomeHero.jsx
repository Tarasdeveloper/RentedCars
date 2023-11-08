import ChooseClass from '../ChooseClass/ChooseClass';
import { HomeTitle, HomeWrap } from './HomeHero.styled';

const HomeHero = () => {
  return (
    <HomeWrap>
      <HomeTitle>Car rental in Ukraine from RentedCars</HomeTitle>
      <ChooseClass />
    </HomeWrap>
  );
};

export default HomeHero;
