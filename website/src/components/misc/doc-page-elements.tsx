import styled, { createGlobalStyle } from "styled-components";

export const MostProminentSection = styled.div`

`;

export const Aside = styled.aside`
  position: relative;
  overflow: visible;
  z-index: 2;
  margin-left: 0;
  align-self: start;
  transition: transform 250ms;
  background-color: white;
  grid-row: 1;
  grid-column: 3;

  padding: 25px 0 0;
  position: sticky;
  top: 0;

  &.show {
    transform: none;
  }

  @media only screen and (max-width: 450px) {
    width: 100%;
    grid-column: 1;
    transform: translateX(100%);
  }

  @media only screen and (max-width: 1320px) {
    position: fixed;
    overflow-y: auto;
    top: 60px;
    bottom: 0;
    right: 0;
    transform: translateX(100%);
  }
`;

export const Navigation = styled.nav`
  max-width: 250px;
  z-index: 3;
  overflow: visible;

  padding: 25px 0 0;
  align-self: start;
  position: sticky;
  top: 0;

  transition: margin-left 250ms;
  background-color: white;
  grid-row: 1;
  grid-column: 1;

  &.show {
    margin-left: 0;
  }

  @media only screen and (max-width: 450px) {
    max-width: none;
    width: 100%;
  }

  @media only screen and (max-width: 1070px) {
    margin-left: -105%;
    position: fixed;
    overflow-y: auto;
    top: 60px;
    bottom: 0;
    left: 0;
  }
`;

export const BodyStyle = createGlobalStyle<{ disableScrolling: boolean }>`
  body {
    overflow-y: ${({ disableScrolling }) =>
      disableScrolling ? "hidden" : "initial"};

    @media only screen and (min-width: 600px) {
      overflow-y: initial;
    }
  }
`;
