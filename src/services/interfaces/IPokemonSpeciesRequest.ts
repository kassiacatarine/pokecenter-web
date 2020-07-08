export default interface IPokemonSpeciesRequest {
  base_happiness: number;
  capture_rate: number;
  color: {
    name: string;
    url: string;
  };
}
