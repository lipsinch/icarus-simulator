import TalentCard from './TalentCard';
import type { Talent } from '../types/talent';

interface TierSectionProps {
  tierNumber: number;
  talents: Talent[];
  spentPoints: Record<string, number>;
  isTierLocked: boolean;
  isCapReached: boolean;
  onAdd: (id: string) => void;
}

export default function TierSection({
  tierNumber,
  talents,
  spentPoints,
  isTierLocked,
  isCapReached,
  onAdd
}: TierSectionProps) {
  
  // Filter talents to only show the ones belonging to this Tier
  const talentsInThisTier = talents.filter(t => t.tier === tierNumber);

  // If there is no data for this tier, we don't render the section
  if (talentsInThisTier.length === 0) return null;

  return (
    <section className="mb-16 relative">
      {/* Visual Header for the Tier */}
      <div className="flex items-center gap-4 mb-8">
        <h2 className="text-xl font-black italic uppercase tracking-tighter text-gray-500">
          Tier {tierNumber}
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-gray-800 to-transparent"></div>
        {isTierLocked && (
          <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest animate-pulse">
            Locked
          </span>
        )}
      </div>
      
      {/* THE GRID:
          We use grid-cols-4 to match the 4 columns in the Icarus Resource tree.
          gap-y-12 provides vertical space for the connector lines we'll add later.
      */}
      <div className="grid grid-cols-4 gap-y-16 gap-x-8 max-w-2xl mx-auto">
        {talentsInThisTier.map((talent) => {
          // Check if at least one prerequisite is met (OR logic)
          const prerequisitesMet = 
            talent.prerequisites.length === 0 || 
            talent.prerequisites.some(id => (spentPoints[id] || 0) > 0);

          // A talent is clickable ONLY if the tier is open AND prerequisites are met
          const isIconLocked = isTierLocked || !prerequisitesMet;

          return (
            <div 
              key={talent.id} 
              className="flex justify-center items-center"
              style={{
                gridColumn: talent.position.col,
                // Row is relative to the tier section
                gridRow: talent.position.row 
              }}
            >
              <TalentCard 
                talent={talent}
                currentPoints={spentPoints[talent.id] || 0}
                isLocked={isIconLocked}
                isCapReached={isCapReached}
                onAdd={onAdd}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}