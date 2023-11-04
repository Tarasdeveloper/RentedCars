import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
  Icon,
  LinksWrapper,
} from './Header.styled';
import sprite from '../../assets/sprite.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/">
          <IconWrapper>
            <Icon>
              <use href={`${sprite}#icon-logo`} />
            </Icon>
            RentedCars
          </IconWrapper>
        </StyledLink>
        <LinksWrapper>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/catalog">Catalog</StyledLink>
          <StyledLink to="/favorites">Favorites</StyledLink>
        </LinksWrapper>
      </Navigation>
    </HeaderContainer>
  );
};
