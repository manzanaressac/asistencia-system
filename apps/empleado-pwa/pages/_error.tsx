// apps/empleado-pwa/pages/_error.tsx
'use client';

import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

interface ErrorProps {
  statusCode?: number;
}

const CustomError: NextPage<ErrorProps> = ({ statusCode }) => {
  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1 style={{ fontSize: '4rem' }}>{statusCode || 'Error'}</h1>
      <h2>Ocurrió un error en la aplicación</h2>
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
};

CustomError.getInitialProps = ({ res, err }: any) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default CustomError;
