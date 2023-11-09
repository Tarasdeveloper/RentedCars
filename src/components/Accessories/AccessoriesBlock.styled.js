import styled from 'styled-components';

export const AccessesTitle = styled.p`
  color: #121417;
  font-size: 14px;
  font-weight: 500;
  margin-top: 24px;
  margin-bottom: 8px;
`;

export const AccessesBlock = styled.div`
  font-size: 12px;
  color: rgba(18, 20, 23, 0.5);
`;

export const AccessItemList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;

  & li {
    display: flex;
  }
  & span {
    margin-left: 4px;
  }
`;
