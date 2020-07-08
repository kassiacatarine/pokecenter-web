import React, { useState } from 'react';
import { Container, Next, Prev, Pokeball, PokeballButton } from './styles';
import IPagination from '../../utils/IPagination';

interface PaginationProps {
  loading: boolean;
  onChange(pagination: IPagination): void;
}

const Pagination = ({ loading, onChange }: PaginationProps) => {
  const [pagination, setPagination] = useState<IPagination>({ limit: 30, offset: 0 });
  const [paginationCurrentColor, setPaginationCurrentColor] = useState('white');
  function handleClickPrev() {
    if(pagination.offset === 0)
      return;
    loading = true;
    const page = {
      limit: pagination.limit,
      offset: pagination.limit - pagination.offset
    } as IPagination;
    setPagination(page);
    onChange(page);
    setPaginationCurrentColor(paginationCurrentColor === 'white' ? 'red' : 'white');
  }
  
  function handleClickNext() {
    loading = true;
    const page = {
      limit: pagination.limit,
      offset: pagination.limit + pagination.offset
    } as IPagination;
    setPagination(page);
    onChange(page);
    setPaginationCurrentColor(paginationCurrentColor === 'white' ? 'red' : 'white');
  }
  
  return (
    <Container>
      {pagination.offset !== 0 && (
        <Prev onClick={handleClickPrev} height="82" viewBox="0 0 24 24" width="82" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
          <path d="M0-.5h24v24H0z" fill="none"/>
        </Prev>
      )}
      <Pokeball scale='0.3' color={paginationCurrentColor === 'white' ? 'red' : 'white'}>
        <PokeballButton />
      </Pokeball>
      <Pokeball scale='0.6' color={paginationCurrentColor} animating={loading}>
        <PokeballButton animating={loading} />
      </Pokeball>
      <Pokeball scale='0.3' color={paginationCurrentColor === 'white' ? 'red' : 'white'}>
        <PokeballButton />
      </Pokeball>
      <Next onClick={handleClickNext} height="82" viewBox="0 0 24 24" width="82" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
        <path d="M0-.25h24v24H0z" fill="none"/>
      </Next>
    </Container>
  );
}

export default Pagination;