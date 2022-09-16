import styled from 'styled-components';

export const Button = styled.button`
  all: unset;
  padding: ${({ theme }) => theme.space};
  margin: ${({ theme }) => theme.space};
  width: ${({ theme }) => theme.buttonWidth};
  height: ${({ theme }) => theme.buttonHeight};
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.buttonColor};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;
