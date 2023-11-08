import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { useUniquePropValues } from '../../shared/hooks/usePropValues';
import { selectFavorites, selectFilter } from '../../redux/cars/carsSelectors';

import { setFilter } from '../../redux/cars/carsSlice';
import { RadioList } from './RadioFilter.styled';

const RadioFilter = ({ open }) => {
  const dispatch = useDispatch();
  const cars = useSelector(selectFavorites);
  const filter = useSelector(selectFilter);
  const uniqueMakes = useUniquePropValues(cars, 'rentalCompany');

  const handleMakeChange = (rentalCompany) => {
    if (!filter || filter.rentalCompany !== null) {
      dispatch(setFilter({ rentalCompany }));
    } else if (filter.make === rentalCompany) {
      dispatch(setFilter({ ...filter, rentalCompany: '' }));
    } else {
      dispatch(setFilter({ ...filter, rentalCompany }));
    }
  };

  const showAllMakes =
    (window.innerWidth >= 768 && uniqueMakes.length < 2) || open;

  return (
    <RadioList>
      {uniqueMakes.map((rentalCompany, index) => (
        <li
          key={index}
          className={`${!showAllMakes && index > 0 ? 'hidden' : ''}`}
        >
          <input
            id={rentalCompany}
            type="radio"
            name="make"
            value={rentalCompany}
            checked={filter?.rentalCompany === rentalCompany}
            className="radio"
            onChange={() => handleMakeChange(rentalCompany)}
          />
          <label htmlFor={rentalCompany}>{rentalCompany}</label>
        </li>
      ))}
    </RadioList>
  );
};

RadioFilter.propTypes = {
  open: PropTypes.bool,
};

export default RadioFilter;
