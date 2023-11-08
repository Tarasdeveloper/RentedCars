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
      <div>
        <button type="button" onClick={toggle}>
          svg
        </button>
        <div>{favoriteCars.length > 0 && <Title>Company</Title>}</div>
        <RadioFilter open={isOpen} />
        <div>
          <Filter cars={favoriteCars} />
        </div>
      </div>
      <FavoritesList />
    </aside>
  );
};
export default Sidebar;
