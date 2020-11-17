import React from 'react';
import FloorCards from '../FloorCards';
import Filters from '../Filters';
import ProjectResume from '../ProjectResume';
import PropTypes from 'prop-types';
import { Container, ContentWrapper } from './Content.styles';

const Content = (props) => (
  <Container>
    <ProjectResume/>
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
