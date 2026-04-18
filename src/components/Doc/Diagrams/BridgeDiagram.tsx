import React from 'react';

/**
 * Visualizes the legacy React Native Bridge architecture.
 * JS Thread <-> Bridge (JSON) <-> Native Thread
 */
export default function BridgeDiagram() {
  return (
    <svg viewBox="0 0 720 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="React Native Bridge architecture">
      <defs>
        <linearGradient id="bd-js" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
        <linearGradient id="bd-native" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="bd-bridge" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="50%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <filter id="bd-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#4F46E5" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* JS Thread card */}
      <g filter="url(#bd-shadow)">
        <rect x="40" y="90" width="220" height="140" rx="20" fill="url(#bd-js)" />
        <text x="150" y="130" textAnchor="middle" fill="white" fontSize="14" fontWeight="700" letterSpacing="0.08em">JS THREAD</text>
        <text x="150" y="162" textAnchor="middle" fill="white" fontSize="20" fontWeight="800">JavaScript</text>
        <text x="150" y="190" textAnchor="middle" fill="white" fontSize="13" opacity="0.9">Hermes / JSC</text>
        <text x="150" y="210" textAnchor="middle" fill="white" fontSize="12" opacity="0.8">Business Logic • React</text>
      </g>

      {/* Native Thread card */}
      <g filter="url(#bd-shadow)">
        <rect x="460" y="90" width="220" height="140" rx="20" fill="url(#bd-native)" />
        <text x="570" y="130" textAnchor="middle" fill="white" fontSize="14" fontWeight="700" letterSpacing="0.08em">NATIVE THREAD</text>
        <text x="570" y="162" textAnchor="middle" fill="white" fontSize="20" fontWeight="800">iOS / Android</text>
        <text x="570" y="190" textAnchor="middle" fill="white" fontSize="13" opacity="0.9">UIKit / Views</text>
        <text x="570" y="210" textAnchor="middle" fill="white" fontSize="12" opacity="0.8">Layout • Rendering</text>
      </g>

      {/* Bridge (serialized JSON) */}
      <rect x="265" y="140" width="190" height="40" rx="20" fill="url(#bd-bridge)" opacity="0.15" />
      <rect x="265" y="140" width="190" height="40" rx="20" fill="none" stroke="url(#bd-bridge)" strokeWidth="2" strokeDasharray="4 4" />
      <text x="360" y="165" textAnchor="middle" fill="#6366F1" fontSize="13" fontWeight="700">JSON Bridge</text>

      {/* Flow arrows */}
      <g stroke="#6366F1" strokeWidth="2" fill="none">
        <path d="M 260 155 L 270 160 L 260 165" />
        <path d="M 460 155 L 450 160 L 460 165" />
      </g>

      {/* Labels */}
      <text x="360" y="70" textAnchor="middle" fill="#64748B" fontSize="12" fontWeight="500">Asynchronous • Serialized • Single-threaded</text>
      <text x="360" y="270" textAnchor="middle" fill="#94A3B8" fontSize="11">⚠ Bottleneck: every message must cross the bridge as JSON</text>
    </svg>
  );
}
