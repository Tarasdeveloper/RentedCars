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
        <StyledLink to="/">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
        </StyledLink>
        <div>
          <StyledLink to="/catalog">Catalog</StyledLink>
          <StyledLink to="/favorites">Favorites</StyledLink>
        </div>
      </Navigation>
    </HeaderContainer>
  );
};
