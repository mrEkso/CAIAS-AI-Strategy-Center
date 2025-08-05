interface GridBackgroundProps {
  className?: string;
  opacity?: number;
  size?: number;
}

export function GridBackground({ 
  className = "", 
  opacity = 0.1, 
  size = 40 
}: GridBackgroundProps) {
  const gridPattern = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <defs>
        <pattern id="grid" width="${size}" height="${size}" patternUnits="userSpaceOnUse">
          <path d="M ${size} 0 L 0 0 0 ${size}" fill="none" stroke="rgba(59, 130, 246, ${opacity})" stroke-width="0.5"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  `;

  const backgroundImage = `url("data:image/svg+xml,${encodeURIComponent(gridPattern)}")`;

  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage,
        backgroundSize: `${size}px ${size}px`,
        zIndex: 0
      }}
    />
  );
}