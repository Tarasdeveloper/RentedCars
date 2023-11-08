import styled from 'styled-components';

export const AppreciateWrap = styled.div`
  text-align: center;
  padding-top: 40px;
  padding-bottom: 70px;
  max-width: 1190px;
  margin: 0 auto;
  padding: 0 15px 70px;
`;

export const AppreciateTitle = styled.h2`
  font-size: clamp(20px, 4vw, 30px);
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
  width: clamp(120px, 13vw, 160px);
  height: clamp(120px, 13vw, 160px);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid var(--accent);
  border-radius: 50%;
  font-size: clamp(25px, 3vw, 40px);
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
