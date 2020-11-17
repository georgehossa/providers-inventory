import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.colorNeutral};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 1.5rem auto;
  font-size: 1rem;
  & *:not(:first-child) {
    margin-left: 1rem;
  }
`

export const Select = styled.select`
  padding: .5rem 4rem .5rem 2rem;
  border: 2px solid ${props => props.theme.colorSecondary};
  border-radius: 45rem;
  color: ${props => props.theme.colorSecondary};
  -webkit-appearance: none;
  font-family: inherit;
  font-size: inherit;
  background-repeat: no-repeat;
  background-position: 90% 50%;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-chevron-down' width='24' height='24' viewBox='0 0 24 24' stroke-width='2.5' stroke='%23012d26' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpolyline points='6 9 12 15 18 9' /%3E%3C/svg%3E");
  cursor: pointer;
  outline: none;
`

export const Phase = styled.div`
  span {
    color: ${props => props.theme.colorSecondary};
    font-weight: 600;
  }
`

export const Stage = styled(Phase)``
export const Total = styled(Phase)``
