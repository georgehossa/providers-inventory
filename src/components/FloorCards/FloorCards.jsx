import React from 'react';
import ApartmentCard from '../ApartmentCard'
import PropTypes from 'prop-types';
import { Container, Floor, FloorNumber, Apartments } from './FloorCards.styles';

const FloorCards = ({floor}) => (
  <Container>
    <Floor>
      Piso
      <FloorNumber>
        {floor}
      </FloorNumber>
    </Floor>
    <Apartments>
      <ApartmentCard />
      <ApartmentCard status='Vendido' />
      <ApartmentCard status='Opcionado' />
      <ApartmentCard />
      <ApartmentCard status='Vendido' />
      <ApartmentCard status='Opcionado' />
      <ApartmentCard />
      <ApartmentCard status='Vendido' />
      <ApartmentCard status='Opcionado' />
      <ApartmentCard />
      <ApartmentCard status='Vendido' />
      <ApartmentCard status='Opcionado' />
      <ApartmentCard />
      <ApartmentCard status='Vendido' />
      <ApartmentCard status='Opcionado' />
    </Apartments>
  </Container>
);

FloorCards.propTypes = {
  floor: PropTypes.number,
};

FloorCards.defaultProps = {
  floor: 1,
};

export default FloorCards;
