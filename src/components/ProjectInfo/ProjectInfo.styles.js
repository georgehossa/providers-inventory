import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  display: block;
  width: 6.25rem;
  height: 5rem;
  margin-right: 1.5rem;
  overflow: hidden;
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.colorNeutral};
  img {
    object-fit: cover;
    max-width: 100%;
  }
`

export const InfoWrapper = styled.div`
  display: grid;
  grid-template: auto auto / 1fr 1fr;
  grid-template: "name city" "address address";
`

export const Name = styled.h1`
  grid-area: name;
  margin: 0;
  font-size: 1.5rem;
  font-weight: 500;
  color: ${props => props.theme.colorSecondary};
`

export const City = styled.span`
  grid-area: city;
  font-size: 1.5rem;
  &::before {
    display: inline-block;
    content: '·';
    margin: 0 .5rem;
  }
`

export const Address = styled.span`
  grid-area: address;
  font-size: 1rem;
`
