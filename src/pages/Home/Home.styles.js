import styled from 'styled-components';

export const Layout = styled.main`
  display: grid;
  grid-template: auto auto / auto 1fr;
  grid-template-areas: "nav header" "nav content";
  color: ${props => props.theme.mainColor};
`;
