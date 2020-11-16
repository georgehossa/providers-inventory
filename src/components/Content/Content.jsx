import React from 'react';
import FloorCards from '../FloorCards';
import Filters from '../Filters';
import PropTypes from 'prop-types';
import { Container, ContentWrapper } from './Content.styles';

const Content = (props) => (
  <Container>
    <ContentWrapper>
      <Filters/>
      <FloorCards floor={3}/>
      <FloorCards floor={2}/>
      <FloorCards floor={1}/>
    </ContentWrapper>
  </Container>
);

Content.propTypes = {
  props: PropTypes.any,
};

export default Content;
