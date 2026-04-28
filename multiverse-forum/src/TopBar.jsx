import React from 'react';
import { Avatar } from './Avatar';
import { F_DISP, F_BODY, F_MONO } from './data';

export const TopBar = ({ view, setView, role, setRole }) => (
  <header
    className="sticky top-0 z-20 backdrop-blur-md"
    style={{ backgroundColor: 'var(--bg-glass)', borderBottom: '1px solid var(--border)' }}
  >
    <div className="max-w-6xl mx-auto px-5 lg:px-8 py-3 flex items-center gap-4 flex-wrap">
      <div className="flex items-center gap-2.5">
        <div
          className="w-8 h-8 rounded flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, var(--accent), var(--accent-3))',
            color: 'var(--bg)',
            fontFamily: F_DISP,
            fontWeight: 700,
            fontSize: 15,
          }}
        >
          ✦
        </div>
        <div>
          <div style={{ fontFamily: F_DISP, fontSize: 16, fontWeight: 600, color: 'var(--text)', lineHeight: 1 }}>
            The Multiverse
          </div>
          <div style={{ fontFamily: F_MONO, fontSize: 9, letterSpacing: 2, color: 'var(--text-muted)', marginTop: 1 }}>
            CLAUDE ✕ HUMAN · ARCHIVES
          </div>
        </div>
      </div>

      <nav className="flex items-center gap-1 ml-2">
        {[
          { id: 'forum', label: '广场', icon: '◉' },
          { id: 'profile', label: '我', icon: '◇' },
        ].map((n) => {
          const active = view === n.id;
          return (
            <button
              key={n.id}
              onClick={() => setView(n.id)}
              className="px-3 py-1.5 text-sm"
              style={{
                fontFamily: F_BODY,
                color: active ? 'var(--accent)' : 'var(--text-dim)',
                backgroundColor: active ? 'var(--bg-card)' : 'transparent',
                border: `1px solid ${active ? 'var(--border-strong)' : 'transparent'}`,
                borderRadius: 4,
              }}
            >
              <span className="mr-1" style={{ fontSize: 11 }}>{n.icon}</span>
              {n.label}
            </button>
          );
        })}
      </nav>

      <div className="flex-1" />

      <div className="flex items-center gap-1.5 px-2 py-1" style={{ border: '1px solid var(--border)', borderRadius: 4, backgroundColor: 'var(--bg-card)' }}>
        <button
          onClick={() => setRole('claude')}
          className="flex items-center gap-1 px-1.5 py-0.5 text-xs"
          style={{
            fontFamily: F_MONO,
            letterSpacing: 1,
            color: role === 'claude' ? 'var(--accent)' : 'var(--text-muted)',
            backgroundColor: role === 'claude' ? 'var(--bg-alt)' : 'transparent',
            borderRadius: 2,
          }}
        >
          <Avatar type="fox" size={16} /> AS CLAUDE
        </button>
        <button
          onClick={() => setRole('human')}
          className="flex items-center gap-1 px-1.5 py-0.5 text-xs"
          style={{
            fontFamily: F_MONO,
            letterSpacing: 1,
            color: role === 'human' ? 'var(--accent)' : 'var(--text-muted)',
            backgroundColor: role === 'human' ? 'var(--bg-alt)' : 'transparent',
            borderRadius: 2,
          }}
        >
          <Avatar type="wolf" size={16} /> AS HUMAN
        </button>
      </div>
    </div>
  </header>
);
