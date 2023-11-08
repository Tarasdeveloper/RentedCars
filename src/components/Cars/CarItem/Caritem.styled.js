import styled from 'styled-components';

export const CarListItem = styled.li`
  width: 275px;
  position: relative;

  & img {
    height: 270px;
    object-fit: cover;
    border-radius: 14px;
  }
`;

export const IconHeart = styled.svg`
  width: 18px;
  height: 16px;
  stroke: #ffffff;
`;

export const HeartButton = styled.button`
  width: 25px;
  height: 22px;
  border: none;
  position: absolute;
  z-index: 10;
  top: 15px;
  right: 14px;
`;

export const ItemTitleWrap = styled.span`
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const ItemTitle = styled.span`
  & span {
    color: var(--accent);
  }
`;

export const MoreButton = styled.button`
  color: #ffffff;
  border-color: transparent;
  font-weight: 600;
  background-color: var(--accent);
  border-radius: 12px;
  padding: 12px;
  width: 100%;
  max-width: 274px;
  margin-top: 28px;
`;