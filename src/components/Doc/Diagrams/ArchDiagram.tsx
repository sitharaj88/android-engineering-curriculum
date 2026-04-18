import React from 'react';

/**
 * Visualizes the New Architecture (JSI + Fabric + TurboModules).
 */
export default function ArchDiagram() {
  return (
    <svg viewBox="0 0 760 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="React Native New Architecture with JSI, Fabric, and Turbo Modules">
      <defs>
        <linearGradient id="arch-js" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id="arch-jsi" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
        <linearGradient id="arch-fabric" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="arch-turbo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F472B6" />
          <stop offset="100%" stopColor="#DB2777" />
        </linearGradient>
        <linearGradient id="arch-native" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <filter id="arch-shadow">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#4F46E5" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* JavaScript Layer */}
      <g filter="url(#arch-shadow)">
        <rect x="60" y="30" width="640" height="70" rx="16" fill="url(#arch-js)" />
        <text x="380" y="58" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" letterSpacing="0.12em">JAVASCRIPT LAYER</text>
        <text x="380" y="82" textAnchor="middle" fill="white" fontSize="17" fontWeight="800">React Components • Business Logic • Hooks</text>
      </g>

      {/* JSI layer - connector */}
      <g filter="url(#arch-shadow)">
        <rect x="60" y="130" width="640" height="60" rx="14" fill="url(#arch-jsi)" />
        <text x="380" y="158" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="0.1em">JSI • JAVASCRIPT INTERFACE</text>
        <text x="380" y="178" textAnchor="middle" fill="white" fontSize="13" opacity="0.95">C++ references • Synchronous • Zero serialization</text>
      </g>

      {/* Fabric & Turbo Modules side by side */}
      <g filter="url(#arch-shadow)">
        <rect x="60" y="220" width="310" height="110" rx="14" fill="url(#arch-fabric)" />
        <text x="215" y="248" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="0.1em">FABRIC</text>
        <text x="215" y="275" textAnchor="middle" fill="white" fontSize="17" fontWeight="800">New Renderer</text>
        <text x="215" y="297" textAnchor="middle" fill="white" fontSize="11.5" opacity="0.9">Concurrent rendering</text>
        <text x="215" y="314" textAnchor="middle" fill="white" fontSize="11.5" opacity="0.9">Priority-based updates</text>
      </g>

      <g filter="url(#arch-shadow)">
        <rect x="390" y="220" width="310" height="110" rx="14" fill="url(#arch-turbo)" />
        <text x="545" y="248" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="0.1em">TURBO MODULES</text>
        <text x="545" y="275" textAnchor="middle" fill="white" fontSize="17" fontWeight="800">Native APIs</text>
        <text x="545" y="297" textAnchor="middle" fill="white" fontSize="11.5" opacity="0.9">Lazy-loaded • Type-safe</text>
        <text x="545" y="314" textAnchor="middle" fill="white" fontSize="11.5" opacity="0.9">Codegen from TS specs</text>
      </g>

      {/* Native layer */}
      <g filter="url(#arch-shadow)">
        <rect x="60" y="358" width="640" height="46" rx="12" fill="url(#arch-native)" />
        <text x="380" y="382" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" letterSpacing="0.12em">NATIVE PLATFORM</text>
        <text x="380" y="398" textAnchor="middle" fill="white" fontSize="12" opacity="0.9">iOS (Swift/Obj-C) • Android (Kotlin/Java)</text>
      </g>

      {/* Flow arrows */}
      <g fill="#8B5CF6" opacity="0.5">
        <path d="M 376 100 L 380 120 L 384 100 Z" />
        <path d="M 376 190 L 380 210 L 384 190 Z" />
        <path d="M 213 330 L 217 348 L 221 330 Z" opacity="0" />
      </g>
    </svg>
  );
}
