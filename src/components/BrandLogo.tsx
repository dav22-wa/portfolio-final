import React from 'react';

export interface BrandLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showWordmark?: boolean; // Defaults to false as requested: standalone symbol only
  variant?: 'default' | 'monochrome-white' | 'monochrome-black' | 'cyan';
  className?: string;
  withContainer?: boolean;
}

/**
 * Pure SVG vector path of David Waihenya's Apex Ascent Symbol:
 * - Blade 1 (Left): Solid Architectural D Foundation (BUILD)
 * - Blade 2 (Right): Soaring Kinetic W Apex Vector (SOLVE → GROW)
 * - Channel: Uniform 8-unit 45° negative-space lightning channel
 */
export function ApexLogoSvg({
  size = 32,
  variant = 'default',
  className = '',
}: {
  size?: number | string;
  variant?: 'default' | 'monochrome-white' | 'monochrome-black' | 'cyan';
  className?: string;
}) {
  let leftFill = '#FFFFFF';
  let rightFill = '#00A8FF';

  if (variant === 'monochrome-white') {
    leftFill = '#FFFFFF';
    rightFill = '#FFFFFF';
  } else if (variant === 'monochrome-black') {
    leftFill = '#000000';
    rightFill = '#000000';
  } else if (variant === 'cyan') {
    leftFill = '#00A8FF';
    rightFill = '#00A8FF';
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="David Waihenya Logo Symbol"
    >
      {/* Blade 1 (Foundation / Structural 'D' Monolith) */}
      <path
        d="M16 22 H36 L56 50 L36 78 H16 Z"
        fill={leftFill}
        className="transition-colors duration-300"
      />
      {/* Blade 2 (Kinetic 'W' Apex Vector & Upward Ascent) */}
      <path
        d="M44 22 H60 L80 14 L88 48 L68 78 H44 L64 50 Z"
        fill={rightFill}
        className="transition-colors duration-300"
      />
    </svg>
  );
}

export function BrandLogo({
  size = 'md',
  showWordmark = false, // Set to FALSE by default so only the standalone symbol appears in navbar & across app
  variant = 'default',
  className = '',
  withContainer = true,
}: BrandLogoProps) {
  // Container & Icon dimensions
  const dims = {
    xs: { container: 'w-6 h-6 rounded-md', icon: 16 },
    sm: { container: 'w-8 h-8 rounded-lg', icon: 20 },
    md: { container: 'w-10 h-10 rounded-xl', icon: 26 },
    lg: { container: 'w-12 h-12 rounded-xl', icon: 32 },
    xl: { container: 'w-16 h-16 rounded-2xl', icon: 44 },
    hero: { container: 'w-24 h-24 rounded-3xl', icon: 68 },
  }[size];

  const containerBg =
    variant === 'monochrome-black'
      ? 'bg-neutral-100 border border-neutral-300 shadow-sm'
      : 'bg-[#0c101d] border border-[#1a2336] group-hover:border-[#00a8ff] group-hover:shadow-[0_0_20px_rgba(0,168,255,0.3)]';

  return (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {withContainer ? (
        <div
          className={`relative ${dims.container} ${containerBg} flex items-center justify-center transition-all duration-300 transform group-hover:scale-105`}
        >
          <ApexLogoSvg size={dims.icon} variant={variant} />
        </div>
      ) : (
        <ApexLogoSvg size={dims.icon} variant={variant} />
      )}

      {/* Optional full Wordmark Lockup (only rendered when explicitly requested) */}
      {showWordmark && (
        <div className="flex flex-col text-left">
          <span
            className={`font-sans font-black tracking-wider uppercase leading-none transition-colors ${
              variant === 'monochrome-black'
                ? 'text-black'
                : 'text-white group-hover:text-[#00a8ff]'
            } ${
              size === 'sm'
                ? 'text-sm'
                : size === 'lg'
                ? 'text-xl'
                : size === 'xl' || size === 'hero'
                ? 'text-2xl'
                : 'text-base sm:text-lg'
            }`}
          >
            DAVID WAIHENYA
          </span>
          <span
            className={`text-[9px] sm:text-[10px] font-mono font-bold tracking-[0.2em] uppercase mt-1 ${
              variant === 'monochrome-black' ? 'text-neutral-500' : 'text-[#00a8ff]'
            }`}
          >
            BUILD · SOLVE · GROW
          </span>
        </div>
      )}
    </div>
  );
}
