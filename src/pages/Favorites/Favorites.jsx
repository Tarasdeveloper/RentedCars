import Sidebar from '../../components/Sidebar/Sidebar';
import { Container, Block } from './Favorites.styled';

const FavoritesPage = () => {
  return (
    <Container>
      <Block>
        <Sidebar />
      </Block>
    </Container>
  );
};

export default FavoritesPage;
