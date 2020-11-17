import styled from 'styled-components';

export const Container = styled.aside`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 70px;
  height: 100vh;
  padding: 1.5rem .5rem;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colorBrand};
`;

export const MenuTrigger = styled.div`
  display: flex;
  justify-content: center;

  flex-direction: column;
  color: ${props => props.theme.colorSecondary};
  font-size: .6rem;
  text-transform: uppercase;
  letter-spacing: .2rem;
  cursor: pointer;
  font-weight: 700;
  svg {
    display: block;
    width: 100%;
  }
`
const size = '2rem';
export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${size};
  height: ${size};
  border-radius: 50%;
  background-color: white;
  font-weight: 700;
  cursor: pointer;
`
