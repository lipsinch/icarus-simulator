export type TreeName = 'Survival' | 'Combat' | 'Construction' | 'Exploration';

export interface Talent {
  id: string;             // A unique identifier (e.g., 'bow_dmg_1')
  name: string;           // The display name
  description: string;    // What the talent does
  maxRank: number;        // Max points (usually 1 or 3 in Icarus)
  tier: 1 | 2 | 3 | 4;    // Which horizontal row it's in
  icon?: string;          // Path to the image
  
  // LOGIC REQUIREMENTS
  requiredPointsInTree?: number; // Many Icarus talents need 10 or 20 points in the tree first
  prerequisites: string[];      // IDs of specific talents you must have first
  position: {
    row: number;
    col: number;
  }
}

export interface TalentState {
  [talentId: string]: number;   // Maps a talent ID to the number of points invested
}