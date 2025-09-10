'use client';

import Link from 'next/link';
import React from 'react';

export default function Custom404() {
  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1 style={{ fontSize: '4rem' }}>404</h1>
      <h2>Página no encontrada</h2>
      <p>La página que buscas no existe.</p>
      <Link href="/">
        <button
          style={{
            padding: '0.5rem 1rem',
            marginTop: '1rem',
            cursor: 'pointer',
          }}
        >
          Volver al inicio
        </button>
      </Link>
    </div>
  );
}
