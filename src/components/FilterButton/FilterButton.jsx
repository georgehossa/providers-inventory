import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './FilterButton.styles';

const FilterButton = ({label, onClick}) => (
  <Button OnClick={onClick}>
    {label}
  </Button>
);

FilterButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func
};

export default FilterButton;
