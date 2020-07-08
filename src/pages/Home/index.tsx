import React from 'react';
import { Container } from './styles';
import Cart from '../../components/Cart';
import ListPokemon from '../../components/ListPokemon';

const Home = () => {
  return (
    <Container>
      <Cart />
      <ListPokemon />
      <Cart />
    </Container>
  );
}

export default Home;