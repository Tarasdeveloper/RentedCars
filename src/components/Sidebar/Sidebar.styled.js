import styled from 'styled-components';

export const Aside = styled.aside`
  padding: 30px 15px 0;
  & h2 {
    text-align: center;
    margin-bottom: 30px;
  }
`;

export const AsideWrap = styled.div`
  position: relative;
`;

export const AsideBtn = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 20px;
  line-height: 1;
  border-radius: 50%;
  width: 28px;
  height: 28px;
  border: 1px solid var(--accent);
  color: var(--accent);
`;
