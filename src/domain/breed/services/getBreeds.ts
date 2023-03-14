import { GetBreedsResponse } from '../apiTypes';

export async function getBreeds({
  page = 1,
}: {
  page?: number;
}): Promise<GetBreedsResponse> {
  const res = await fetch(`https://catfact.ninja/breeds?page=${page}`, {
    cache: 'no-cache',
  });

  return res.json();
}

export async function getBreedsSwrFetcher([_key, page]: [
  string,
  number
]): Promise<GetBreedsResponse> {
  return getBreeds({ page });
}
