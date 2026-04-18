import React from 'react';

/**
 * React Navigation stack model with nested navigators.
 */
export default function NavigationStackDiagram() {
  return (
    <svg viewBox="0 0 760 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="React Navigation nested navigators">
      <defs>
        <linearGradient id="nv-root" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#4F46E5"/><stop offset="100%" stopColor="#06B6D4"/></linearGradient>
        <linearGradient id="nv-tab" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#A78BFA"/><stop offset="100%" stopColor="#7C3AED"/></linearGradient>
        <linearGradient id="nv-stack" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#34D399"/><stop offset="100%" stopColor="#059669"/></linearGradient>
        <filter id="nv-sh"><feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#4F46E5" floodOpacity="0.15"/></filter>
      </defs>

      {/* Root Stack */}
      <g filter="url(#nv-sh)">
        <rect x="30" y="30" width="700" height="60" rx="14" fill="url(#nv-root)"/>
        <text x="52" y="55" fill="white" fontSize="10" fontWeight="700" letterSpacing="0.1em">ROOT NATIVE STACK</text>
        <text x="52" y="76" fill="white" fontSize="15" fontWeight="800">App Container • Modals • Auth gate</text>
      </g>

      {/* Row 2: Auth + Main tabs */}
      <g filter="url(#nv-sh)">
        <rect x="30" y="110" width="220" height="70" rx="12" fill="url(#nv-stack)"/>
        <text x="50" y="133" fill="white" fontSize="10" fontWeight="700" letterSpacing="0.1em">AUTH STACK</text>
        <text x="50" y="152" fill="white" fontSize="13.5" fontWeight="800">Login</text>
        <text x="50" y="170" fill="white" fontSize="11.5" opacity="0.9">Register • ForgotPassword</text>
      </g>

      <g filter="url(#nv-sh)">
        <rect x="270" y="110" width="460" height="70" rx="12" fill="url(#nv-tab)"/>
        <text x="290" y="133" fill="white" fontSize="10" fontWeight="700" letterSpacing="0.1em">BOTTOM TABS</text>
        <text x="290" y="152" fill="white" fontSize="13.5" fontWeight="800">Home • Search • Cart • Profile</text>
        <text x="290" y="170" fill="white" fontSize="11.5" opacity="0.9">Each tab owns its own stack</text>
      </g>

      {/* Row 3: Per-tab stacks */}
      {[
        {x:270, title:'Home Stack', items:'Feed → Post → Comments'},
        {x:390, title:'Search Stack', items:'Query → Results → Detail'},
        {x:510, title:'Cart Stack', items:'Cart → Checkout → Pay'},
        {x:630, title:'Profile Stack', items:'Profile → Settings'},
      ].map((s,i)=>(
        <g key={i} filter="url(#nv-sh)">
          <rect x={s.x} y="200" width="110" height="70" rx="10" fill="url(#nv-stack)" opacity="0.9"/>
          <text x={s.x+10} y="222" fill="white" fontSize="10" fontWeight="700">{s.title.toUpperCase()}</text>
          <text x={s.x+10} y="242" fill="white" fontSize="10" opacity="0.9">{s.items.split('→')[0].trim()}</text>
          <text x={s.x+10} y="255" fill="white" fontSize="10" opacity="0.8">→ {s.items.split('→')[1]?.trim()}</text>
          <text x={s.x+10} y="267" fill="white" fontSize="10" opacity="0.7">→ {s.items.split('→')[2]?.trim()}</text>
        </g>
      ))}

      {/* Connectors */}
      <g stroke="#CBD5E1" strokeWidth="1.5" fill="none" strokeDasharray="3 3">
        <line x1="140" y1="90" x2="140" y2="110"/>
        <line x1="500" y1="90" x2="500" y2="110"/>
        <line x1="325" y1="180" x2="325" y2="200"/>
        <line x1="445" y1="180" x2="445" y2="200"/>
        <line x1="565" y1="180" x2="565" y2="200"/>
        <line x1="685" y1="180" x2="685" y2="200"/>
      </g>

      <text x="380" y="310" textAnchor="middle" fill="#64748B" fontSize="12" fontWeight="600">Deep link: /product/42 → Root → Tabs(Home) → HomeStack(Product, id: 42)</text>
      <text x="380" y="332" textAnchor="middle" fill="#94A3B8" fontSize="11">Each navigator keeps its own history, state, and options</text>
    </svg>
  );
}
