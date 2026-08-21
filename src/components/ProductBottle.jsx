import React from 'react';

const BOTTLE_IMAGES = {
  '1l': '/assets/1l.png',
  '3l': '/assets/3l.png',
  '5l': '/assets/5l.png',
  '25l': '/assets/25l.png',
};

export default function ProductBottle({ size = '5l', className = '', style = {} }) {
  const imgSrc = BOTTLE_IMAGES[size.toLowerCase()] || BOTTLE_IMAGES['5l'];

  return (
    <img
      src={imgSrc}
      alt={`Nutrigold ${size.toUpperCase()} Pure Refined Soya Oil`}
      className={`object-contain transition-transform duration-300 ${className}`}
      style={style}
    />
  );
}
