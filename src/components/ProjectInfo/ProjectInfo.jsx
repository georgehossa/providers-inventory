import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  ImageWrapper,
  InfoWrapper,
  Name,
  City,
  Address } from './ProjectInfo.styles';


const ProjectInfo = ({project}) => (
  <Container>
    <ImageWrapper>
      <img src={project.logo.Logo} alt={project.name}/>
    </ImageWrapper>
    <InfoWrapper>
      <Name>{project.name}</Name>
      <City>{project.city}</City>
      <Address>{project.address}</Address>
    </InfoWrapper>
  </Container>
);

ProjectInfo.propTypes = {
  project: PropTypes.any,
};

export default ProjectInfo;
