import React from 'react';

/**
 * Redux one-way data flow: UI → Action → Reducer → Store → UI.
 */
export default function ReduxFlowDiagram() {
  return (
    <svg viewBox="0 0 760 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Redux unidirectional data flow">
      <defs>
        <linearGradient id="rx-ui" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FBBF24"/><stop offset="100%" stopColor="#F59E0B"/></linearGradient>
        <linearGradient id="rx-act" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#F472B6"/><stop offset="100%" stopColor="#DB2777"/></linearGradient>
        <linearGradient id="rx-red" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#A78BFA"/><stop offset="100%" stopColor="#7C3AED"/></linearGradient>
        <linearGradient id="rx-store" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#60A5FA"/><stop offset="100%" stopColor="#2563EB"/></linearGradient>
        <filter id="rx-sh"><feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#4F46E5" floodOpacity="0.15"/></filter>
        <marker id="rx-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#6366F1"/>
        </marker>
      </defs>

      {/* Top: UI */}
      <g filter="url(#rx-sh)">
        <rect x="280" y="30" width="200" height="80" rx="14" fill="url(#rx-ui)"/>
        <text x="380" y="58" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" letterSpacing="0.1em">STEP 1</text>
        <text x="380" y="82" textAnchor="middle" fill="white" fontSize="17" fontWeight="800">UI / Component</text>
        <text x="380" y="100" textAnchor="middle" fill="white" fontSize="11.5" opacity="0.9">User clicks "Add to Cart"</text>
      </g>

      {/* Right: Action */}
      <g filter="url(#rx-sh)">
        <rect x="540" y="140" width="200" height="80" rx="14" fill="url(#rx-act)"/>
        <text x="640" y="168" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" letterSpacing="0.1em">STEP 2</text>
        <text x="640" y="192" textAnchor="middle" fill="white" fontSize="17" fontWeight="800">Action</text>
        <text x="640" y="210" textAnchor="middle" fill="white" fontSize="11.5" opacity="0.9">&#123; type: 'cart/add' &#125;</text>
      </g>

      {/* Bottom: Reducer */}
      <g filter="url(#rx-sh)">
        <rect x="280" y="250" width="200" height="80" rx="14" fill="url(#rx-red)"/>
        <text x="380" y="278" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" letterSpacing="0.1em">STEP 3</text>
        <text x="380" y="302" textAnchor="middle" fill="white" fontSize="17" fontWeight="800">Reducer</text>
        <text x="380" y="320" textAnchor="middle" fill="white" fontSize="11.5" opacity="0.9">(state, action) → newState</text>
      </g>

      {/* Left: Store */}
      <g filter="url(#rx-sh)">
        <rect x="20" y="140" width="200" height="80" rx="14" fill="url(#rx-store)"/>
        <text x="120" y="168" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" letterSpacing="0.1em">STEP 4</text>
        <text x="120" y="192" textAnchor="middle" fill="white" fontSize="17" fontWeight="800">Store</text>
        <text x="120" y="210" textAnchor="middle" fill="white" fontSize="11.5" opacity="0.9">Notifies subscribers</text>
      </g>

      {/* Arrows (circular flow) */}
      <g fill="none" stroke="#6366F1" strokeWidth="2.5" strokeLinecap="round">
        <path d="M 480 90 Q 560 100 580 140" markerEnd="url(#rx-arrow)"/>
        <path d="M 600 220 Q 560 260 480 270" markerEnd="url(#rx-arrow)"/>
        <path d="M 280 290 Q 180 260 180 220" markerEnd="url(#rx-arrow)"/>
        <path d="M 160 140 Q 220 80 280 75" markerEnd="url(#rx-arrow)"/>
      </g>

      <text x="380" y="355" textAnchor="middle" fill="#64748B" fontSize="12" fontWeight="500">One-way data flow • Pure functions • Predictable state</text>
    </svg>
  );
}
