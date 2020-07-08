import React from 'react';
import { Container, Image } from './styles';

interface CardProps {
  id: number,
  name: string
}

const Card = (props: CardProps) => {
  return (
    <Container>
      <Image src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`} alt={props.name} />
      <h3>{props.name}</h3>
    </Container>
  );
}

export default Card;