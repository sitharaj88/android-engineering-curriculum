import React from 'react';

/**
 * Three-thread model in React Native: JS, Shadow (Yoga), and Native/UI.
 */
export default function ThreadsDiagram() {
  return (
    <svg viewBox="0 0 780 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="React Native three-thread model">
      <defs>
        <linearGradient id="th-js" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id="th-shadow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
        <linearGradient id="th-native" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <filter id="th-shadow-f">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#4F46E5" floodOpacity="0.18" />
        </filter>
      </defs>

      {/* Three parallel columns */}
      {[
        { x: 40,  grad: 'url(#th-js)',     label: 'JS THREAD',     title: 'JavaScript',  items: ['React render', 'State updates', 'Event handlers', 'Business logic'], icon: '{ }' },
        { x: 290, grad: 'url(#th-shadow)', label: 'SHADOW THREAD', title: 'Yoga Layout', items: ['Flexbox calc', 'Width / Height', 'Positioning', 'Measurements'], icon: '◱' },
        { x: 540, grad: 'url(#th-native)', label: 'UI THREAD',     title: 'Native UI',   items: ['Rendering', 'Animations', 'Gestures', '60–120 fps'], icon: '◉' },
      ].map((col) => (
        <g key={col.x} filter="url(#th-shadow-f)">
          <rect x={col.x} y="30" width="200" height="220" rx="16" fill={col.grad} />
          <text x={col.x + 100} y="60" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="0.1em">{col.label}</text>
          <text x={col.x + 100} y="96" textAnchor="middle" fill="white" fontSize="28" fontWeight="300">{col.icon}</text>
          <text x={col.x + 100} y="130" textAnchor="middle" fill="white" fontSize="18" fontWeight="800">{col.title}</text>
          {col.items.map((item, i) => (
            <text key={i} x={col.x + 100} y={160 + i * 22} textAnchor="middle" fill="white" fontSize="12" opacity="0.9">• {item}</text>
          ))}
        </g>
      ))}

      {/* Connector lines between columns */}
      <g stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" fill="none">
        <line x1="240" y1="140" x2="290" y2="140" />
        <line x1="490" y1="140" x2="540" y2="140" />
      </g>
    </svg>
  );
}
