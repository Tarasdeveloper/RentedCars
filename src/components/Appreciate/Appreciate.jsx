import { carStatistics } from '../../shared/data/data';
import {
  AppreciateItem,
  AppreciateList,
  AppreciateSpan,
  AppreciateSuptitle,
  AppreciateText,
  AppreciateTitle,
  AppreciateWrap,
} from './Appreciate.styled';

const Appreciate = () => {
  return (
    <AppreciateWrap>
      <AppreciateTitle>What we are appreciated for</AppreciateTitle>
      <AppreciateSuptitle>
        The data provided below is the summarized result of a survey that was
        conducted among 247 new customers.
      </AppreciateSuptitle>
      <AppreciateList>
        {carStatistics.map((carStat, index) => (
          <AppreciateItem key={index}>
            <AppreciateSpan>
              {carStat.number}
              <span>%</span>
            </AppreciateSpan>
            <AppreciateText>{carStat.text}</AppreciateText>
          </AppreciateItem>
        ))}
      </AppreciateList>
    </AppreciateWrap>
  );
};

export default Appreciate;
