import React from 'react';

/** Activity lifecycle: Created → Started → Resumed → Paused → Stopped → Destroyed. */
export default function ActivityLifecycleDiagram() {
  const states = [
    { label: 'onCreate',  desc: 'inflate, bind' },
    { label: 'onStart',   desc: 'visible' },
    { label: 'onResume',  desc: 'interactive' },
    { label: 'onPause',   desc: 'partly hidden' },
    { label: 'onStop',    desc: 'hidden' },
    { label: 'onDestroy', desc: 'released' },
  ];
  return (
    <svg viewBox="0 0 760 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Android Activity lifecycle states">
      <defs>
        <linearGradient id="lc-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3DDC84" />
          <stop offset="100%" stopColor="#0F9D58" />
        </linearGradient>
        <filter id="lc-shadow"><feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#0F9D58" floodOpacity="0.18" /></filter>
      </defs>
      {states.map((s, i) => {
        const x = 40 + i * 118;
        return (
          <g key={s.label} filter="url(#lc-shadow)">
            <rect x={x} y="80" width="106" height="100" rx="14" fill="url(#lc-grad)" />
            <text x={x + 53} y="120" textAnchor="middle" fill="white" fontSize="14" fontWeight="800">{s.label}</text>
            <text x={x + 53} y="146" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">{s.desc}</text>
          </g>
        );
      })}
      {states.slice(0, -1).map((_, i) => {
        const x1 = 40 + i * 118 + 106;
        const x2 = 40 + (i + 1) * 118;
        const mid = (x1 + x2) / 2;
        return (
          <g key={i} fill="#0F9D58" opacity="0.6">
            <path d={`M ${x1} 130 L ${x2 - 6} 130`} stroke="#0F9D58" strokeWidth="2" />
            <path d={`M ${x2 - 6} 124 L ${x2} 130 L ${x2 - 6} 136 Z`} />
            <text x={mid} y="118" textAnchor="middle" fill="#0F9D58" fontSize="9" fontWeight="700">→</text>
          </g>
        );
      })}
      <text x="380" y="40" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="800">Activity lifecycle (forward path)</text>
      <text x="380" y="220" textAnchor="middle" fill="#475569" fontSize="12">Save UI state in onSaveInstanceState — restored in onCreate or onRestoreInstanceState</text>
      <text x="380" y="240" textAnchor="middle" fill="#475569" fontSize="12">Backwards: onPause → onStop → onDestroy. Process death can skip any of them.</text>
    </svg>
  );
}
