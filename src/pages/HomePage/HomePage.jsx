import Appreciate from '../../components/Appreciate/Appreciate';
import Explain from '../../components/Explain/Explain';
import HomeHero from '../../components/HomeHero/HomeHero';
import VideoImage from '../../components/HomeImage/HomeImage';
import Reasons from '../../components/Reasons/Reasons';
import { HomePageWrap } from './HomePage.styled';

const HomePage = () => {
  return (
    <HomePageWrap>
      <HomeHero />
      <Explain />
      <Appreciate />
      <VideoImage />
      <Reasons />
    </HomePageWrap>
  );
};

export default HomePage;
