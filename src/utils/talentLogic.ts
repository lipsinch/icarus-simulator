import type { Talent, TalentState } from '../types/talent';

/**
 * Checks if a talent is eligible to be purchased.
 */
export const canUnlockTalent = (
  talent: Talent,
  investedPoints: TalentState,
  currentPointsInTree: number
): boolean => {
  // 1. Check if the user has enough total points in this tree for the tier
  if (currentPointsInTree < talent.requiredPointsInTree) return false;

  // 2. Check if all prerequisites are met (at least 1 point in each)
  const prerequisitesMet = talent.prerequisites.every(preId => 
    (investedPoints[preId] || 0) > 0
  );

  return prerequisitesMet;
};