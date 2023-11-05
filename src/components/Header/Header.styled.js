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
  margin-right: 20px;
  width: 360px;
  justify-content: space-between;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Montserrat';
  font-weight: 700;
  font-style: italic;
  font-size: 25px;
  margin-left: 20px;
  margin-right: 20px;
  transition:
    fill var(--transit),
    color var(--transit);
  color: var(--accent);
  & svg {
    fill: var(--hover-accent);
  }

  &:hover,
  &:focus {
    & StyledLink {
      opacity: 0.1;
    }
  }
`;

export const Icon = styled.svg`
  width: ${(props) => props.size || '50px'};
  height: ${(props) => props.size || '50px'};
  fill: ${(props) => props.color || 'var(--title-color)'};
  transition: fill var(--transit);
`;
