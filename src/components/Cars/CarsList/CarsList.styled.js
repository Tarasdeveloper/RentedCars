import styled from 'styled-components';

export const LoadBtn = styled.button`
  color: var(--accent);
  margin: 0 auto;
  margin-bottom: 50px;
  display: block;
  border-color: transparent;
  text-decoration-line: underline;
  /* border-bottom: 1px solid var(--accent); */
  transition: all 0.3s ease-in-out;

  &:hover {
    text-decoration: none;
    color: var(--hover-accent);
  }
`;

export const CarsArr = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 100px;
`;
