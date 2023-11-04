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
  margin-bottom: 120px;
`;

export const ChooseList = styled.ul`
  display: flex;
  justify-content: space-between;
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
  font-weight: 600;
  font-family: 'Montserrat';
`;

export const ClassSpan = styled.span`
  color: var(--accent);
  font-weight: 600;
`;
