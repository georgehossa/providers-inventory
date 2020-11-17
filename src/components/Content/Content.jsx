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
      <FloorCards floor={18}/>
      <FloorCards floor={17}/>
      <FloorCards floor={16}/>
      <FloorCards floor={15}/>
      <FloorCards floor={14}/>
      <FloorCards floor={13}/>
      <FloorCards floor={12}/>
      <FloorCards floor={11}/>
      <FloorCards floor={10}/>
      <FloorCards floor={9}/>
      <FloorCards floor={8}/>
      <FloorCards floor={7}/>
      <FloorCards floor={6}/>
      <FloorCards floor={5}/>
      <FloorCards floor={4}/>
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
