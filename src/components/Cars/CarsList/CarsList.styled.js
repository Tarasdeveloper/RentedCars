import styled from 'styled-components';

export const LoadBtn = styled.button`
  color: var(--accent);
  margin: 0 auto;
  margin-bottom: 50px;
  display: block;
  border-color: transparent;
  text-decoration-line: underline;
  transition: all 0.2s ease-in-out;

  &:hover {
    text-decoration: none;
    color: var(--hover-accent);
  }
`;

export const CarsArr = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 50px;
  margin-bottom: 100px;
  padding-left: 15px;
  padding-right: 15px;
`;
