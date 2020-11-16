import styled from 'styled-components';

export const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 140px;
  padding: .5rem 1rem;
  background-color: transparent;
  border: 2px solid ${props => props.theme.colorNeutral};
  border-radius: 4rem;
  font-weight: 300;
  cursor: pointer;
  &:not(:first-child){
    margin-left: 1rem;
  }
`;
