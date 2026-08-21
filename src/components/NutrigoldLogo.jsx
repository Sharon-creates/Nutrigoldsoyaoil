import React from 'react';

export default function NutrigoldLogo({ className = 'h-10' }) {
  return (
    <img
      src="/assets/logo.png"
      alt="Nutrigold"
      className={`object-contain ${className}`}
    />
  );
}
