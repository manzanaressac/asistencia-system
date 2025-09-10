'use client';
import Link from 'next/link';

interface ErrorProps {
  statusCode?: number;
}

export default function CustomError({ statusCode = 404 }: ErrorProps) {
  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1 style={{ fontSize: '6rem', margin: 0 }}>{statusCode}</h1>
      <h2>Ocurrió un error en la aplicación</h2>
      <Link href="/">
        <button
          style={{
            marginTop: '2rem',
            padding: '0.75rem 1.5rem',
            fontSize: '1rem',
            cursor: 'pointer',
            borderRadius: '0.5rem',
            border: 'none',
            backgroundColor: '#0070f3',
            color: '#fff',
          }}
        >
          Volver al inicio
        </button>
      </Link>
    </div>
  );
}
