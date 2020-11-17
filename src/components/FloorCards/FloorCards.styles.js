import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  width: ${props => props.theme.maxWidth_internal};
  padding: 1rem 0;
  margin: 1rem auto;
  background-color: ${props => props.theme.colorNeutral};
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
`;

export const Floor = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
`
export const FloorNumber = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 600;
`

export const Apartments = styled.section`
  display: flex;
  width: 100vw;
  overflow-x: auto;
  &::-webkit-scrollbar {
    height: 2px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colorBrand};
  }
`
