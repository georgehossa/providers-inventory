import React from 'react';
import ProjectInfo from '../ProjectInfo';
import NavBar from '../NavBar';
import PropTypes from 'prop-types';
import { Container, Wrapper, BackButton } from './Header.styles';
import Logo from '../../assets/terrazino-cumbres.png';

const Header = ({project}) => (
  <Container>
    <Wrapper>
      <BackButton />
      <ProjectInfo project={project}/>
      <NavBar/>
    </Wrapper>
  </Container>
);

Header.propTypes = {
  project: PropTypes.any,
};

Header.defaultProps = {
  project: {
    name: 'Terrazzino cumbres',
    city: 'Envigado',
    address: 'Carrera 43A No. 49B Sur - 82',
    logo: {Logo},
  },
};

export default Header;
