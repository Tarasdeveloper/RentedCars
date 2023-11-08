import styled from 'styled-components';

export const RentalTitle = styled.p`
  font-weight: 500;
  margin-bottom: 8px;
`;

export const CondItem = styled.li`
  display: inline-flex;
  color: #363535;
  font-size: 12px;
  letter-spacing: -0.24px;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 35px;
  background-color: #f9f9f9;
  & span {
    color: var(--accent);
    font-weight: 600;
  }
`;

export const RentalList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
