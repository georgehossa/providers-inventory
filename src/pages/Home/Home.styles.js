import styled from 'styled-components';

export const Layout = styled.main`
  display: grid;
  grid-template: auto auto / 1fr;
  grid-template-areas: "header" "content";
  padding-left: 70px;
  color: ${props => props.theme.mainColor};
  background-color: ${props => props.theme.colorNeutral};
  min-height: 100vh;
`;
