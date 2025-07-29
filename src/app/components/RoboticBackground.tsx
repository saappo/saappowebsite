import React from 'react';
import Image from 'next/image';

export function RoboticBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Robots background image */}
      <div className="absolute inset-0">
        <Image
          src="/background robots.webp"
          alt="Robotic background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>
      
      {/* Subtle overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50/30 via-blue-50/30 to-green-100/30"></div>
      
      {/* Subtle animated elements */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-green-400 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-green-500 rounded-full opacity-25 animate-pulse delay-2000"></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-500 rounded-full opacity-35 animate-pulse delay-1500"></div>
    </div>
  );
} 