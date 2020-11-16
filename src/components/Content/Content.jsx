import React from 'react';
import ApartmentCard from '../ApartmentCard';
import PropTypes from 'prop-types';
//import { Test } from './Content.styles';

const Content = (props) => (
  <div className="ContentWrapper">
    <ApartmentCard/>
  </div>
);

Content.propTypes = {
  // bla: PropTypes.string,
};

Content.defaultProps = {
  // bla: 'test',
};

export default Content;
