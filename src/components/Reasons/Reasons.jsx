import { reasons } from '../../shared/data/data';
import { ReasonList, ReasonTitle } from './Reasons.styled';
import sprite from '../../assets/sprite.svg';

const Reasons = () => {
  return (
    <div>
      <ReasonTitle>Seven reasons to rent a car in RentedCars:</ReasonTitle>
      <ReasonList>
        {reasons.map((reason, index) => (
          <li key={index}>
            <svg>
              <use href={`${sprite}#{reason.id}`} />
            </svg>
            <h3>{reason.title}</h3>
            <p>{reason.text}</p>
          </li>
        ))}
      </ReasonList>
    </div>
  );
};

export default Reasons;
