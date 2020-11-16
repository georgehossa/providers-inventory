import React from 'react';
import FloorCards from '../FloorCards';
import PropTypes from 'prop-types';
import { Container } from './Content.styles';

const Content = (props) => (
  <Container>
    <FloorCards floor={3}/>
    <FloorCards floor={2}/>
    <FloorCards floor={1}/>
  </Container>
);

Content.propTypes = {
  props: PropTypes.any,
};

export default Content;
