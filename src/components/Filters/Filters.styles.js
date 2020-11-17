import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 1rem auto;
  padding: 1rem 0;
  width: ${props => props.theme.maxWidth_internal};
  overflow: auto;
  &::-webkit-scrollbar {
    height: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colorBrand};
  }
`;
