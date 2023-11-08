import { useSelector } from 'react-redux';

import FavoritesList from '../Cars/FavoritesList/FavoritesList';

import Title from '../Title/Title';
import { useToggle } from '../../shared/hooks/useToggle';

import { selectFavorites } from '../../redux/cars/carsSelectors';
import RadioFilter from '../Filter/RadioFilter';
import Filter from '../Filter/Filter';
import { Aside, AsideBtn, AsideWrap } from './Sidebar.styled';

const Sidebar = () => {
  const { isOpen, toggle } = useToggle(false);

  const favoriteCars = useSelector(selectFavorites);

  return (
    <Aside>
      <AsideWrap>
        <AsideBtn type="button" onClick={toggle}>
          &#8693;
        </AsideBtn>
        <div>{favoriteCars.length > 0 && <Title>Favorites filter</Title>}</div>
        <RadioFilter open={isOpen} />
        <div>
          <Filter cars={favoriteCars} />
        </div>
      </AsideWrap>
      <FavoritesList />
    </Aside>
  );
};
export default Sidebar;
