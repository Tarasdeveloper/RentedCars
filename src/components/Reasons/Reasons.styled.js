import styled from 'styled-components';

export const ReasonWrap = styled.div`
  padding-bottom: 80px;
`;

export const ReasonTitle = styled.h2`
  text-align: center;
  font-size: 30px;
  margin-bottom: 45px;
`;

export const ReasonList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const ReasonItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 270px;
  height: 270px;
  box-shadow: 0px 3px 10px 5px rgba(79, 79, 111, 0.15);
  text-align: center;
  padding: 20px;
`;

export const Svg = styled.svg`
  width: 80px;
  height: 80px;
  fill: var(--accent);
  margin-bottom: 20px;
`;

export const ReasonName = styled.h3`
  margin-bottom: 10px;
`;
