/**
 * Utility functions for dungeon-related operations
 */

/**
 * Returns information about a dungeon's difficulty
 * @param difficulty The difficulty level of the dungeon
 * @returns An object with color and label information
 */
export function getDifficultyInfo(difficulty: number) {
  const difficultyMap = {
    1: { color: 'bg-green-500', label: 'Facile' },
    2: { color: 'bg-blue-500', label: 'Normal' },
    3: { color: 'bg-yellow-500', label: 'Difficile' },
    4: { color: 'bg-orange-500', label: 'Très difficile' },
    5: { color: 'bg-red-500', label: 'Extrême' }
  };

  return difficultyMap[difficulty] || { color: 'bg-gray-500', label: 'Inconnu' };
}

/**
 * Returns a formatted text representation of the player count
 * @param players The player count configuration (can be a number or a range)
 * @returns A formatted string describing the player count
 */
export function getPlayersText(players: number | [number, number]): string {
  if (typeof players === 'number') {
    return `${players} joueur${players > 1 ? 's' : ''}`;
  } else if (Array.isArray(players) && players.length === 2) {
    const [min, max] = players;
    if (min === max) {
      return `${min} joueur${min > 1 ? 's' : ''}`;
    } else {
      return `${min} à ${max} joueurs`;
    }
  }
  return 'Nombre de joueurs inconnu';
}
