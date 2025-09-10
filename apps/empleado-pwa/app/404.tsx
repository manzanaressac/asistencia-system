'use client';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <Link href="/">
        <button>Volver al inicio</button>
      </Link>
    </div>
  );
}
