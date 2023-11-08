import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ModalTitle = styled.div`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  margin-top: 14px;
  & span {
    color: var(--accent);
  }
`;

export const CarsLocateData = styled.div`
  font-size: 12px;
  line-height: 1.5;
  color: rgba(18, 20, 23, 0.5);
  margin-bottom: 14px;
  margin-top: 8px;
  & ul {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 4px;
  }
`;

export const RentLink = styled(Link)`
  color: #ffffff;
  padding: 12px 50px;
  background-color: var(--accent);
  display: inline-flex;
  width: 170px;
  border-radius: 12px;
  margin-top: auto;
`;
