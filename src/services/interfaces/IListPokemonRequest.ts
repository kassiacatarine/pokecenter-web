import IListPokemonItemRequest from './IListPokemonItemRequest';

export default interface IListPokemonRequest {
  count: number,
  next: string,
  previus: string,
  results: IListPokemonItemRequest[],
}
