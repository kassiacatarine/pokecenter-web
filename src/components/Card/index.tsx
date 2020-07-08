import React, { useEffect, useState } from 'react';
import { Container, Image, Title } from './styles';
import { capitalize } from '../../utils/capitalize';
import pokeapi from '../../services/pokeapi';
import IPokemonSpeciesRequest from '../../services/interfaces/IPokemonSpeciesRequest';

interface CardProps {
  id: number;
  name: string;
}

const Card = (props: CardProps) => {
  const [pokemonSpecies, setPokemonSpecies] = useState<{
    species: {
      color: string;
    };
    loading: boolean;
  }>({ species: { color: '' }, loading: true });
  useEffect(() => {
    pokeapi
      .get<IPokemonSpeciesRequest>(`/pokemon-species/${props.id}`)
      .then((response) => {
        console.log();
        setPokemonSpecies({
          species: {
            color: response.data.color.name,
          },
          loading: false,
        });
      });
  }, [props.id, props.name]);
  return (
    <>
      {!pokemonSpecies.loading && (
        <Container
          to={`pokemon/${props.id}`}
          color={pokemonSpecies.species.color}
        >
          <Image
            src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.png`}
            alt={props.name}
          />
          <Title>{capitalize(props.name)}</Title>
        </Container>
      )}
    </>
  );
};

export default Card;
