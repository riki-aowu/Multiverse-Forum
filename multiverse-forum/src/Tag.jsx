import React from 'react';
import { F_MONO } from './data';

export const Tag = ({ children, accent }) => (
  <span
    style={{
      fontFamily: F_MONO,
      fontSize: 11,
      letterSpacing: 1,
      color: accent ? 'var(--accent)' : 'var(--text-dim)',
      border: `1px solid ${accent ? 'var(--border-strong)' : 'var(--border)'}`,
      borderRadius: 2,
      padding: '2px 8px',
      display: 'inline-block',
      backgroundColor: accent ? 'var(--bg-card)' : 'transparent',
    }}
  >
    [{children}]
  </span>
);
