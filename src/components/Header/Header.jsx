import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
  // Svg,
} from './Header.styled';
import sprite from '../../assets/sprite.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <IconWrapper>
          <use href={`${sprite}#icon-logo`} />
        </IconWrapper>
        <StyledLink to="/catalog">Catalog</StyledLink>
        <StyledLink to="/favorites">Favorites</StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
