import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 10px;
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  padding: 8px 16px;

  transition:
    color 0.3s,
    text-shadow 0.3s;

  &:hover,
  &:focus {
    color: #00baff;
  }
`;

export const Svg = styled.svg`
  height: 40px;
  width: 40px;
  fill: #00baff;
`;

export const IconWrapper = styled.svg`
  width: ${(props) => props.size || '40px'};
  height: ${(props) => props.size || '40px'};
  fill: ${(props) => props.color || '#000000'};
  display: inline-block;
  margin-right: 5px;
`;
