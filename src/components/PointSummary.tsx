import { RotateCcw, Zap, Lock, Unlock } from 'lucide-react';

interface PointSummaryProps {
  totalSpent: number;
  resetAction: () => void;
}

export default function PointSummary({ totalSpent, resetAction }: PointSummaryProps) {
  // 1. Calculations
  const maxPoints = 90;

  const tiers = [
    { label: "T1", unlock: 0 },
    { label: "T2", unlock: 4 },
    { label: "T3", unlock: 8 },
    { label: "T4", unlock: 12 },
  ];

  const getSegmentWidth = (segmentIndex: number) => {
    const pointsPerSegment = 4;
    const startPoint = segmentIndex * pointsPerSegment;
    // How many points in THIS specific 4-point window?
    const pointsInThisSegment = Math.max(0, Math.min(pointsPerSegment, totalSpent - startPoint));
    return (pointsInThisSegment / pointsPerSegment) * 100;
  };

  return (
    <div className="bg-gray-900 border border-gray-800 p-6 rounded-xl mb-10 shadow-2xl text-white">
      <div className="flex flex-col gap-6">
        
        {/* Top Row: Labels and Reset */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-md">
              <Zap size={14} className="text-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.6)]" />
              <span className="text-lg font-mono font-bold text-orange-500">{totalSpent} <span className="text-gray-600 text-sm">/ {maxPoints}</span></span>
            </div>
            <h3 className="text-xs uppercase tracking-tighter text-gray-400 font-bold">Progression Engine</h3>
          </div>

          <button 
            onClick={resetAction} 
            className="flex items-center gap-2 px-3 py-1.5 border border-red-900/50 text-red-500 text-[10px] uppercase font-black rounded hover:bg-red-950/30 transition-all"
          >
            <RotateCcw size={12} /> Reset Build
          </button>
        </div>

        {/* The 4-Segment Bar */}
        <div className="grid grid-cols-4 gap-2">
          {tiers.map((tier, index) => {
            const isUnlocked = totalSpent >= tier.unlock;
            const fillWidth = getSegmentWidth(index);
            
            return (
              <div key={tier.label} className="relative">
                {/* Segment Label & Icon */}
                <div className="flex justify-between items-center mb-1.5 px-1">
                  <span className={`text-[10px] font-bold ${isUnlocked ? 'text-orange-400' : 'text-gray-600'}`}>
                    {tier.label}
                  </span>
                  {isUnlocked ? (
                    <Unlock size={10} className="text-orange-500/50" />
                  ) : (
                    <Lock size={10} className="text-gray-700" />
                  )}
                </div>

                {/* Segment Track */}
                <div className="h-2 bg-black rounded-sm border border-gray-800 overflow-hidden shadow-inner">
                  <div 
                    className={`h-full transition-all duration-500 ease-out ${
                      fillWidth === 100 
                        ? 'bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.4)]' 
                        : 'bg-orange-700'
                    }`}
                    style={{ width: `${fillWidth}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Status Info */}
        <div className="flex justify-between text-[9px] uppercase font-bold tracking-widest text-gray-600 px-1">
          <span>Tier 1 Start</span>
          <span>Tier 2: 4pts</span>
          <span>Tier 3: 8pts</span>
          <span>Tier 4: 12pts</span>
        </div>

      </div>
    </div>
  );
}