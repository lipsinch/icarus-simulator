import { Lock } from 'lucide-react';
import type { Talent } from '../types/talent';

interface TalentCardProps {
  talent: Talent;
  currentPoints: number;
  isLocked: boolean;
  isCapReached: boolean;
  onAdd: (id: string) => void;
}

export default function TalentCard({
  talent,
  currentPoints,
  isLocked,
  isCapReached,
  onAdd
}: TalentCardProps) {

  const isActive = currentPoints > 0;
  const isMaxed = currentPoints >= talent.maxRank;
  const canClick = !isLocked && !isCapReached && !isMaxed;

  const iconPath = `/icons/talents/${talent.id}.png`;

  return (
    <div className="relative">
      <button
        onClick={() => onAdd(talent.id)}
        disabled={!canClick && !isActive}
        /* - grid: Forces the button to treat its children as grid items, ignoring line-height.
          - overflow-hidden: Ensures the image can't leak out.
          - p-0 m-0: The standard resets.
        */
        className={`relative w-20 h-20 p-0 m-0 grid place-items-center border-[0.5px] overflow-hidden
    ${isLocked
            ? 'border-white/10 bg-gray-900/40 grayscale opacity-60 cursor-not-allowed'
            : isActive
              ? 'border-[#d45d12] bg-[#d45d12]/10'
              : 'border-white/20 bg-gray-800/30 hover:border-white/40 hover:bg-gray-800/60'}
  `}
      >
        {/* The Icon 
      - block: Crucial. By default, images are 'inline', which adds a gap at the bottom for text.
      - w-full h-full: Forces it to fill the grid cell.
  */}
        <img
          src={iconPath}
          alt={talent.name}
          className={`block w-full h-full object-contain transition-all duration-500 z-10 ${isActive
              ? 'brightness-110 contrast-110'
              : 'brightness-[0.25] opacity-50 group-hover:brightness-50'
            }`}
          onError={(e) => {
            (e.target as HTMLImageElement).src = 'https://via.placeholder.com/80?text=MISSING';
          }}
        />

        {/* Overlay elements remain relative to the button container */}
        <div className={`absolute top-0 left-0 z-20 px-1.5 py-0.5 text-[10px] font-mono font-bold border-b-[0.5px] border-r-[0.5px]
    ${isActive ? 'border-[#d45d12] text-[#d45d12] bg-black/80' : 'border-white/10 text-gray-500 bg-black/60'}
  `}>
          {currentPoints}/{talent.maxRank}
        </div>
      </button>
    </div>
  );
}