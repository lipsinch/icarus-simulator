import { useState } from 'react'
import { survivalData } from './data/survivalTree';
import './App.css'
import TalentCard from './components/TalentCard';
import PointSummary from './components/PointSummary';

function App() {
  const [spentPoints, setSpentPoints] = useState<Record<string, number>>({});
  
  const totalSpent = Object.values(spentPoints).reduce((sum, val) => sum + val, 0);
  const isCapReached = totalSpent >= 90;

  // Logic: Checking if a specific talent's tier is unlocked based on total points
  const isTierLocked = (tier: number) => {
    if (tier === 2) return totalSpent < 4;
    if (tier === 3) return totalSpent < 8;
    if (tier === 4) return totalSpent < 12;
    return false;
  };

  const addPointToTalent = (talentId: string) => {
    const talent = survivalData.find(t => t.id === talentId);
    if (!talent) return;

    // Check if the tier is unlocked and prerequisites are met
    const tierLocked = isTierLocked(talent.tier);
    const prerequisitesMet = 
      talent.prerequisites.length === 0 || 
      talent.prerequisites.some(id => (spentPoints[id] || 0) > 0);

    const currentPoints = spentPoints[talentId] || 0;

    if (tierLocked || !prerequisitesMet || currentPoints >= talent.maxRank || isCapReached) return;

    setSpentPoints(prev => ({
      ...prev,
      [talentId]: currentPoints + 1
    }));
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans selection:bg-orange-500/30">
      <header className="mb-10 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-black italic text-orange-600 tracking-tighter uppercase leading-none">
            Resources
          </h1>
          <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em] mt-2 font-bold">Talent Tree Simulator</p>
        </div>
      </header>

      <PointSummary 
        totalSpent={totalSpent} 
        resetAction={() => setSpentPoints({})} 
      />

      {/* THE UNIFIED TREE GRID 
          We use a relative container so connector lines (future step) can sit behind.
      */}
      <div className="relative max-w-4xl mx-auto p-12 bg-[#050505] border border-gray-900 rounded-3xl shadow-inner">
        
        {/* The Grid Setup: 4 Columns wide */}
        <div className="grid grid-cols-4 gap-x-12 gap-y-16 justify-items-center">
          {survivalData.map((talent) => {
            const prerequisitesMet = 
              talent.prerequisites.length === 0 || 
              talent.prerequisites.some(id => (spentPoints[id] || 0) > 0);

            return (
              <div 
                key={talent.id}
                style={{ 
                  gridColumn: talent.position.col, 
                  gridRow: talent.position.row 
                }}
              >
                <TalentCard 
                  talent={talent}
                  currentPoints={spentPoints[talent.id] || 0}
                  isLocked={isTierLocked(talent.tier) || !prerequisitesMet}
                  isCapReached={isCapReached}
                  onAdd={addPointToTalent}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}


export default App
