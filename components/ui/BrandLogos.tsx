import { ComponentType } from "react";

export const BrandLogos: Record<string, ComponentType> = {
  "Aceternity UI": () => (
    <div className="w-6 h-6 mr-1 flex items-center justify-center bg-white rounded-md shrink-0 select-none">
      <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 20L12 4L20 20" />
        <path d="M9 14h6" />
      </svg>
    </div>
  ),
  "Gamity": () => (
    <svg className="w-6 h-6 mr-1 shrink-0" viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="gamity-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="50%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <path d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.5 2 9.1 2.33 7.85 2.92C9.17 4.1 10 5.8 10 7.7C10 11.23 7.23 14.1 3.8 14.28C4.54 18.66 8.38 22 12 22Z" fill="url(#gamity-grad)" />
    </svg>
  ),
  "Host IT": () => (
    <svg className="w-6 h-6 mr-1 shrink-0" viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="host-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="9" fill="url(#host-grad)" />
      <circle cx="12" cy="12" r="5" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M12 3v18M3 12h18" stroke="#ffffff" strokeWidth="1" strokeOpacity="0.4" />
    </svg>
  ),
  "Asteroid Kit": () => (
    <svg className="w-6 h-6 mr-1 shrink-0" viewBox="0 0 24 24" fill="none">
      <defs>
        <linearGradient id="asteroid-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#0891b2" />
        </linearGradient>
      </defs>
      <path d="M12 3L22 19H2L12 3Z" fill="url(#asteroid-grad)" />
      <path d="M12 7L19 18H5L12 7Z" fill="#000000" fillOpacity="0.3" />
      <circle cx="12" cy="13" r="2.5" fill="#ffffff" />
    </svg>
  ),
  "Nexus": () => (
    <svg className="w-6 h-6 mr-1 shrink-0 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="18" cy="18" r="2" />
      <circle cx="6" cy="18" r="2" />
      <line x1="12" y1="9" x2="6" y2="6" />
      <line x1="12" y1="9" x2="18" y2="6" />
      <line x1="12" y1="15" x2="6" y2="18" />
      <line x1="12" y1="15" x2="18" y2="18" />
    </svg>
  ),
  "Vertex Studio": () => (
    <svg className="w-6 h-6 mr-1 shrink-0 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  "Apex Tech": () => (
    <svg className="w-6 h-6 mr-1 shrink-0 text-orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="13 17 18 12 13 7" />
      <polyline points="6 17 11 12 6 7" />
    </svg>
  ),
  "Cloudify": () => (
    <svg className="w-6 h-6 mr-1 shrink-0 text-sky-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17.5 19A4.5 4.5 0 0 0 22 14.5c0-2.2-1.6-4.1-3.8-4.4C17.7 6.1 14.2 3 10 3c-4.4 0-8 3.6-8 8 0 .3 0 .7.1 1C.9 12.8 0 14.3 0 16c0 2.8 2.2 5 5 5h12.5z" />
    </svg>
  ),
  "Pulse AI": () => (
    <svg className="w-6 h-6 mr-1 shrink-0 text-rose-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  "Echo Lab": () => (
    <svg className="w-6 h-6 mr-1 shrink-0 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 2v20" />
      <path d="M17 5v14" />
      <path d="M22 9v6" />
      <path d="M7 5v14" />
      <path d="M2 9v6" />
    </svg>
  ),
  "Swift Delivery": () => (
    <svg className="w-6 h-6 mr-1 shrink-0 text-yellow-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  "Zenith Corp": () => (
    <svg className="w-6 h-6 mr-1 shrink-0 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M12 3v18" />
      <path d="M3 12h18" />
      <path d="M5.6 5.6l12.8 12.8" />
      <path d="M18.4 5.6L5.6 18.4" />
    </svg>
  ),
  "Nova Digital": () => (
    <svg className="w-6 h-6 mr-1 shrink-0 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M19.07 4.93l-1.41 1.41" />
      <path d="M6.34 17.66l-1.41 1.41" />
      <path d="M4.93 4.93l1.41 1.41" />
      <path d="M17.66 17.66l1.41 1.41" />
    </svg>
  ),
  "Quantum Logic": () => (
    <svg className="w-6 h-6 mr-1 shrink-0 text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3" transform="rotate(-30 12 12)" />
    </svg>
  ),
  "Stratos Cloud": () => (
    <svg className="w-6 h-6 mr-1 shrink-0 text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  "Horizon Media": () => (
    <svg className="w-6 h-6 mr-1 shrink-0 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M2 20h20" />
      <path d="M12 4v8" />
      <path d="M4.9 7.9l5.6 5.6" />
      <path d="M19.1 7.9l-5.6 5.6" />
      <path d="M12 12a4 4 0 0 1 0 8 4 4 0 0 1 0-8" fill="currentColor" fillOpacity="0.2" />
    </svg>
  )
};
