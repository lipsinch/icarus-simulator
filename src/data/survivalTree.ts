import type { Talent } from '../types/talent';

export const survivalData: Talent[] = [
  {
    id: "lumber_yield",
    name: "Lumber Yield",
    description: "Increased yield from felling trees.",
    maxRank: 3,
    tier: 1,
    prerequisites: [],
    position: {
      row: 1,
      col: 1
    }
  },
  {
    id: "skilled_picker",
    name: "Skilled Picker",
    description: "Increased yield from harvesting by hand.",
    maxRank: 4,
    tier: 1,
    prerequisites: [],
    position: {
      row: 1,
      col: 2
    }
  },
  {
    id: "rock_star",
    name: "Rock Star",
    description: "Increased yield from mining stone.",
    maxRank: 3,
    tier: 1,
    prerequisites: [],
    position: {
      row: 1,
      col: 3
    }
  },
  {
    id: "dense_packing_1",
    name: "Dense Packing I",
    description: "Increased inventory weight capacity.",
    maxRank: 3,
    tier: 1,
    prerequisites: [],
    position: {
      row: 1,
      col: 4
    }
  },
  {
    id: "carry_on",
    name: "Carry On",
    description: "Reduced encumberance penalty.",
    maxRank: 4,
    tier: 1,
    prerequisites: ["dense_packing_1"],
    position: {
      row: 2,
      col: 4
    }
  }, //TIER 2
  {
    id: "wood_breakdown",
    name: "Wood Breakdown",
    description: "Unlocks the ability to turn wood into sticks.",
    maxRank: 1,
    tier: 2,
    prerequisites: ["lumber_yield"],
    position: {
      row: 2,
      col: 1
    }
  },
  {
    id: "all_the_good_stuff",
    name: "All The Good Stuff",
    description: "Chance to receive secondary resources from bushes.",
    maxRank: 3,
    tier: 2,
    prerequisites: ["skilled_picker"],
    position: {
      row: 2,
      col: 2
    }
  },
  {
    id: "oxygen_thief",
    name: "Oxygen Thief",
    description: "Increased yield from Mining Oxite.",
    maxRank: 3,
    tier: 2,
    prerequisites: ["rock_star"],
    position: {
      row: 3,
      col: 2
    }
  },
  {
    id: "waste_not",
    name: "Waste Not",
    description: "Receive stone in addition to resources when mining ore deposits.",
    maxRank: 3,
    tier: 2,
    prerequisites: ["rock_star"],
    position: {
      row: 3,
      col: 3
    }
  },
  {
    id: "exotic_power",
    name: "Exotic Power",
    description: "Reduced exotics weight in your inventory.",
    maxRank: 4,
    tier: 2,
    prerequisites: ["dense_packing_1"],
    position: {
      row: 3,
      col: 4
    }
  },
  {
    id: "movin_wood",
    name: "Movin' Wood",
    description: "Decreases wood weight in your inventory.",
    maxRank: 4,
    tier: 2,
    prerequisites: ["wood_breakdown"],
    position: {
      row: 4,
      col: 1
    }
  }, //TIER 3
  {
    id: "slinging_stone",
    name: "Slinging Stone",
    description: "Decreases stone weight in your inventory.",
    maxRank: 4,
    tier: 3,
    prerequisites: ["rock_star"],
    position: {
      row: 4,
      col: 2
    }
  },
  {
    id: "dense_packing_2",
    name: "Dense Packing II",
    description: "Increased inventory weight capacity.",
    maxRank: 3,
    tier: 3,
    requiredPointsInTree: 8,
    prerequisites: ["dense_packing_1"],
    position: {
      row: 4,
      col: 3
    }
  },
  {
    id: "unburdened",
    name: "Unburdened",
    description: "Decreased ore weight in your inventory.",
    maxRank: 4,
    tier: 3,
    prerequisites: ["slinging_stone"],
    position: {
      row: 5,
      col: 2
    }
  },
  {
    id: "iron_miner",
    name: "Iron Miner",
    description: "Increased yield from iron deposits.",
    maxRank: 3,
    tier: 3,
    prerequisites: ["slinging_stone"],
    position: {
      row: 5,
      col: 3
    }
  },
  {
    id: "exotic_sprinter",
    name: "Exotic Sprinter",
    description: "Increased movement speed while carrying exotics.",
    maxRank: 3,
    tier: 3,
    prerequisites: ["dense_packing_2"],
    position: {
      row: 5,
      col: 4
    }
  },
  {
    id: "seasoned_logsman",
    name: "Seasoned Logsman",
    description: "Chopped wood is automatically added to your inventory.",
    maxRank: 1,
    tier: 4,
    prerequisites: ["wood_breakdown"],
    position: {
      row: 6,
      col: 1
    }
  },
  {
    id: "friend_of_the_trees",
    name: "Friend Of The Trees",
    description: "Reduced damage from falling trees. \n(+50% Falling Tree Resistance)",
    maxRank: 1,
    tier: 4,
    prerequisites: ["seasoned_logsman"],
    position: {
      row: 6,
      col: 2
    }
  },
  {
    id: "peerless_lumberjack",
    name: "Peerless Lumberjack",
    description: "Chance to instantly chop up a tree. \n(+1% chance to Instantly Fell Trees)",
    maxRank: 1,
    tier: 4,
    prerequisites: ["seasoned_logsman"],
    position: {
      row: 7,
      col: 1
    }
  },
  {
    id: "lucky_strike",
    name: "Lucky Strike",
    description: "Chance to mine a deposit in one hit. \n(+1% chance to instantly Break Mineral or Ore Deposits while Mining)",
    maxRank: 1,
    tier: 4,
    prerequisites: ["unburdened", "iron_miner"],
    position: {
      row: 7,
      col: 3
    }
  }
];