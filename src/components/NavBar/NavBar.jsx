import React from 'react';
import PropTypes from 'prop-types';
import { Container, Link } from './NavBar.styles';

const NavBar = ({links}) => (
  <Container className="NavBarWrapper">
        <Link href='/'>Reportes</Link>
        <Link href='/'>Lista de precios</Link>
  </Container>
);

NavBar.propTypes = {
  links: PropTypes.any,
};

export default NavBar;
