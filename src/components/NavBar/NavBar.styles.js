import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  align-self: end;
  justify-self: end;
`;

export const Link = styled.a`
  align-self: baseline;
  padding: 1.5rem 0;
  margin-bottom: -1rem;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  color: ${props => props.theme.colorDefault};
  border-bottom: 2px solid transparent;
  &:hover, &:active, &:focus {
    color: ${props => props.theme.colorDefault_active};
    border-bottom: 2px solid ${props => props.theme.colorDefault_active};
  }
  &:not(:first-child) {
    margin-left: 1rem;
  }
`
