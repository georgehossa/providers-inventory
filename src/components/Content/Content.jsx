import React from 'react';
import FloorCards from '../FloorCards';
import PropTypes from 'prop-types';
import { Container } from './Content.styles';

const Content = (props) => (
  <Container>
    <FloorCards/>
    <FloorCards/>
    <FloorCards/>
    <FloorCards/>
    <FloorCards/>
    <FloorCards/>
    <FloorCards/>
    <FloorCards/>
    <FloorCards/>
    <FloorCards/>
    <FloorCards/>
    <FloorCards/>
  </Container>
);

Content.propTypes = {
  props: PropTypes.any,
};

export default Content;
