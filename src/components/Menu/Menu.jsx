import React from 'react';
import PropTypes from 'prop-types';
import { Container, MenuTrigger, Avatar } from './Menu.styles';

const Menu = ({forwardedRef}) => {
  return (
    <Container ref={forwardedRef}>
      <MenuTrigger>
        <span>Menu</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" strokeWidth="1.5" stroke="#012d26" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h32v32H0z" fill="none"/>
          <line x1="0" y1="6" x2="20" y2="6" />
          <line x1="0" y1="12" x2="15" y2="12" />
          <line x1="0" y1="18" x2="10" y2="18" />
          <line x1="0" y1="24" x2="8" y2="24" />
        </svg>
      </MenuTrigger>
      <Avatar>
        JH
      </Avatar>
    </Container>
  );

}

Menu.propTypes = {
  // bla: PropTypes.string,
};

Menu.defaultProps = {
  // bla: 'test',
};

export default Menu;
