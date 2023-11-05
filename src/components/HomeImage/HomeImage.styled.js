import styled from 'styled-components';
import VideoImageBg from '../../assets/images/video_cars.jpg';

export const BackgroundImg = styled.div`
  height: 500px;
  width: 100%;
  background-image: url(${VideoImageBg});
  background-position-x: center;
  background-position-y: 77%;
  background-size: cover;
  height: 500px;
  position: relative;
`;
export const PlayBtn = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border-color: transparent;
`;
export const PlaySvg = styled.svg`
  width: 120px;
  height: 120px;
  fill: #ffffff;
`;

export const CloseBtn = styled.button`
  border-color: transparent;
  position: absolute;
  right: 30px;
  top: 30px;
  background-color: #ffffff;
  border-radius: 5px;
`;

export const Backdrop = styled.div`
  /* position: 'fixed';
  top: 0;
  left: 0;
  width: '100vw';
  height: '100vh';
  background-color: 'rgba(0, 0, 0, 0.5)';
  display: 'flex';
  justify-content: 'center';
  align-items: 'center'; */
`;
