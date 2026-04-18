import React from 'react';

/**
 * Reanimated worklet model: JS thread drives animation, worklets run on UI thread.
 */
export default function AnimationThreadDiagram() {
  return (
    <svg viewBox="0 0 760 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Reanimated worklet model">
      <defs>
        <linearGradient id="an-js" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FBBF24"/><stop offset="100%" stopColor="#F59E0B"/></linearGradient>
        <linearGradient id="an-ui" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#34D399"/><stop offset="100%" stopColor="#059669"/></linearGradient>
        <filter id="an-sh"><feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="#4F46E5" floodOpacity="0.15"/></filter>
      </defs>

      {/* JS Thread */}
      <g filter="url(#an-sh)">
        <rect x="30" y="30" width="330" height="260" rx="16" fill="url(#an-js)"/>
        <text x="195" y="60" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="0.1em">JS THREAD (slow, busy)</text>
        <rect x="60" y="85" width="270" height="50" rx="8" fill="rgba(255,255,255,0.25)"/>
        <text x="195" y="107" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">React render</text>
        <text x="195" y="123" textAnchor="middle" fill="white" fontSize="10" opacity="0.9">Components • Hooks • Business logic</text>
        <rect x="60" y="150" width="270" height="50" rx="8" fill="rgba(255,255,255,0.25)"/>
        <text x="195" y="172" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">useSharedValue(0)</text>
        <text x="195" y="188" textAnchor="middle" fill="white" fontSize="10" opacity="0.9">Shared memory bridge to UI thread</text>
        <rect x="60" y="215" width="270" height="50" rx="8" fill="rgba(255,255,255,0.25)"/>
        <text x="195" y="237" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">Gesture handlers</text>
        <text x="195" y="253" textAnchor="middle" fill="white" fontSize="10" opacity="0.9">Declarative gesture config</text>
      </g>

      {/* Arrow */}
      <g stroke="#6366F1" strokeWidth="2" fill="none" strokeLinecap="round">
        <line x1="370" y1="160" x2="400" y2="160"/>
        <polyline points="393,153 402,160 393,167"/>
        <line x1="400" y1="160" x2="370" y2="160" transform="translate(30,0)"/>
      </g>
      <text x="395" y="145" textAnchor="middle" fill="#6366F1" fontSize="10" fontWeight="600">shared</text>
      <text x="395" y="180" textAnchor="middle" fill="#6366F1" fontSize="10" fontWeight="600">memory</text>

      {/* UI Thread */}
      <g filter="url(#an-sh)">
        <rect x="430" y="30" width="300" height="260" rx="16" fill="url(#an-ui)"/>
        <text x="580" y="60" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="0.1em">UI THREAD (60–120fps)</text>
        <rect x="460" y="85" width="240" height="50" rx="8" fill="rgba(255,255,255,0.25)"/>
        <text x="580" y="107" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">Worklets ('worklet')</text>
        <text x="580" y="123" textAnchor="middle" fill="white" fontSize="10" opacity="0.9">Tiny JS fns run here natively</text>
        <rect x="460" y="150" width="240" height="50" rx="8" fill="rgba(255,255,255,0.25)"/>
        <text x="580" y="172" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">useAnimatedStyle</text>
        <text x="580" y="188" textAnchor="middle" fill="white" fontSize="10" opacity="0.9">Styles recomputed per frame</text>
        <rect x="460" y="215" width="240" height="50" rx="8" fill="rgba(255,255,255,0.25)"/>
        <text x="580" y="237" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">Native rendering</text>
        <text x="580" y="253" textAnchor="middle" fill="white" fontSize="10" opacity="0.9">No bridge, no jank</text>
      </g>

      <text x="380" y="310" textAnchor="middle" fill="#64748B" fontSize="12" fontWeight="500">Animation logic runs on UI thread → 60–120fps guaranteed, even when JS is busy</text>
    </svg>
  );
}
