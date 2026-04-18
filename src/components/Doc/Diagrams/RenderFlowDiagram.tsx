import React from 'react';

/**
 * Fabric render pipeline: React -> Shadow Tree -> Commit -> Mount -> Pixels.
 */
export default function RenderFlowDiagram() {
  return (
    <svg viewBox="0 0 820 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fabric render pipeline">
      <defs>
        <linearGradient id="rf-a" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <filter id="rf-s">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#4F46E5" floodOpacity="0.15" />
        </filter>
      </defs>

      {[
        { x: 30,  title: 'React',         sub: 'JSX & state',         color: '#F59E0B' },
        { x: 190, title: 'Shadow Tree',   sub: 'Immutable C++',        color: '#8B5CF6' },
        { x: 350, title: 'Commit',        sub: 'Prioritize updates',   color: '#6366F1' },
        { x: 510, title: 'Mount',         sub: 'Apply to views',       color: '#10B981' },
        { x: 670, title: 'Render',        sub: '60–120fps frames',     color: '#2563EB' },
      ].map((s, i, arr) => (
        <g key={s.x}>
          <g filter="url(#rf-s)">
            <rect x={s.x} y="60" width="130" height="100" rx="14" fill="white" stroke={s.color} strokeWidth="2" />
            <circle cx={s.x + 25} cy="85" r="14" fill={s.color} />
            <text x={s.x + 25} y="90" textAnchor="middle" fill="white" fontSize="13" fontWeight="800">{i + 1}</text>
            <text x={s.x + 45} y="90" fill={s.color} fontSize="15" fontWeight="700">{s.title}</text>
            <text x={s.x + 16} y="125" fill="#64748B" fontSize="11.5">{s.sub}</text>
          </g>
          {/* Arrow connector */}
          {i < arr.length - 1 && (
            <g stroke="#CBD5E1" strokeWidth="2" fill="none" strokeLinecap="round">
              <line x1={s.x + 135} y1="110" x2={s.x + 155} y2="110" />
              <polyline points={`${s.x + 150},105 ${s.x + 157},110 ${s.x + 150},115`} />
            </g>
          )}
        </g>
      ))}
    </svg>
  );
}
