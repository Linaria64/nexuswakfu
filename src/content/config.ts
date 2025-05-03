import { defineCollection, z } from 'astro:content';

// Schéma de base pour les images
const imageSchema = z.object({
  src: z.string(),
  alt: z.string().optional(),
});

// Schéma pour les items de progression
const progressionItemSchema = z.object({
  name: z.string(),
  type: z.string(),
  stats: z.array(z.string()).optional(),
  source: z.string().optional()
});

// Schéma pour un niveau de progression
const levelProgressionSchema = z.object({
  stats: z.array(z.string()),
  items: z.array(progressionItemSchema)
});

// Définition du schéma pour les classes
const classesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    role: z.string(),
    icon: imageSchema,
    image: imageSchema,
    description: z.string().optional(),
    specialty: z.string().optional(),
    gameplayDescription: z.string().optional(),
    portrait: imageSchema.optional(),
    uniquePassive: z.object({
      name: z.string(),
      description: z.string(),
      image: imageSchema.optional()
    }).optional(),
    abilities: z.array(
      z.object({
        type: z.string(),
        name: z.string(),
        image: imageSchema
      })
    ).optional(),
    levelProgression: z.record(z.string(), levelProgressionSchema).optional(),
  }),
});

// Collection des donjons
const donjonCollection = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.string(),
    name: z.string(),
    level: z.number(),
    image: imageSchema,
    description: z.string(),
    boss: z.string(),
    rewards: z.array(z.string()),
    requirements: z.array(z.string()).optional(),
    strategy: z.object({
      phases: z.array(z.object({
        title: z.string(),
        description: z.string(),
      })).optional(),
      tips: z.array(z.string()).optional(),
    }).optional(),
    drops: z.array(z.object({
      name: z.string(),
      dropRate: z.string(),
      image: imageSchema.optional(),
      description: z.string().optional(),
    })).optional(),
  }),
});

export const collections = {
  classes: classesCollection,
  donjons: donjonCollection,
};