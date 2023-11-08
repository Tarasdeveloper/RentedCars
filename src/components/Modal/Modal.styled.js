import styled from 'styled-components';

export const ModalCloseBtn = styled.button``;

export const ModalBackdrop = styled.div`
  /* position: relative; */
  width: 100vw;
  height: 100vh;
  background-color: 'rgba(0, 0, 0, 0.5)';
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9;
`;

export const ModalWrap = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  width: 545px;
  height: 760px;
  z-index: 10;
`;
