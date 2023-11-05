import { carClasses } from '../../shared/data/data';
import {
  ChooseContainer,
  ChooseItem,
  ChooseLink,
  ChooseList,
  ChooseTitle,
  ClassSpan,
  ClassTitle,
} from './ChooseClass.styled';

const ChooseClass = () => {
  return (
    <ChooseContainer>
      <ChooseTitle>Choose class of your car for rent</ChooseTitle>
      <ChooseList>
        {carClasses.map((carClass, index) => (
          <ChooseItem key={index}>
            <ChooseLink to="/catalog">
              <img src={carClass.src} alt={carClass.alt} />
              <ClassTitle>{carClass.name}</ClassTitle>
              <ClassSpan>{carClass.priceRange}</ClassSpan>
            </ChooseLink>
          </ChooseItem>
        ))}
      </ChooseList>
    </ChooseContainer>
  );
};

export default ChooseClass;
