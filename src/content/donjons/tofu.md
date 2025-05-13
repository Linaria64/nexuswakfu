---
id: "1259-tofu-royal"
name: "tofu"
level: 12
image:
  src: "images/boss/tofu.png"
  alt: "boss tofu"
description: "Premier donjon d'Astrub, idéal pour débuter l'aventure. Affrontez des Chachas et leur maîtresse dans une maison envahie par les félins."
difficulty: "easy"
players: "group"
region: "Astrub"
boss: "Tofu royal"
bosses:
  - name: "Tofu Royal"
    description: ""
    hp: 630
    masteries:
      water: 0
      earth: 330
      air: 330
      fire: 0
    resistances:
      water: 48
      earth: 19
      air: 59
      fire: 35
salleImage:
  src: "images/salledj/sdj1.png"
  alt: "iofhois"

mechanics:
  - name: ""
    description: "Le tofu royal a beaucoups de pm il tape en zone assez fort autours de lui les tofunes invoque des petit tofu il faut les tuer en priorité "
rewards:
  - name: "Amulette Michou"
    type: "equipment"
    description: "Une amulette qui augmente les caractéristiques de base et offre un bonus aux dégâts contre les créatures de type Chacha."
    dropRate: 15
    image:
      src: "/placeholder.svg"
      alt: "Amulette Michou"
    icon:
      src: "/icons/equipment.svg"
      alt: "Icône Équipement"
    stats:
      - "+20 Intelligence"
      - "+15 Chance"
      - "+5% Dégâts contre les Chachas"
steles:
  - name: ""
    description: ""
    icon:
      src: "/icons/resources.svg"
      alt: "Icône Stèle"
strategy:
  phases:
    - title: "Phase 1 - Les Chachas"
      description: "Commencez par éliminer les Chachas un par un. Ils sont faibles individuellement mais peuvent être dangereux en groupe. Concentrez vos attaques sur un seul Chacha à la fois."
    - title: "Phase 2 - La Mère Michou"
      description: "La Mère Michou devient plus agressive et invoque plus fréquemment des Chachas. Elle utilise des attaques de zone qui peuvent étourdir. Gardez vos distances et éliminez les Chachas invoqués rapidement."
  tips:
    - "Gardez un personnage à distance pour gérer les invocations"
    - "Évitez de vous regrouper pour limiter les dégâts de zone"
    - "Priorisez les soins sur le tank pendant la phase 2"
    - "Utilisez des sorts de contrôle sur les Chachas"
requirements:
  ["Niveau 9 minimum", "Groupe de 3 joueurs", "Au moins un soigneur recommandé"]
---
