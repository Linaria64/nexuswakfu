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
    description: z.string(),
    detailedDescription: z.string(),
    role: z.string(),
    difficulty: z.number().min(1).max(5),
    combatStyle: z.string(),
    strengths: z.string(),
    weaknesses: z.string(),
    mainSpells: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        level: z.number(),
        image: imageSchema.optional(),
      })
    ),
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
    name: z.string(),
    level: z.number(),
    difficulty: z.enum(['easy', 'medium', 'hard', 'extreme']),
    players: z.enum(['solo', 'group', 'both']),
    region: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string().optional(),
    }),
    rewards: z.array(z.string()),
    bosses: z.array(
      z.object({
        name: z.string(),
        level: z.number(),
        description: z.string(),
      })
    ),
    description: z.string(),
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