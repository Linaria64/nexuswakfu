import { defineCollection, reference, z } from 'astro:content';

// Schéma de base pour les images
const imageSchema = z.object({
  src: z.string(),
  alt: z.string().optional(),
});

// Définition du schéma pour les classes
const classesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    icon: imageSchema,
    image: imageSchema,
    description: z.string().optional(),
    detailedDescription: z.string().optional(),
    role: z.string(),
    difficulty: z.number().min(1).max(5).optional(),
    combatStyle: z.string().optional(),
    strengths: z.string().optional(),
    weaknesses: z.string().optional(),
    // Passif unique de la classe
    uniquePassive: z.object({
      name: z.string(),
      description: z.string()
    }),
    // Aptitudes spécifiques à la classe
    abilities: z.array(
      z.object({
        type: z.string(),
        name: z.string(),
        image: imageSchema
      })
    ).optional(),
    // Sorts principaux de la classe
    mainSpells: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        level: z.number(),
        image: imageSchema.optional(),
      })
    ).optional(),
    // Sorts passifs
    passiveSpells: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        image: imageSchema.optional(),
      })
    ).optional(),
    // Builds recommandés
    builds: z.array(
      z.object({
        name: z.string(),
        type: z.string(),
        minLevel: z.number(),
        description: z.string(),
      })
    ).optional(),
  }),
});

// Définition du schéma pour les donjons
const donjonCollection = defineCollection({
  type: 'content',
  schema: z.object({
    // --- Core Fields ---
    id: z.string().optional(), // Optional ID from MDX
    name: z.string(),
    description: z.string().optional(),
    level: z.number(),
    difficulty: z.enum(['easy', 'medium', 'hard', 'extreme']),
    players: z.enum(['solo', 'group', 'both', '3', '6']), // Allow flexibility
    region: z.string(),

    // --- Images ---
    icon: imageSchema.optional(),
    image: imageSchema.optional(),

    // --- Bosses ---
    bosses: z.array(
      z.object({
        name: z.string(),
        description: z.string().optional(),
        hp: z.number().optional(),
        masteries: z.object({
            fire: z.number().optional(),
            water: z.number().optional(),
            earth: z.number().optional(),
            air: z.number().optional(),
        }).optional(),
        resistances: z.object({
            fire: z.number().optional(),
            water: z.number().optional(),
            earth: z.number().optional(),
            air: z.number().optional(),
        }).optional(),
        bossImage: imageSchema.optional()
      })
    ).optional(),

    // --- Strategy & Steles ---
    strategy: z.string().optional(),
    steles: z.array(z.object({
        name: z.string(),
        description: z.string()
    })).optional(),

    // --- Rewards ---
    rewards: z.array(z.object({
        name: z.string(),
        type: z.enum(['equipment', 'resource'])
    })).optional(),

    // --- Other Dungeon Info (Optional) ---
    monsters: z.array(z.object({ // Non-boss monsters
      name: z.string(),
      level: z.number().optional(),
      elements: z.array(z.string()).optional(),
      weaknesses: z.array(z.string()).optional(),
    })).optional(),

    mechanics: z.array(z.object({ // Special rules/mechanics
      name: z.string(),
      description: z.string()
    })).optional(),

  }),
});

// Définition du schéma pour les métiers
const metierCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    title: z.string(),
    category: z.enum(['récolte', 'artisanat']),
    difficulty: z.number().min(1).max(5),
    profitability: z.number().min(1).max(5),
  }),
});

// Définition du schéma pour les guides
const guideCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['debutant', 'combats', 'equipement', 'avance', 'economie', 'classes']).optional(),
    image: z.string().optional(),
    class: z.string().optional(),
    featured: z.boolean().optional().default(false),
    author: z.object({
      name: z.string(),
      avatar: z.string().optional(),
    }).optional(),
    toc: z.boolean().optional().default(true),
  }),
});

// Export des collections
export const collections = {
  'classes': classesCollection,
  'donjons': donjonCollection,
  'metiers': metierCollection,
  'guides': guideCollection,
}; 