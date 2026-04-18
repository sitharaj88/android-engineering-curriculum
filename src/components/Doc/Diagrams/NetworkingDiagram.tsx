import React from 'react';

/**
 * TanStack Query cache lifecycle: fetching → fresh → stale → refetch.
 */
export default function NetworkingDiagram() {
  return (
    <svg viewBox="0 0 820 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="TanStack Query cache lifecycle">
      <defs>
        <linearGradient id="nw-fetch" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FBBF24"/><stop offset="100%" stopColor="#F59E0B"/></linearGradient>
        <linearGradient id="nw-fresh" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#34D399"/><stop offset="100%" stopColor="#059669"/></linearGradient>
        <linearGradient id="nw-stale" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#A78BFA"/><stop offset="100%" stopColor="#7C3AED"/></linearGradient>
        <linearGradient id="nw-gc" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FB7185"/><stop offset="100%" stopColor="#BE123C"/></linearGradient>
        <filter id="nw-sh"><feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#4F46E5" floodOpacity="0.15"/></filter>
        <marker id="nw-ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#6366F1"/>
        </marker>
      </defs>

      {[
        {x:30,  g:'url(#nw-fetch)', t:'FETCHING', sub:'Network in flight',    detail:'isLoading = true',  icon:'⏳'},
        {x:230, g:'url(#nw-fresh)', t:'FRESH',    sub:'staleTime not elapsed',detail:'No refetch',        icon:'✓'},
        {x:430, g:'url(#nw-stale)', t:'STALE',    sub:'staleTime elapsed',    detail:'Refetch on trigger',icon:'⟳'},
        {x:630, g:'url(#nw-gc)',    t:'INACTIVE', sub:'No observers',         detail:'gcTime → dropped',  icon:'✕'},
      ].map((s,i,arr)=>(
        <g key={i}>
          <g filter="url(#nw-sh)">
            <rect x={s.x} y="60" width="160" height="170" rx="14" fill={s.g}/>
            <text x={s.x+80} y="88" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" letterSpacing="0.1em">{s.t}</text>
            <text x={s.x+80} y="128" textAnchor="middle" fill="white" fontSize="32">{s.icon}</text>
            <text x={s.x+80} y="168" textAnchor="middle" fill="white" fontSize="12.5" fontWeight="700">{s.sub}</text>
            <text x={s.x+80} y="190" textAnchor="middle" fill="white" fontSize="11" opacity="0.85">{s.detail}</text>
          </g>
          {i < arr.length-1 && (
            <g stroke="#6366F1" strokeWidth="2" fill="none" strokeLinecap="round">
              <line x1={s.x+165} y1="145" x2={s.x+195} y2="145" markerEnd="url(#nw-ar)"/>
            </g>
          )}
        </g>
      ))}

      {/* Trigger labels */}
      <text x="195" y="260" textAnchor="middle" fill="#64748B" fontSize="11" fontWeight="500">on resolve</text>
      <text x="395" y="260" textAnchor="middle" fill="#64748B" fontSize="11" fontWeight="500">after staleTime</text>
      <text x="595" y="260" textAnchor="middle" fill="#64748B" fontSize="11" fontWeight="500">no subscribers</text>

      <text x="410" y="300" textAnchor="middle" fill="#94A3B8" fontSize="11">Refetch triggers: window focus • reconnect • component mount • manual invalidate</text>
    </svg>
  );
}
