import styled from 'styled-components';

export const Container = styled.section`
  grid-area: content;
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  border-radius: ${props => props.theme.borderRadius};
  background-color: white;
`;

export const ContentWrapper = styled.section`
  overflow-y: auto;
  height: 80vh;
  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colorBrand};
  }
`
