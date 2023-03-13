import { getBreeds } from '@/domain/breed/services/getBreeds';

export default async function Home() {
  const breedsRes = await getBreeds();
  const { data: breeds } = breedsRes;

  return (
    <main>
      <h1>好棒啊！</h1>
      <p>哇哦 真的好棒啊！</p>
      <ul>
        {breeds.map(({ breed }) => (
          <li key={breed}>Breed: {breed}</li>
        ))}
      </ul>
    </main>
  );
}
