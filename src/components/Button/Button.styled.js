import styled from 'styled-components';

export const StyledButton = styled.button`
  min-width: 200px;
  margin: 20px auto;
  padding: 12px 24px;
  border-radius: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all 200ms ease;
  &:hover {
    background-color: teal;
    color: white;
  }
`;
