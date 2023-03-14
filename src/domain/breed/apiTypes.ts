import { Breed } from './entities';

export type GetBreedsResponse = {
  data: Breed[];
  next_page_url: string;
};
