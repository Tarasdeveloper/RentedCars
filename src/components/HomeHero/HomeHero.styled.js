import styled from 'styled-components';
import ImageBg from '../../assets/images/carrera-road.jpg.webp';

export const HomeTitle = styled.h1`
  font-size: clamp(25px, 4vw, 40px);
  color: var(--accent);
  margin-bottom: 50px;
  font-weight: 700;
  text-align: center;
  padding-top: 50px;

  @media screen and (min-width: 768px) {
    color: var(--hover-accent);
  }
`;

export const HomeWrap = styled.div`
  background-image: url(${ImageBg});
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 70%;
  background-size: cover;
  padding: 0 15px;
  padding-bottom: 120px;
`;
