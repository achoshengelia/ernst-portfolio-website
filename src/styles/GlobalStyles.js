import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before  {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  *::selection{
    background: ${props => props.theme.colors.primary.main};
    color: ${props => props.theme.colors.text.light};
  }

  html,
  body,
  #gatsby-focus-wrapper {
    position: ${({ overflowHidden }) => (overflowHidden ? 'relative' : null)};;
    min-height: 100vh;
    overflow: ${({ overflowHidden }) => (overflowHidden ? 'hidden' : null)};
    touch-action: ${({ overflowHidden }) => (overflowHidden ? 'none' : null)};
    -ms-touch-action: ${({ overflowHidden }) =>
      overflowHidden ? 'none' : null};
  }

  html {
    font-size: 62.5%;
    scroll-behavior: ${({ showLanding }) => (showLanding ? null : 'smooth')};
  }

  body {
    box-sizing: border-box;
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${({ theme }) => theme.colors.background.lighter};   
    color: ${props => props.theme.colors.text.main};
    cursor: default;
    text-rendering: optimizeSpeed;
  }

  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  li {
    list-style: none;
  }

  button {
    border: none;
  }

  input,
  textarea { 
    &:focus{
      outline: none;
    } 
  }

  img,
  picture {
  max-width: 100%;
  display: block;
}
`;

export default GlobalStyles;
