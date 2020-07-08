import React, { useState, useEffect, useCallback } from 'react';
import Card from '../Card';
import { Container, ContainerWrapper } from './styles';
import IPagination from '../../utils/IPagination';

import pokeapi from '../../services/pokeapi';
import IListPokemonRequest from '../../services/interfaces/IListPokemonRequest';
import IPokemon from './IPokemon';
import Pagination from '../Pagination';

const ListPokemon = () => {
  const [pagination, setPagination] = useState<IPagination>({
    limit: 30,
    offset: 0,
  });
  const [loading, setLoading] = useState(false);
  const [listPokemon, setListPokemon] = useState<IPokemon[]>();
  const getListPokemon = useCallback(() => {
    pokeapi
      .get<IListPokemonRequest>(
        `pokemon?offset=${pagination.offset}&limit=${pagination.limit}`
      )
      .then((response) => {
        const pokemon = response.data.results.map((item, index) => {
          return {
            id: index + pagination.offset + 1,
            name: item.name,
          } as IPokemon;
        });
        setListPokemon(pokemon);
        setLoading(false);
      });
  }, [pagination]);
  useEffect(() => {
    setLoading(true);
    getListPokemon();
  }, [pagination, getListPokemon]);

  function handleChangePagination(page: IPagination) {
    setPagination(page);
  }

  return (
    <ContainerWrapper>
      <Container>
        {listPokemon?.map((item) => (
          <Card key={item.id} id={item.id} name={item.name} />
        ))}
      </Container>
      <Pagination onChange={handleChangePagination} loading={loading} />
    </ContainerWrapper>
  );
};

export default ListPokemon;
