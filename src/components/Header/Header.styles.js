import styled from 'styled-components';

export const Container = styled.header`
  display: block;
  margin-bottom: 1.5rem;
  background-color: white;
  border-bottom: 2px solid ${props => props.theme.colorNeutral};
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template: auto / 70px 1fr .5fr;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`
const size = '2.5rem';

export const BackButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${size};
  height: ${size};
  border-radius: 50%;
  box-shadow: 0 0 15px -3px ${props => props.theme.colorDefault};
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-chevron-left' width='24' height='24' stroke-width='1.5' stroke='%23012d26' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M0 0h24v24H0z' stroke='none'/%3E%3Cpath d='M15 6l-6 6 6 6'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`

