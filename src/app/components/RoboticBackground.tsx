import React from 'react';

export function RoboticBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base PCB background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-green-100 opacity-80"></div>
      
      {/* Circuit board pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* PCB substrate pattern */}
          <pattern id="pcb-substrate" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect width="40" height="40" fill="#f0f9ff" opacity="0.3"/>
            <rect x="0" y="0" width="40" height="1" fill="#4ade80" opacity="0.2"/>
            <rect x="0" y="0" width="1" height="40" fill="#4ade80" opacity="0.2"/>
          </pattern>
          
          {/* Circuit traces pattern */}
          <pattern id="circuit-traces" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            {/* Main power traces */}
            <path d="M10 20 L190 20 M10 40 L190 40 M10 60 L190 60 M10 80 L190 80 M10 100 L190 100 M10 120 L190 120 M10 140 L190 140 M10 160 L190 160 M10 180 L190 180" 
                  stroke="#22c55e" strokeWidth="3" fill="none" opacity="0.4"/>
            
            {/* Vertical traces */}
            <path d="M20 10 L20 190 M40 10 L40 190 M60 10 L60 190 M80 10 L80 190 M100 10 L100 190 M120 10 L120 190 M140 10 L140 190 M160 10 L160 190 M180 10 L180 190" 
                  stroke="#22c55e" strokeWidth="3" fill="none" opacity="0.4"/>
            
            {/* Diagonal traces */}
            <path d="M10 10 L190 190 M190 10 L10 190" stroke="#22c55e" strokeWidth="2" fill="none" opacity="0.3"/>
            
            {/* Curved traces */}
            <path d="M30 30 Q50 10 70 30 T110 30" stroke="#22c55e" strokeWidth="2" fill="none" opacity="0.3"/>
            <path d="M130 30 Q150 10 170 30" stroke="#22c55e" strokeWidth="2" fill="none" opacity="0.3"/>
            
            {/* Connection points */}
            <circle cx="20" cy="20" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="40" cy="20" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="60" cy="20" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="80" cy="20" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="100" cy="20" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="120" cy="20" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="140" cy="20" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="160" cy="20" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="180" cy="20" r="4" fill="#22c55e" opacity="0.6"/>
            
            <circle cx="20" cy="40" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="40" cy="40" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="60" cy="40" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="80" cy="40" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="100" cy="40" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="120" cy="40" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="140" cy="40" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="160" cy="40" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="180" cy="40" r="4" fill="#22c55e" opacity="0.6"/>
            
            <circle cx="20" cy="60" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="40" cy="60" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="60" cy="60" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="80" cy="60" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="100" cy="60" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="120" cy="60" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="140" cy="60" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="160" cy="60" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="180" cy="60" r="4" fill="#22c55e" opacity="0.6"/>
            
            <circle cx="20" cy="80" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="40" cy="80" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="60" cy="80" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="80" cy="80" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="100" cy="80" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="120" cy="80" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="140" cy="80" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="160" cy="80" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="180" cy="80" r="4" fill="#22c55e" opacity="0.6"/>
            
            <circle cx="20" cy="100" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="40" cy="100" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="60" cy="100" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="80" cy="100" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="100" cy="100" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="120" cy="100" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="140" cy="100" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="160" cy="100" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="180" cy="100" r="4" fill="#22c55e" opacity="0.6"/>
            
            <circle cx="20" cy="120" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="40" cy="120" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="60" cy="120" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="80" cy="120" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="100" cy="120" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="120" cy="120" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="140" cy="120" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="160" cy="120" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="180" cy="120" r="4" fill="#22c55e" opacity="0.6"/>
            
            <circle cx="20" cy="140" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="40" cy="140" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="60" cy="140" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="80" cy="140" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="100" cy="140" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="120" cy="140" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="140" cy="140" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="160" cy="140" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="180" cy="140" r="4" fill="#22c55e" opacity="0.6"/>
            
            <circle cx="20" cy="160" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="40" cy="160" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="60" cy="160" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="80" cy="160" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="100" cy="160" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="120" cy="160" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="140" cy="160" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="160" cy="160" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="180" cy="160" r="4" fill="#22c55e" opacity="0.6"/>
            
            <circle cx="20" cy="180" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="40" cy="180" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="60" cy="180" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="80" cy="180" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="100" cy="180" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="120" cy="180" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="140" cy="180" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="160" cy="180" r="4" fill="#22c55e" opacity="0.6"/>
            <circle cx="180" cy="180" r="4" fill="#22c55e" opacity="0.6"/>
          </pattern>
        </defs>
        
        {/* PCB substrate */}
        <rect width="100%" height="100%" fill="url(#pcb-substrate)"/>
        
        {/* Circuit traces */}
        <rect width="100%" height="100%" fill="url(#circuit-traces)"/>
        
        {/* Additional circuit components */}
        {/* Resistors */}
        <rect x="50" y="50" width="20" height="8" fill="#374151" opacity="0.7"/>
        <rect x="52" y="52" width="16" height="4" fill="#22c55e" opacity="0.8"/>
        
        <rect x="150" y="120" width="20" height="8" fill="#374151" opacity="0.7"/>
        <rect x="152" y="122" width="16" height="4" fill="#22c55e" opacity="0.8"/>
        
        <rect x="250" y="200" width="20" height="8" fill="#374151" opacity="0.7"/>
        <rect x="252" y="202" width="16" height="4" fill="#22c55e" opacity="0.8"/>
        
        {/* Capacitors */}
        <rect x="100" y="80" width="12" height="6" fill="#374151" opacity="0.7"/>
        <rect x="102" y="82" width="8" height="2" fill="#22c55e" opacity="0.8"/>
        
        <rect x="300" y="150" width="12" height="6" fill="#374151" opacity="0.7"/>
        <rect x="302" y="152" width="8" height="2" fill="#22c55e" opacity="0.8"/>
        
        {/* IC Chips */}
        <rect x="200" y="100" width="24" height="16" fill="#1f2937" opacity="0.8"/>
        <rect x="202" y="102" width="20" height="12" fill="#22c55e" opacity="0.6"/>
        <rect x="204" y="104" width="4" height="2" fill="#374151" opacity="0.9"/>
        <rect x="210" y="104" width="4" height="2" fill="#374151" opacity="0.9"/>
        <rect x="216" y="104" width="4" height="2" fill="#374151" opacity="0.9"/>
        <rect x="204" y="108" width="4" height="2" fill="#374151" opacity="0.9"/>
        <rect x="210" y="108" width="4" height="2" fill="#374151" opacity="0.9"/>
        <rect x="216" y="108" width="4" height="2" fill="#374151" opacity="0.9"/>
        <rect x="204" y="112" width="4" height="2" fill="#374151" opacity="0.9"/>
        <rect x="210" y="112" width="4" height="2" fill="#374151" opacity="0.9"/>
        <rect x="216" y="112" width="4" height="2" fill="#374151" opacity="0.9"/>
        
        <rect x="400" y="250" width="24" height="16" fill="#1f2937" opacity="0.8"/>
        <rect x="402" y="252" width="20" height="12" fill="#22c55e" opacity="0.6"/>
        <rect x="404" y="254" width="4" height="2" fill="#374151" opacity="0.9"/>
        <rect x="410" y="254" width="4" height="2" fill="#374151" opacity="0.9"/>
        <rect x="416" y="254" width="4" height="2" fill="#374151" opacity="0.9"/>
        <rect x="404" y="258" width="4" height="2" fill="#374151" opacity="0.9"/>
        <rect x="410" y="258" width="4" height="2" fill="#374151" opacity="0.9"/>
        <rect x="416" y="258" width="4" height="2" fill="#374151" opacity="0.9"/>
        <rect x="404" y="262" width="4" height="2" fill="#374151" opacity="0.9"/>
        <rect x="410" y="262" width="4" height="2" fill="#374151" opacity="0.9"/>
        <rect x="416" y="262" width="4" height="2" fill="#374151" opacity="0.9"/>
        
        {/* Diodes */}
        <rect x="350" y="80" width="8" height="6" fill="#374151" opacity="0.7"/>
        <rect x="352" y="82" width="4" height="2" fill="#22c55e" opacity="0.8"/>
        
        <rect x="450" y="180" width="8" height="6" fill="#374151" opacity="0.7"/>
        <rect x="452" y="182" width="4" height="2" fill="#22c55e" opacity="0.8"/>
        
        {/* LED indicators */}
        <circle cx="500" cy="100" r="6" fill="#22c55e" opacity="0.8"/>
        <circle cx="500" cy="100" r="3" fill="#dcfce7" opacity="0.9"/>
        
        <circle cx="600" cy="300" r="6" fill="#22c55e" opacity="0.8"/>
        <circle cx="600" cy="300" r="3" fill="#dcfce7" opacity="0.9"/>
        
        <circle cx="700" cy="150" r="6" fill="#22c55e" opacity="0.8"/>
        <circle cx="700" cy="150" r="3" fill="#dcfce7" opacity="0.9"/>
        
        {/* Power connectors */}
        <rect x="550" y="200" width="16" height="12" fill="#1f2937" opacity="0.8"/>
        <rect x="552" y="202" width="12" height="8" fill="#374151" opacity="0.9"/>
        <rect x="554" y="204" width="8" height="4" fill="#22c55e" opacity="0.7"/>
        
        <rect x="650" y="350" width="16" height="12" fill="#1f2937" opacity="0.8"/>
        <rect x="652" y="352" width="12" height="8" fill="#374151" opacity="0.9"/>
        <rect x="654" y="354" width="8" height="4" fill="#22c55e" opacity="0.7"/>
        
        {/* Ground planes */}
        <rect x="0" y="0" width="1200" height="20" fill="#22c55e" opacity="0.3"/>
        <rect x="0" y="780" width="1200" height="20" fill="#22c55e" opacity="0.3"/>
        <rect x="0" y="0" width="20" height="800" fill="#22c55e" opacity="0.3"/>
        <rect x="1180" y="0" width="20" height="800" fill="#22c55e" opacity="0.3"/>
        
        {/* Additional trace patterns */}
        <path d="M100 300 L300 300 L300 400 L500 400 L500 500 L700 500" stroke="#22c55e" strokeWidth="4" fill="none" opacity="0.4"/>
        <path d="M200 350 L400 350 L400 450 L600 450" stroke="#22c55e" strokeWidth="4" fill="none" opacity="0.4"/>
        <path d="M300 500 L500 500 L500 600 L700 600" stroke="#22c55e" strokeWidth="4" fill="none" opacity="0.4"/>
        
        {/* Signal traces */}
        <path d="M150 250 Q200 200 250 250 T350 250" stroke="#22c55e" strokeWidth="2" fill="none" opacity="0.3"/>
        <path d="M450 350 Q500 300 550 350 T650 350" stroke="#22c55e" strokeWidth="2" fill="none" opacity="0.3"/>
        <path d="M750 450 Q800 400 850 450 T950 450" stroke="#22c55e" strokeWidth="2" fill="none" opacity="0.3"/>
      </svg>
      
      {/* Subtle animated elements */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-green-400 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-green-500 rounded-full opacity-25 animate-pulse delay-2000"></div>
      <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-blue-500 rounded-full opacity-35 animate-pulse delay-1500"></div>
    </div>
  );
} 