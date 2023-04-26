'use client';

export default function GlobalError({
  reset,
}: {
  error: Error;
  reset(): void;
}) {
  return (
    <html>
      <h2>Something went wrong!</h2>
      <button type="button" onClick={reset}>
        Try again
      </button>
    </html>
  );
}
