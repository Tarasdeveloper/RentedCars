import Appreciate from '../../components/Appreciate/Appreciate';
import ChooseClass from '../../components/ChooseClass/ChooseClass';
import { Container, HomeTitle, HomeWrap } from './HomePage.styled';

const HomePage = () => {
  return (
    <HomeWrap>
      <Container>
        <HomeTitle>Car rental in Ukraine from RentedCars</HomeTitle>
        <ChooseClass />
        <Appreciate />

        <div>
          <h2>Car rental in Kiev</h2>
          <p>
            Arriving in Kyiv on business or as tourists, many people are faced
            with the problem of free movement around the city. Short or
            long-term car rental at 7Cars is the best alternative to public
            transport or taxi. You get complete freedom of movement: you can
            plan the route by yourself, so you don’t have to depend on the bus
            schedule or the time of car delivery. Our company has been working
            in this market segment for more than six years. During this time, an
            extensive fleet of modern vehicles was created and a dispatch
            service was organized. You can easily make a request and rent a car
            in Kyiv – just call our office by phone or contact us via the
            Internet. Do not miss the unique chance to inexpensively rent a car
            of the class you need with or without a driver!
          </p>
        </div>
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
