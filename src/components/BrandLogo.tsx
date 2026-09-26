export function BrandLogo({ size = 'md', showWordmark = true }: { size?: 'sm' | 'md' | 'lg'; showWordmark?: boolean }) {
  const dim = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-11 h-11' : 'w-9 h-9';
  const svgSize = size === 'sm' ? 22 : size === 'lg' ? 32 : 26;

  return (
    <div className="flex items-center gap-3 group select-none cursor-pointer">
      {/* DW Geometric Apex Monogram */}
      <div className={`relative ${dim} rounded-xl bg-[#0c101a] border border-[#1a2336] flex items-center justify-center transition-all duration-300 group-hover:border-[#00a8ff] group-hover:shadow-[0_0_18px_rgba(0,168,255,0.35)]`}>
        <svg 
          width={svgSize} 
          height={svgSize} 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Architectural 'D' in Pure White */}
          <path 
            d="M6 7V25H13.5C18.5 25 21.5 21 21.5 16C21.5 11 18.5 7 13.5 7H6ZM9.5 10.5H13C16 10.5 18 12.8 18 16C18 19.2 16 21.5 13 21.5H9.5V10.5Z" 
            fill="#FFFFFF"
          />
          {/* Interlocking 'W' in Sky Blue */}
          <path 
            d="M13 25L17.5 13L21 20.5L24.5 13L29 25" 
            stroke="#00a8ff" 
            strokeWidth="2.6" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          {/* Apex node */}
          <circle cx="21" cy="20.5" r="1.6" fill="#00a8ff" stroke="#ffffff" strokeWidth="0.8" />
        </svg>

        {/* Status Glow Dot */}
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#00a8ff] rounded-full animate-ping opacity-60" />
        <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-[#00a8ff] rounded-full" />
      </div>

      {/* Wordmark */}
      {showWordmark && (
        <div className="flex flex-col text-left">
          <span className="font-display font-extrabold text-lg sm:text-xl tracking-wider text-white uppercase leading-none transition-colors group-hover:text-[#00a8ff]">
            DAVE WAIHENYA
          </span>
          <span className="text-[10px] font-sans font-bold tracking-[0.16em] text-[#00a8ff] uppercase leading-tight mt-1">
            SOFTWARE & AI BUILDER
          </span>
        </div>
      )}
    </div>
  );
}
