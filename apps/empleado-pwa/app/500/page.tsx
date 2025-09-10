'use client';
import Link from 'next/link';

export default function Custom500() {
  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1 style={{ fontSize: '6rem', margin: 0 }}>500</h1>
      <h2>Error en el servidor</h2>
      <Link href="/">
        <button style={{
          marginTop: '2rem',
          padding: '0.75rem 1.5rem',
          cursor: 'pointer',
          borderRadius: '0.5rem',
          border: 'none',
          backgroundColor: '#0070f3',
          color: '#fff',
        }}>
          Volver al inicio
        </button>
      </Link>
    </div>
  );
}
