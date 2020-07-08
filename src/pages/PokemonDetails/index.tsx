import React, { useEffect } from 'react';
import pokeapi from '../../services/pokeapi';
import { useParams } from 'react-router-dom';

const PokemonDetails = () => {
  const { id } = useParams();
  useEffect(() => {
    pokeapi.get(`/${id}`).then((response) => console.log(response));
  }, [id]);
  return (
    <div>
      <h1>Ola</h1>
    </div>
  );
};

export default PokemonDetails;
