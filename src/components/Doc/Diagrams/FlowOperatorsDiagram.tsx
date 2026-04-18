import React from 'react';

/** Flow operators pipeline: source → transform → combine → terminal. */
export default function FlowOperatorsDiagram() {
  const ops = [
    { label: 'Source',    sub: 'flow { }, callbackFlow', color: '#3DDC84' },
    { label: 'Transform', sub: 'map · filter · debounce', color: '#0F9D58' },
    { label: 'Combine',   sub: 'combine · zip · merge',   color: '#4285F4' },
    { label: 'Buffer',    sub: 'conflate · buffer',       color: '#A78BFA' },
    { label: 'Terminal',  sub: 'collect · stateIn',       color: '#FBBC04' },
  ];
  return (
    <svg viewBox="0 0 760 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Kotlin Flow operator pipeline">
      <defs>
        <filter id="fo-shadow"><feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#0F9D58" floodOpacity="0.15" /></filter>
      </defs>
      <text x="380" y="36" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="800">Flow pipeline — values move left to right</text>
      {ops.map((o, i) => {
        const x = 40 + i * 144;
        return (
          <g key={o.label}>
            <g filter="url(#fo-shadow)">
              <rect x={x} y="80" width="128" height="90" rx="14" fill={o.color} />
              <text x={x + 64} y="118" textAnchor="middle" fill="white" fontSize="13" fontWeight="800">{o.label}</text>
              <text x={x + 64} y="142" textAnchor="middle" fill="white" fontSize="10.5" opacity="0.95">{o.sub}</text>
            </g>
            {i < ops.length - 1 && (
              <g fill="#0F9D58" stroke="#0F9D58" strokeWidth="2" opacity="0.55">
                <path d={`M ${x + 128} 125 L ${x + 142} 125`} />
                <path d={`M ${x + 138} 119 L ${x + 144} 125 L ${x + 138} 131 Z`} />
              </g>
            )}
          </g>
        );
      })}
      <text x="380" y="200" textAnchor="middle" fill="#475569" fontSize="11.5">Cold by default — nothing runs until a terminal operator collects.</text>
      <text x="380" y="220" textAnchor="middle" fill="#475569" fontSize="11.5">stateIn / shareIn convert cold flows into hot, replayable streams.</text>
    </svg>
  );
}
