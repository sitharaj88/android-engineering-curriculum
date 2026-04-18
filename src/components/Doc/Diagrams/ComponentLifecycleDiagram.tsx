import React from 'react';

/**
 * React component lifecycle / render cycle visualization.
 */
export default function ComponentLifecycleDiagram() {
  return (
    <svg viewBox="0 0 820 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="React component render cycle">
      <defs>
        <linearGradient id="cl-mount" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#34D399"/><stop offset="100%" stopColor="#059669"/></linearGradient>
        <linearGradient id="cl-update" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#60A5FA"/><stop offset="100%" stopColor="#2563EB"/></linearGradient>
        <linearGradient id="cl-effect" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#A78BFA"/><stop offset="100%" stopColor="#7C3AED"/></linearGradient>
        <linearGradient id="cl-unmount" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FB7185"/><stop offset="100%" stopColor="#BE123C"/></linearGradient>
        <filter id="cl-sh"><feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#4F46E5" floodOpacity="0.15"/></filter>
      </defs>

      {[
        {x:30,  g:'url(#cl-mount)',  t:'MOUNT',    title:'First render',     hooks:['useState init', 'useEffect setup', 'useRef init']},
        {x:230, g:'url(#cl-update)', t:'RENDER',   title:'Props/state change',hooks:['Re-run function', 'Recompute JSX', 'Diff + commit']},
        {x:430, g:'url(#cl-effect)', t:'EFFECTS',  title:'After commit',     hooks:['cleanup old', 'run new effects', 'flush refs']},
        {x:630, g:'url(#cl-unmount)',t:'UNMOUNT',  title:'Removed from tree',hooks:['cleanup effects', 'cancel subs', 'clear timers']},
      ].map((s,i,arr)=>(
        <g key={i}>
          <g filter="url(#cl-sh)">
            <rect x={s.x} y="50" width="160" height="190" rx="14" fill={s.g}/>
            <text x={s.x+80} y="78" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" letterSpacing="0.1em">{s.t}</text>
            <text x={s.x+80} y="104" textAnchor="middle" fill="white" fontSize="15" fontWeight="800">{s.title}</text>
            {s.hooks.map((h,j)=>(
              <text key={j} x={s.x+20} y={140+j*22} fill="white" fontSize="12" opacity="0.92">• {h}</text>
            ))}
          </g>
          {i < arr.length-1 && (
            <g stroke="#CBD5E1" strokeWidth="2" fill="none" strokeLinecap="round">
              <line x1={s.x+165} y1="145" x2={s.x+195} y2="145"/>
              <polyline points={`${s.x+188},138 ${s.x+197},145 ${s.x+188},152`}/>
            </g>
          )}
        </g>
      ))}

      <text x="410" y="275" textAnchor="middle" fill="#64748B" fontSize="11.5" fontWeight="500">React Strict Mode in dev: mounts → unmounts → remounts each component to catch effect bugs early</text>
    </svg>
  );
}
