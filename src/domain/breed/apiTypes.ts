import { Breed } from './entities';

export type GetBreedsResponse = {
  current_page: number;
  data: Breed[];
};
