/**
 * Utility functions for dungeon-related operations
 */

/**
 * Returns information about a dungeon's difficulty
 * @param difficulty The difficulty string or level of the dungeon
 * @returns An object with color and label information
 */
export function getDifficultyInfo(difficulty: string | number) {
  // Mapping for string difficulty values (from MDX)
  const stringDifficultyMap = {
    'easy': { color: 'bg-green-500', label: 'Facile' },
    'medium': { color: 'bg-blue-500', label: 'Normal' },
    'hard': { color: 'bg-yellow-500', label: 'Difficile' },
    'very-hard': { color: 'bg-orange-500', label: 'Très difficile' },
    'extreme': { color: 'bg-red-500', label: 'Extrême' }
  };
  
  // Mapping for numeric difficulty values (legacy)
  const numericDifficultyMap = {
    1: { color: 'bg-green-500', label: 'Facile' },
    2: { color: 'bg-blue-500', label: 'Normal' },
    3: { color: 'bg-yellow-500', label: 'Difficile' },
    4: { color: 'bg-orange-500', label: 'Très difficile' },
    5: { color: 'bg-red-500', label: 'Extrême' }
  };

  // Check type and return appropriate value
  if (typeof difficulty === 'string') {
    return stringDifficultyMap[difficulty] || { color: 'bg-gray-500', label: 'Inconnu' };
  } else {
    return numericDifficultyMap[difficulty] || { color: 'bg-gray-500', label: 'Inconnu' };
  }
}

/**
 * Returns a formatted text representation of the player count
 * @param playerType The player type (solo, group, both)
 * @param playersCount The exact number of players required (3 or 6)
 * @returns A formatted string describing the player count
 */
export function getPlayersText(playerType: string, playersCount?: number): string {
  // If we have an exact player count (new MDX format)
  if (playersCount) {
    return `${playersCount} joueur${playersCount > 1 ? 's' : ''}`;
  }
  
  // Otherwise, fall back to player type
  const playerTypeMap = {
    'solo': 'Solo uniquement',
    'group': 'Groupe',
    'both': 'Solo ou Groupe'
  };
  
  return playerTypeMap[playerType] || 'Nombre de joueurs inconnu';
}
