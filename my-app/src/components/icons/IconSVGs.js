import React from "react";

export const icons = {
  intro: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="12" cy="7" r="4" stroke="currentColor" />
      <path d="M5.5 21a7.5 7.5 0 0113 0" />
    </svg>
  ),
  skills: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  travel: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M21 21l-6-6M3 10a7 7 0 1014 0 7 7 0 00-14 0z" />
    </svg>
  ),
  projects: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <rect x="3" y="3" width="7" height="7" rx="2" />
      <rect x="14" y="3" width="7" height="7" rx="2" />
      <rect x="14" y="14" width="7" height="7" rx="2" />
      <rect x="3" y="14" width="7" height="7" rx="2" />
    </svg>
  ),
  mission: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path d="M12 21C12 21 7 16.5 7 11.5C7 8.5 9.5 6 12 6C14.5 6 17 8.5 17 11.5C17 16.5 12 21 12 21Z" />
      <circle cx="12" cy="11.5" r="2" />
    </svg>
  ),
  work: () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 3v4M8 3v4" />
    </svg>
  ),
};
