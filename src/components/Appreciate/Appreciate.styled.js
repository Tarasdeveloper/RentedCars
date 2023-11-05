import styled from 'styled-components';

export const AppreciateWrap = styled.div`
  text-align: center;
  padding-top: 40px;
`;

export const AppreciateTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 30px;
`;

export const AppreciateSuptitle = styled.p`
  color: #63676a;
  margin-bottom: 50px;
`;
export const AppreciateList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
`;
export const AppreciateItem = styled.li`
  max-width: 365px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const AppreciateSpan = styled.span`
  width: 160px;
  height: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid var(--accent);
  border-radius: 50%;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 15px;

  & span {
    font-size: 14px;
  }
`;
export const AppreciateText = styled.p`
  max-width: 270px;
  font-weight: 700;
  font-size: 16px;
`;
