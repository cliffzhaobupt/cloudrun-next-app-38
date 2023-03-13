import { GetBreedsResponse } from '../apiTypes';

export async function getBreeds(): Promise<GetBreedsResponse> {
  const res = await fetch('https://catfact.ninja/breeds', {
    cache: 'no-cache',
  });
  return res.json();
}
