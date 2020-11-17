import React from 'react';
import PropTypes from 'prop-types';
import { Container, Wrapper, Select, Phase, Stage, Total } from './ProjectResume.styles';

const ProjectResume = ({phase, stage, totalApartments }) => (
  <Container>
    <Wrapper>
      <Select>
        <option value=''>Selecciona torre</option>
        <option value='torre-1'>Torre 1</option>
        <option value='torre-2'>Torre 2</option>
      </Select>
      <Phase>
        <p>Fase · <span>{phase}</span></p>
      </Phase>
      <Stage>
        <p>Etapa · <span>{stage}</span></p>
      </Stage>
      <Total>
        <p>Aptos · <span>{totalApartments}</span></p>
      </Total>
    </Wrapper>
  </Container>
);

ProjectResume.propTypes = {
  phase: PropTypes.string,
  stage: PropTypes.number,
  totalApartments: PropTypes.number,
};

ProjectResume.defaultProps = {
  phase: 'Preventa',
  stage: 1,
  totalApartments: 45,
};

export default ProjectResume;
