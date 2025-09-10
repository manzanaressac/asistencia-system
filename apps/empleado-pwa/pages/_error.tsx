'use client';

import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

interface ErrorProps {
  statusCode?: number;
}

const CustomError: NextPage<ErrorProps> = ({ statusCode = 404 }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        padding: '2rem',
      }}
    >
      <h1 style={{ fontSize: '6rem', margin: 0 }}>{statusCode}</h1>
      <h2 style={{ fontSize: '2rem', margin: '1rem 0' }}>
        Ocurrió un error en la aplicación
      </h2>
      <p style={{ fontSize: '1rem', color: '#666' }}>
        La página que buscas no se pudo cargar o no existe.
      </p>
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
};

export default CustomError;
