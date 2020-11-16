import React from 'react';
import FilterButon from '../FilterButton';
import PropTypes from 'prop-types';
import { Container } from './Filters.styles';

const Filters = (props) => (
  <Container>
    <FilterButon label='Estado'/>
    <FilterButon label='Precio'/>
    <FilterButon label='Metros'/>
    <FilterButon label='Habitaciones'/>
    <FilterButon label='Piso'/>
    <FilterButon label='Vista'/>
    <FilterButon label='Tipo de apto'/>
  </Container>
);

Filters.propTypes = {
  // bla: PropTypes.string,
};

Filters.defaultProps = {
  // bla: 'test',
};

export default Filters;
