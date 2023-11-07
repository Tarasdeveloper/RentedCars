import { reasons } from '../../shared/data/data';
import {
  ReasonItem,
  ReasonList,
  ReasonName,
  ReasonTitle,
  ReasonWrap,
  Svg,
} from './Reasons.styled';
import sprite from '../../assets/sprite.svg';

const Reasons = () => {
  return (
    <ReasonWrap>
      <ReasonTitle>Seven reasons to rent a car in RentedCars:</ReasonTitle>
      <ReasonList>
        {reasons.map((reason, index) => (
          <ReasonItem key={index}>
            <Svg>
              <use href={`${sprite}#${reason.id}`} />
            </Svg>
            <ReasonName>{reason.title}</ReasonName>
            <p>{reason.text}</p>
          </ReasonItem>
        ))}
      </ReasonList>
    </ReasonWrap>
  );
};

export default Reasons;
