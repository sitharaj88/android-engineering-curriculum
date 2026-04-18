import React from 'react';

/**
 * Layered Android app architecture: UI → ViewModel → Use Case → Repository → Sources.
 */
export default function AndroidArchDiagram() {
  return (
    <svg viewBox="0 0 760 460" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Layered Android architecture from Compose UI down to data sources">
      <defs>
        <linearGradient id="and-ui" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3DDC84" />
          <stop offset="100%" stopColor="#0F9D58" />
        </linearGradient>
        <linearGradient id="and-vm" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="100%" stopColor="#1A73E8" />
        </linearGradient>
        <linearGradient id="and-uc" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#7C3AED" />
        </linearGradient>
        <linearGradient id="and-repo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#FBBC04" />
          <stop offset="100%" stopColor="#F09300" />
        </linearGradient>
        <linearGradient id="and-src" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F472B6" />
          <stop offset="100%" stopColor="#DB2777" />
        </linearGradient>
        <filter id="and-shadow">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0F9D58" floodOpacity="0.18" />
        </filter>
      </defs>

      <g filter="url(#and-shadow)">
        <rect x="60" y="30" width="640" height="64" rx="14" fill="url(#and-ui)" />
        <text x="380" y="56" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="0.12em">PRESENTATION • COMPOSE UI</text>
        <text x="380" y="78" textAnchor="middle" fill="white" fontSize="15" fontWeight="800">Composables observe StateFlow • emit Intents</text>
      </g>

      <g filter="url(#and-shadow)">
        <rect x="60" y="118" width="640" height="64" rx="14" fill="url(#and-vm)" />
        <text x="380" y="144" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="0.12em">VIEWMODEL</text>
        <text x="380" y="166" textAnchor="middle" fill="white" fontSize="15" fontWeight="800">UiState · viewModelScope · SavedStateHandle</text>
      </g>

      <g filter="url(#and-shadow)">
        <rect x="60" y="206" width="640" height="64" rx="14" fill="url(#and-uc)" />
        <text x="380" y="232" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="0.12em">DOMAIN • USE CASES</text>
        <text x="380" y="254" textAnchor="middle" fill="white" fontSize="15" fontWeight="800">Pure Kotlin · Business rules · Flow / suspend</text>
      </g>

      <g filter="url(#and-shadow)">
        <rect x="60" y="294" width="640" height="64" rx="14" fill="url(#and-repo)" />
        <text x="380" y="320" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" letterSpacing="0.12em">REPOSITORY</text>
        <text x="380" y="342" textAnchor="middle" fill="white" fontSize="15" fontWeight="800">Single source of truth · cache + refresh</text>
      </g>

      <g filter="url(#and-shadow)">
        <rect x="60" y="382" width="200" height="60" rx="12" fill="url(#and-src)" />
        <text x="160" y="406" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">Retrofit · OkHttp</text>
        <text x="160" y="424" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">Network</text>
        <rect x="280" y="382" width="200" height="60" rx="12" fill="url(#and-src)" />
        <text x="380" y="406" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">Room · DataStore</text>
        <text x="380" y="424" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">Local</text>
        <rect x="500" y="382" width="200" height="60" rx="12" fill="url(#and-src)" />
        <text x="600" y="406" textAnchor="middle" fill="white" fontSize="13" fontWeight="700">Firebase · Remote</text>
        <text x="600" y="424" textAnchor="middle" fill="white" fontSize="11" opacity="0.9">Cloud</text>
      </g>

      <g fill="#0F9D58" opacity="0.55">
        <path d="M 376 94 L 380 112 L 384 94 Z" />
        <path d="M 376 182 L 380 200 L 384 182 Z" />
        <path d="M 376 270 L 380 288 L 384 270 Z" />
        <path d="M 376 358 L 380 376 L 384 358 Z" />
      </g>
    </svg>
  );
}
