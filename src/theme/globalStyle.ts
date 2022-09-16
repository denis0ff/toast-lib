import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

type ThemeParams = { theme: typeof theme };

export const GlobalStyle = createGlobalStyle<ThemeParams>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.font};
    color: ${({ theme }) => theme.colors.black};
    font-weight: ${({ theme }) => theme.fontWeight[0]};
  }

  ul {
    list-style: none;
  }
`;
