import React from 'react';
import { Container, Image } from './styles';

const Card = () => {
  return (
    <Container>
      <Image src='https://pokeres.bastionbot.org/images/pokemon/1.png' alt='props.name' />
    </Container>
  );
}

export default Card;