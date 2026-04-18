import React from 'react';

/** Hilt dependency graph: Application → SingletonComponent → ActivityComponent → ViewModelComponent. */
export default function HiltGraphDiagram() {
  return (
    <svg viewBox="0 0 760 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hilt component hierarchy">
      <defs>
        <linearGradient id="hilt-app" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#4285F4" /><stop offset="100%" stopColor="#1A73E8" /></linearGradient>
        <linearGradient id="hilt-act" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#3DDC84" /><stop offset="100%" stopColor="#0F9D58" /></linearGradient>
        <linearGradient id="hilt-vm"  x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#A78BFA" /><stop offset="100%" stopColor="#7C3AED" /></linearGradient>
        <linearGradient id="hilt-frag"x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FBBC04" /><stop offset="100%" stopColor="#F09300" /></linearGradient>
        <filter id="hilt-shadow"><feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#0F9D58" floodOpacity="0.16" /></filter>
      </defs>

      <text x="380" y="32" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="800">Hilt component hierarchy</text>

      <g filter="url(#hilt-shadow)">
        <rect x="220" y="60" width="320" height="60" rx="14" fill="url(#hilt-app)" />
        <text x="380" y="86" textAnchor="middle" fill="white" fontSize="13" fontWeight="800">SingletonComponent</text>
        <text x="380" y="106" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">@HiltAndroidApp · app-wide singletons (OkHttp, Room)</text>
      </g>

      <g filter="url(#hilt-shadow)">
        <rect x="220" y="150" width="320" height="60" rx="14" fill="url(#hilt-act)" />
        <text x="380" y="176" textAnchor="middle" fill="white" fontSize="13" fontWeight="800">ActivityRetainedComponent</text>
        <text x="380" y="196" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">survives configuration changes (rotation)</text>
      </g>

      <g filter="url(#hilt-shadow)">
        <rect x="60" y="240" width="280" height="80" rx="14" fill="url(#hilt-vm)" />
        <text x="200" y="268" textAnchor="middle" fill="white" fontSize="13" fontWeight="800">ViewModelComponent</text>
        <text x="200" y="290" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">@HiltViewModel · use cases, repos</text>
        <text x="200" y="308" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">scoped to ViewModel lifetime</text>

        <rect x="420" y="240" width="280" height="80" rx="14" fill="url(#hilt-frag)" />
        <text x="560" y="268" textAnchor="middle" fill="white" fontSize="13" fontWeight="800">Activity / Fragment</text>
        <text x="560" y="290" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">@AndroidEntryPoint · UI bindings</text>
        <text x="560" y="308" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">recreated on rotation</text>
      </g>

      <g stroke="#0F9D58" strokeWidth="2" fill="#0F9D58" opacity="0.55">
        <path d="M 380 120 L 380 144" />
        <path d="M 376 144 L 380 152 L 384 144 Z" />
        <path d="M 380 210 L 200 240" />
        <path d="M 380 210 L 560 240" />
      </g>
    </svg>
  );
}
