import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  padding: 8px 16px;

  transition:
    color 0.3s,
    text-shadow 0.3s;

  &:hover,
  &:focus {
    color: var(--accent);
  }
`;

// export const Svg = styled.svg`
//   height: 40px;
//   width: 40px;
//   fill: var(--accent);
// `;

export const IconWrapper = styled.svg`
  width: ${(props) => props.size || '40px'};
  height: ${(props) => props.size || '40px'};
  fill: ${(props) => props.color || '#000000'};
  display: inline-block;
  transition: fill var(--transit);

  &:hover,
  &:focus {
    fill: var(--accent);
  }
`;
