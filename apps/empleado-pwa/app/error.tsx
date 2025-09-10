'use client';

import Link from 'next/link';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function RootError({ error, reset }: ErrorProps) {
  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1 style={{ fontSize: '6rem', margin: 0 }}>⚠️ Error</h1>
      <h2>Ocurrió un error en la aplicación</h2>
      <p>{error.message}</p>
      <button
        style={{
          marginTop: '2rem',
          padding: '0.75rem 1.5rem',
          cursor: 'pointer',
          borderRadius: '0.5rem',
          border: 'none',
          backgroundColor: '#0070f3',
          color: '#fff',
        }}
        onClick={() => reset()}
      >
        Reintentar
      </button>
      <Link href="/">
        <div style={{ marginTop: '1rem', color: '#0070f3', cursor: 'pointer' }}>Volver al inicio</div>
      </Link>
    </div>
  );
}