import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  max-width: 1190px;
  margin: 0 auto;
`;

export const Navigation = styled.nav`
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  padding: 8px;
  font-weight: 600;
  font-size: 18px;

  transition:
    color 0.3s,
    text-shadow 0.3s;

  &:hover,
  &:focus {
    color: var(--hover-accent);
  }
`;
export const LinksWrapper = styled.div`
  display: flex;
  gap: 50px;
  margin-right: 20px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Montserrat';
  font-weight: 700;
  font-style: italic;
  font-size: 25px;
  transition:
    fill var(--transit),
    color var(--transit);

  &:hover,
  &:focus {
    & StyledLink {
      color: var(--hover-accent);
    }
    & svg {
      fill: var(--hover-accent);
    }
  }
`;

export const Icon = styled.svg`
  width: ${(props) => props.size || '50px'};
  height: ${(props) => props.size || '50px'};
  fill: ${(props) => props.color || 'var(--title-color)'};
  transition: fill var(--transit);
`;
