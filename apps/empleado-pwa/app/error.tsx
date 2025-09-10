'use client';
import { useEffect } from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function RootError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>Error en la aplicación</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Reintentar</button>
    </div>
  );
}
