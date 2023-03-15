import { NextResponse } from 'next/server';
import { getBreeds } from '../../domain/breed/services/getBreeds';
import { BreedsClientPage } from './clientPage';

export const metadata = {
  title: 'Breed List Page',
  description: 'This is a list of breeds',
};

export default async function BreedsPage() {
  const fallbackData = [await getBreeds({ page: 1 })];

  return (
    <>
      <h1>Breeds</h1>
      <BreedsClientPage fallbackData={fallbackData} />
    </>
  );
}
