import econom from '../../assets/images/econom.jpg';
import middle from '../../assets/images/middle.jpg';
import business from '../../assets/images/business.jpg';
import premium from '../../assets/images/premium.jpg';
import offroad from '../../assets/images/offroad.jpg';
import minivan from '../../assets/images/minivan.jpg';

export const navLinks = [
  { id: 1, link: '/', label: 'Home' },
  { id: 2, link: '/catalog', label: 'Catalog' },
  { id: 3, link: '/favorites', label: 'Favorites' },
];

export const filterState = {
  brand: '',
  price: '',
  minMileage: '',
  maxMileage: '',
};

export const carClasses = [
  { src: econom, alt: 'economy', name: 'economy', priceRange: '15$ - 45$' },
  { src: middle, alt: 'middle', name: 'middle', priceRange: '30$ - 70$' },
  { src: business, alt: 'business', name: 'business', priceRange: '43$ - 90$' },
  { src: premium, alt: 'premium', name: 'premium', priceRange: '85$ - 600$' },
  { src: offroad, alt: 'offroad', name: 'SUV', priceRange: '36$ - 500$' },
  { src: minivan, alt: 'minivan', name: 'minivan', priceRange: '43$ - 90$' },
];

export const carStatistics = [
  { number: 89, text: 'of customers rated our cars as excellent' },
  {
    number: 92,
    text: 'of clients quickly received all the necessary information at the first contact with a manager',
  },
  {
    number: 94,
    text: 'of clients were given a car no more than 30 minutes after arrival at the office',
  },
  { number: 96, text: 'of customers noted that they received a clean car' },
  { number: 100, text: 'of customers received a car with a full tank' },
  {
    number: 93,
    text: 'of clients handed over their cars and returned their deposit in less than 20 minutes',
  },
];

export const reasons = [
  {
    id: 'headset',
    title: 'Assistance',
    text: 'Support on the road 24/7',
  },
  {
    id: 'hand',
    title: 'Affordable prices',
    text: 'We try to provide lower prices than average',
  },
  {
    id: 'mers',
    title: 'Minimum of bureaucracy',
    text: 'Few documents for lease',
  },
  { id: 'insurance', title: 'Full insurance', text: 'All cars are insured' },
  {
    id: 'key',
    title: 'Free delivery to the customer',
    text: 'when renting for more than 3 days',
  },
  {
    id: 'gear',
    title: 'All cars in good condition',
    text: 'Our cars are regularly sericed',
  },
  { id: 'document', title: 'Car replacement', text: 'in the case of failure' },
];
