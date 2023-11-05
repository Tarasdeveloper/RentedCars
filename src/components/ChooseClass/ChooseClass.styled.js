import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ChooseTitle = styled.h2`
  margin-bottom: 20px;
`;

export const ChooseContainer = styled.div`
  max-width: 1190px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 12px;
  padding: 20px;

  @media screen and (min-width: 768px) {
    margin-bottom: 120px;
  }
`;

export const ChooseList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-wrap: nowrap;
  }
`;

export const ChooseItem = styled.li`
  max-width: 175px;
`;

export const ChooseLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ClassTitle = styled.p`
  font-size: 17px;
  text-transform: uppercase;
  font-family: 'Montserrat';
  font-weight: 700;
`;

export const ClassSpan = styled.span`
  color: var(--accent);
  font-weight: 600;
`;
