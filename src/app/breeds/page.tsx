import { getBreeds } from '../../domain/breed/services/getBreeds';

export const metadata = {
  title: 'Breed List Page',
  description: 'This is a list of breeds',
};

export default async function BreedsPage() {
  const { data: breeds } = await getBreeds();

  return (
    <>
      <h1>Breeds</h1>
      <ul>
        {breeds.map(({ breed }) => (
          <li key={breed}>Breed: {breed}</li>
        ))}
      </ul>
    </>
  );
}
