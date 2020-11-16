import styled from 'styled-components';

export const Container = styled.section`
  grid-area: content;
  width: 95vw;
  margin: 0 auto;
  border-radius: ${props => props.theme.borderRadius};
  background-color: white;
`;

export const ContentWrapper = styled.section`
  overflow-y: auto;
`
