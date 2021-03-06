import styled from 'styled-components';

const xPadding = '1rem';
const kerning = '.05rem';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 120px;
  background-color: white;
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
  &:not(:first-child) {
    margin-left: .5rem;
  }
`;

export const ApartmentStatus = styled.div`
  padding: .5rem ${xPadding};
  background-color: ${props => props.status === 'Disponible' ? props.theme.statusAvailable : props.status === 'Opcionado' ? props.theme.statusOptioned : props.theme.statusSold};
  font-size: .8rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: ${kerning};
`

export const ApartmentId = styled.div`
  padding: .5rem ${xPadding} 0;
  font-size: 1.2rem;
`
export const ApartmentArea = styled.div`
  padding: 0 ${xPadding};
  font-size: .8rem;
  font-weight: 200;
`
export const ApartmentType = styled.div`
  display: flex;
  line-height: 1;
  justify-content: center;
  align-items: center;
  margin: .5rem ${xPadding} 1rem;
  padding: .1rem 1rem;
  border-radius: 2rem;
  background-color: ${props => props.theme.colorNeutral};
  font-size: .8rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: ${kerning};
`
