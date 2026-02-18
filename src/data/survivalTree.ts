import type { Talent } from '../types/talent';

export const survivalData: Talent[] = [
  {
    id: "lumber_yield_1",
    name: "Lumber Yield",
    description: "Increased yield from felling trees.",
    maxRank: 3,
    tier: 1,
    requiredPointsInTree: 0,
    prerequisites: []
  },
  {
    id: "wood_breakdown",
    name: "Wood Breakdown",
    description: "Allows converting Wood to Sticks in your inventory.",
    maxRank: 1,
    tier: 1,
    requiredPointsInTree: 0,
    prerequisites: ["lumber_yield_1"] // Needs at least 1 point in Lumber Yield
  }
];