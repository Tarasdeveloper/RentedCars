import { useSelector } from 'react-redux';

import FavoritesList from '../Cars/FavoritesList/FavoritesList';

import Title from '../Title/Title';
import { useToggle } from '../../shared/hooks/useToggle';

import { selectFavorites } from '../../redux/cars/carsSelectors';
import RadioFilter from '../Filter/RadioFilter';
import Filter from '../Filter/Filter';

const Sidebar = () => {
  const { isOpen, toggle } = useToggle(false);

  const favoriteCars = useSelector(selectFavorites);

  return (
    <aside>
      <div
        className={`${
          isOpen ? 'sidebar-open' : 'sidebar-close'
        } sidebar relative`}
      >
        <button
          // iconURL="#icon-arrow"
          type="button"
          // svgClass={`${!isOpen && 'ease-in-out'} transition`}
          onClick={toggle}
        ></button>
        <div>
          {favoriteCars.length > 0 && (
            <Title
              className={`gradient ${!isOpen && 'hidden'} ${
                isOpen && 'scale-[1]'
              }`}
            >
              Company
            </Title>
          )}
        </div>
        <RadioFilter open={isOpen} />
        <div className={` ${!isOpen ? 'hidden' : ''}`}>
          <Filter cars={favoriteCars} />
        </div>
      </div>
      <FavoritesList />
    </aside>
  );
};
export default Sidebar;