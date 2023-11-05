import styled from 'styled-components';
import ImageBg from '../../assets/images/carrera-road.jpg.webp';

export const HomeWrap = styled.div`
  background-image: url(${ImageBg});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 70%;
  background-size: cover;
  height: 500px;
`;

export const Container = styled.div`
  max-width: 1190px;
  margin: 0 auto;
  padding: 50px 15px 0;
`;

export const HomeTitle = styled.h1`
  font-size: 30px;
  margin-left: 20px;
  margin-bottom: 50px;
  font-weight: 700;
`;
