import React from 'react';
import PropTypes from 'prop-types';
import { CardWrapper, ApartmentStatus, ApartmentId, ApartmentArea, ApartmentType } from './ApartmentCard.styles';

const ApartmentCard = ({status, id, area, type}) => (
  <CardWrapper>
    <ApartmentStatus status={status}>
      {status}
    </ApartmentStatus>
    <ApartmentId>
      {id}
    </ApartmentId>
    <ApartmentArea>
      {area} m<sup>2</sup>
    </ApartmentArea>
    <ApartmentType>
      Tipo {type}
    </ApartmentType>
  </CardWrapper>
);

ApartmentCard.propTypes = {
  status: PropTypes.string,
  id: PropTypes.number,
  area: PropTypes.number,
  type: PropTypes.string
};

ApartmentCard.defaultProps = {
  status: 'Disponible',
  id: 1601,
  area: 200,
  type: 'A'
};

export default ApartmentCard;
