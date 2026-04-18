import React from 'react';

/**
 * OAuth 2.0 / JWT authentication flow with refresh tokens.
 */
export default function AuthFlowDiagram() {
  return (
    <svg viewBox="0 0 820 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="OAuth 2.0 authentication flow with JWT and refresh tokens">
      <defs>
        <linearGradient id="au-app" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#FBBF24"/><stop offset="100%" stopColor="#F59E0B"/></linearGradient>
        <linearGradient id="au-auth" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#A78BFA"/><stop offset="100%" stopColor="#7C3AED"/></linearGradient>
        <linearGradient id="au-api" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#34D399"/><stop offset="100%" stopColor="#059669"/></linearGradient>
        <filter id="au-sh"><feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#4F46E5" floodOpacity="0.15"/></filter>
      </defs>

      {/* 3 columns */}
      <g filter="url(#au-sh)">
        <rect x="30" y="20" width="200" height="60" rx="14" fill="url(#au-app)"/>
        <text x="130" y="45" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" letterSpacing="0.1em">CLIENT</text>
        <text x="130" y="65" textAnchor="middle" fill="white" fontSize="15" fontWeight="800">Mobile App</text>
      </g>
      <g filter="url(#au-sh)">
        <rect x="310" y="20" width="200" height="60" rx="14" fill="url(#au-auth)"/>
        <text x="410" y="45" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" letterSpacing="0.1em">AUTHORIZATION</text>
        <text x="410" y="65" textAnchor="middle" fill="white" fontSize="15" fontWeight="800">Auth Server</text>
      </g>
      <g filter="url(#au-sh)">
        <rect x="590" y="20" width="200" height="60" rx="14" fill="url(#au-api)"/>
        <text x="690" y="45" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" letterSpacing="0.1em">RESOURCE</text>
        <text x="690" y="65" textAnchor="middle" fill="white" fontSize="15" fontWeight="800">API Server</text>
      </g>

      {/* Lifelines */}
      <g stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 3">
        <line x1="130" y1="90" x2="130" y2="380"/>
        <line x1="410" y1="90" x2="410" y2="380"/>
        <line x1="690" y1="90" x2="690" y2="380"/>
      </g>

      {/* Flow steps */}
      {[
        {y:110, from:130, to:410, text:'1. POST /login  (email, password)', color:'#F59E0B'},
        {y:150, from:410, to:130, text:'2. access_token + refresh_token', color:'#7C3AED'},
        {y:195, from:130, to:690, text:'3. GET /data  (Authorization: Bearer <access>)', color:'#059669'},
        {y:235, from:690, to:130, text:'4. 200 OK  (data payload)', color:'#10B981'},
        {y:280, from:690, to:130, text:'5. 401 Unauthorized  (token expired)', color:'#EF4444'},
        {y:320, from:130, to:410, text:'6. POST /refresh  (refresh_token)', color:'#F59E0B'},
        {y:360, from:410, to:130, text:'7. new access_token', color:'#7C3AED'},
      ].map((s,i)=>{
        const fromX = s.from;
        const toX = s.to;
        const arrowX = toX > fromX ? toX - 8 : toX + 8;
        return (
          <g key={i}>
            <line x1={fromX} y1={s.y} x2={toX} y2={s.y} stroke={s.color} strokeWidth="2"/>
            <polygon points={toX > fromX ? `${arrowX},${s.y-5} ${toX},${s.y} ${arrowX},${s.y+5}` : `${arrowX},${s.y-5} ${toX},${s.y} ${arrowX},${s.y+5}`} fill={s.color}/>
            <rect x={(fromX+toX)/2 - 130} y={s.y - 20} width="260" height="18" rx="4" fill="white" stroke={s.color} strokeWidth="1" opacity="0.95"/>
            <text x={(fromX+toX)/2} y={s.y - 7} textAnchor="middle" fill={s.color} fontSize="11" fontWeight="600">{s.text}</text>
          </g>
        );
      })}
    </svg>
  );
}
