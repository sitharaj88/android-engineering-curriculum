import React from 'react';

/** Coroutine scopes: Global, Application, viewModelScope, lifecycleScope. */
export default function CoroutineScopesDiagram() {
  const scopes = [
    { name: 'GlobalScope',     life: 'process',     color: '#94A3B8', warn: 'avoid' },
    { name: 'Application',     life: 'process',     color: '#4285F4', warn: 'singletons only' },
    { name: 'viewModelScope',  life: 'ViewModel',   color: '#0F9D58', warn: 'most common' },
    { name: 'lifecycleScope',  life: 'UI lifecycle',color: '#3DDC84', warn: 'UI work' },
  ];
  return (
    <svg viewBox="0 0 760 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coroutine scope hierarchy">
      <defs>
        <filter id="cs-shadow"><feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#0F9D58" floodOpacity="0.15" /></filter>
      </defs>
      <text x="380" y="36" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="800">Coroutine scopes — pick the right lifetime</text>
      {scopes.map((s, i) => {
        const x = 40 + i * 180;
        return (
          <g key={s.name} filter="url(#cs-shadow)">
            <rect x={x} y="80" width="160" height="140" rx="16" fill={s.color} />
            <text x={x + 80} y="118" textAnchor="middle" fill="white" fontSize="14" fontWeight="800">{s.name}</text>
            <text x={x + 80} y="148" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">lives for</text>
            <text x={x + 80} y="170" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">{s.life}</text>
            <text x={x + 80} y="200" textAnchor="middle" fill="white" fontSize="10.5" opacity="0.95">{s.warn}</text>
          </g>
        );
      })}
      <text x="380" y="252" textAnchor="middle" fill="#475569" fontSize="11.5">Pick the smallest scope that outlives the work — no leaks, no orphans.</text>
      <text x="380" y="272" textAnchor="middle" fill="#475569" fontSize="11.5">Use Dispatchers.IO for blocking I/O, Dispatchers.Default for CPU-heavy work.</text>
    </svg>
  );
}
