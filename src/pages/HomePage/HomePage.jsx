import Appreciate from '../../components/Appreciate/Appreciate';
import ChooseClass from '../../components/ChooseClass/ChooseClass';
import Explain from '../../components/Explain/Explain';
import { Container, HomeTitle, HomeWrap } from './HomePage.styled';

const HomePage = () => {
  return (
    <HomeWrap>
      <Container>
        <HomeTitle>Car rental in Ukraine from RentedCars</HomeTitle>
        <ChooseClass />
        <Explain />
        <Appreciate />

        <div>
          <h2>Seven reasons to rent a car in RentedCars:</h2>
          <ul>
            <li>
              <h3>Assistance</h3>
              <p>Support on the road 24/7</p>
            </li>
            <li>
              <h3>Affordable prices</h3>
              <p>We try to provide lower prices than average</p>
            </li>
            <li>
              <h3>Minimum of bureaucracy</h3>
              <p>Few documents for lease</p>
            </li>
            <li>
              <h3>Full insurance</h3>
              <p>All cars are insured</p>
            </li>
            <li>
              <h3>Free delivery to the customer</h3>
              <p>when renting for more than 3 days</p>
            </li>
            <li>
              <h3>All cars in good condition</h3>
              <p>Our cars are regularly sericed</p>
            </li>
            <li>
              <h3>Car replacement</h3>
              <p>in the case of failure</p>
            </li>
          </ul>
        </div>
      </Container>
    </HomeWrap>
  );
};

export default HomePage;
