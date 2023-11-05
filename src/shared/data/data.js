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

// export const carSlides = [
//   {
//     url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
//     title: 'Mersedes',
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1549275301-c9d60945be6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
//     title: 'Mersedes',
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1616788494672-ec7ca25fdda9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
//     title: 'Mersedes',
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1623013438264-d176fb91ee99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
//     title: 'Mersedes',
//   },
// ];
// export const destinations = [
//   {
//     url: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
//     title: 'Travel',
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
//     title: 'Porsche',
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80',
//     title: 'Mersedes',
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1474039369477-5e74ff1f0e57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
//     title: 'Mersedes',
//   },
//   {
//     url: 'https://images.unsplash.com/photo-1593427934550-4742b652ac84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
//     title: 'Sports Car',
//   },
// ];

// export const carImages = [
//   {
//     src: 'https://images.unsplash.com/photo-1663612400470-8f336d1cbf82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
//     alt: 'Car 1',
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1583870908951-71149f42bcf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
//     alt: 'Car 2',
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1608926324459-317fbd88ba3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
//     alt: 'Car 3',
//   },
// ];
