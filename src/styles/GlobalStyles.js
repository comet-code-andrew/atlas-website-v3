import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      
      html, body {
        max-width: 100vw;
        overflow-x: hidden;
      }

      body {
        font-size: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        text-shadow: rgba(0,0,0,.01) 0 0 1px;
    }

    a {
        color: inherit;
        text-decoration: none;
    }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 75rem;
  margin-right: auto;
  margin-left: auto;
  padding-right: 3.125rem;
  padding-left: 3.125rem;

  @media screen and (max-width: 62rem) {
    padding-right: 1.875rem;
    padding-left: 1.875rem;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  white-space: nowrap;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
  }

  @media screen and (max-width: 60rem) {
    width: 100%;
  }
`;

export default GlobalStyles;
