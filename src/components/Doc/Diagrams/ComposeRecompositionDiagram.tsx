import React from 'react';

/** Compose recomposition: state read → invalidation → recompose only readers. */
export default function ComposeRecompositionDiagram() {
  return (
    <svg viewBox="0 0 760 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Compose recomposition flow">
      <defs>
        <linearGradient id="cr-state" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FBBC04" />
          <stop offset="100%" stopColor="#F09300" />
        </linearGradient>
        <linearGradient id="cr-comp" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3DDC84" />
          <stop offset="100%" stopColor="#0F9D58" />
        </linearGradient>
        <linearGradient id="cr-skip" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#64748B" />
        </linearGradient>
        <filter id="cr-shadow"><feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#0F9D58" floodOpacity="0.15" /></filter>
      </defs>

      <g filter="url(#cr-shadow)">
        <rect x="280" y="20" width="200" height="64" rx="14" fill="url(#cr-state)" />
        <text x="380" y="46" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">MutableState&lt;T&gt;</text>
        <text x="380" y="68" textAnchor="middle" fill="white" fontSize="11" opacity="0.95">value mutated → invalidate readers</text>
      </g>

      <g stroke="#F09300" strokeWidth="2" fill="none">
        <path d="M 310 84 C 200 130, 160 150, 140 180" />
        <path d="M 380 84 L 380 180" />
        <path d="M 450 84 C 560 130, 600 150, 620 180" />
      </g>

      <g filter="url(#cr-shadow)">
        <rect x="40" y="180" width="200" height="80" rx="14" fill="url(#cr-comp)" />
        <text x="140" y="208" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">Reader A</text>
        <text x="140" y="230" textAnchor="middle" fill="white" fontSize="11" opacity="0.95">Recomposes</text>
        <text x="140" y="248" textAnchor="middle" fill="white" fontSize="10" opacity="0.85">reads state.value</text>

        <rect x="280" y="180" width="200" height="80" rx="14" fill="url(#cr-comp)" />
        <text x="380" y="208" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">Reader B</text>
        <text x="380" y="230" textAnchor="middle" fill="white" fontSize="11" opacity="0.95">Recomposes</text>
        <text x="380" y="248" textAnchor="middle" fill="white" fontSize="10" opacity="0.85">reads state.value</text>

        <rect x="520" y="180" width="200" height="80" rx="14" fill="url(#cr-skip)" />
        <text x="620" y="208" textAnchor="middle" fill="white" fontSize="12" fontWeight="700">Sibling C</text>
        <text x="620" y="230" textAnchor="middle" fill="white" fontSize="11" opacity="0.95">SKIPPED</text>
        <text x="620" y="248" textAnchor="middle" fill="white" fontSize="10" opacity="0.85">no read of state</text>
      </g>

      <text x="380" y="298" textAnchor="middle" fill="#0F172A" fontSize="13" fontWeight="700">Only composables that READ the state recompose</text>
      <text x="380" y="320" textAnchor="middle" fill="#475569" fontSize="11.5">Stable parameters + remember + derivedStateOf keep recomposition narrow</text>
      <text x="380" y="340" textAnchor="middle" fill="#475569" fontSize="11.5">Use Layout Inspector → Recomposition counts to spot leaks</text>
    </svg>
  );
}
