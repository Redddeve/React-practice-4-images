import styled from 'styled-components';

export const StyledHeader = styled.header`
  top: 0px;
  left: 0px;
  position: fixed;
  width: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  background-color: #3f51b5;
  box-shadow: 0px 4px 10px 0px gray;
`;

export const StyledForm = styled.form`
  display: flex;
  width: 100%;
  max-width: 600px;
`;

export const StyledInput = styled.input`
  display: inline-block;
  width: 100%;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
`;

export const StyledButton = styled.button`
  background-color: white;
  display: inline-block;
  width: 42px;
  height: 42px;
  border: none;
  cursor: pointer;
  outline: none;
  &:hover img {
    opacity: 1;
  }
`;

export const StyledImg = styled.img`
  width: 26px;
  height: 26px;
  opacity: 0.6;
  transition: opacity 250ms ease;
`;
