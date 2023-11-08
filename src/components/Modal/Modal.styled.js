import styled from 'styled-components';

export const ModalCloseBtn = styled.button`
  /* border-radius: 50%;
  width: 20px;
  height: 20px; */
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(18, 20, 23, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const ModalWrap = styled.div`
  position: fixed;
  right: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  width: 545px;
  height: 760px;
  z-index: 10;
  border-radius: 24px;
  padding: 40px;

  & img {
    border-radius: 14px;
    background: #f3f3f2;
  }
`;
