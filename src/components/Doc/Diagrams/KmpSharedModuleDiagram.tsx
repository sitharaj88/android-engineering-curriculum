import React from 'react';

/** KMP shared module targets: commonMain feeds androidMain, iosMain, jvmMain, jsMain. */
export default function KmpSharedModuleDiagram() {
  return (
    <svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Kotlin Multiplatform shared module targets">
      <defs>
        <linearGradient id="kmp-common" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#7C3AED" /><stop offset="100%" stopColor="#4C1D95" /></linearGradient>
        <linearGradient id="kmp-and" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#3DDC84" /><stop offset="100%" stopColor="#0F9D58" /></linearGradient>
        <linearGradient id="kmp-ios" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#94A3B8" /><stop offset="100%" stopColor="#475569" /></linearGradient>
        <linearGradient id="kmp-jvm" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FBBC04" /><stop offset="100%" stopColor="#F09300" /></linearGradient>
        <linearGradient id="kmp-js"  x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#4285F4" /><stop offset="100%" stopColor="#1A73E8" /></linearGradient>
        <filter id="kmp-shadow"><feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#0F9D58" floodOpacity="0.16" /></filter>
      </defs>
      <text x="380" y="34" textAnchor="middle" fill="#0F172A" fontSize="14" fontWeight="800">Kotlin Multiplatform — one shared module, many targets</text>
      <g filter="url(#kmp-shadow)">
        <rect x="240" y="60" width="280" height="74" rx="16" fill="url(#kmp-common)" />
        <text x="380" y="92" textAnchor="middle" fill="white" fontSize="14" fontWeight="800">commonMain</text>
        <text x="380" y="116" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">pure Kotlin · use cases · models · networking</text>
      </g>
      {[
        { x: 30,  fill: 'url(#kmp-and)', name: 'androidMain', sub: 'Context APIs' },
        { x: 215, fill: 'url(#kmp-ios)', name: 'iosMain',     sub: 'NSURLSession' },
        { x: 400, fill: 'url(#kmp-jvm)', name: 'jvmMain',     sub: 'Desktop / server' },
        { x: 585, fill: 'url(#kmp-js)',  name: 'jsMain',      sub: 'Browser / Node' },
      ].map((t) => (
        <g key={t.name} filter="url(#kmp-shadow)">
          <rect x={t.x} y="200" width="170" height="80" rx="14" fill={t.fill} />
          <text x={t.x + 85} y="234" textAnchor="middle" fill="white" fontSize="13" fontWeight="800">{t.name}</text>
          <text x={t.x + 85} y="258" textAnchor="middle" fill="white" fontSize="11" opacity="0.95">{t.sub}</text>
        </g>
      ))}
      <g stroke="#7C3AED" strokeWidth="2" fill="none" opacity="0.55">
        <path d="M 320 134 C 240 170, 160 180, 115 200" />
        <path d="M 360 134 C 320 170, 310 180, 300 200" />
        <path d="M 400 134 C 440 170, 460 180, 485 200" />
        <path d="M 440 134 C 540 170, 620 180, 670 200" />
      </g>
    </svg>
  );
}
