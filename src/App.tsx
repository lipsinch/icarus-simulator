import { useState } from 'react'
import { survivalData } from './data/survivalTree';
import './App.css'

function App() {
  const [spentPoints, setSpentPoints] = useState<Record<string, number>>({});
  const totalSpent = Object.values(spentPoints).reduce((sum, val) => sum + val, 0);
  const isCapReached = totalSpent >= 90;

  const addPointToTalent = (talentId: string) => {
    const talent = survivalData.find(t => t.id === talentId);
    const currentPoints = spentPoints[talentId] || 0;

    if (!talent) return;
    if (currentPoints >= talent.maxRank) return;
    if (totalSpent >= 90) return;

    setSpentPoints({
      ...spentPoints,          // "Keep everything else the same..."
      [talentId]: currentPoints + 1 // "...but change this one!"
    });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Icarus Talent Simulator</h1>
      
      <p>Total Points Spent: {totalSpent} / 90</p>

      <h2>Survival Tree</h2>
      {survivalData
      .filter(t => t.tier === 1)
      .map((talent) => {
        const prerequisitesMet = talent.prerequisites.every(preReqId => {
          const pointsInPreReq = spentPoints[preReqId] || 0;
          return pointsInPreReq > 0;
        });

        const currentPoints = spentPoints[talent.id] || 0;
        const isMaxed = currentPoints >= talent.maxRank;
        const isLocked = talent.prerequisites.length > 0 && !prerequisitesMet;

        return(
          <div key={talent.id}>
            <strong>{talent.name}</strong>
            <p style={{ color: isMaxed ? 'red' : 'white' }}>{currentPoints}/{talent.maxRank}</p>
            <button 
              onClick={() => addPointToTalent(talent.id)}
              disabled={isLocked || isMaxed || isCapReached}>Add Point</button>
          </div>
        );
      })}
    </div>
  )
}


export default App
