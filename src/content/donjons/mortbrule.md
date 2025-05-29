---
id: "5382-hark-saniss-dernier-geant"
name: "Donjon Mort-Brûlés"
level: 50
image:
  src: "images/boss/mortbrule.png"
  alt: "Bannière du donjon Abraknyde"
description: ""
difficulty: "easy"
players: "both"
region: "Astrub"
boss: "Hark Saniss Dernier géant"
modulated: true
bosses:
  - name: ""
    description: ""
    hp: 2560
    masteries:
      water: 321
      earth: 321
      air: 0
      fire: 321
    resistances:
      water: 39
      earth: 39
      air: 24
      fire: 32
salleImage:
  src: "images/salledj/sdj1.png"
  alt: "iofhois"

mechanics:
  - name: ""
    description: " 
    Cases Malédiction : Un monstre sur la case gagne 200 de résistance. Marcher sur les cases les enlève mais vous applique un état « Maudit ».
    État Maudit : -10 % d’armure reçue, -10 % soin reçu et -25 res par état. Niveau 5 maximum (jusqu’à -50 % armure/soin reçu et -125 res max).

    Lorsqu’un monstre meurt, une case malédiction apparaît sous eux. Une croix de taille 1 pour les Défunéraires. Au début de leur tour, les monstres font apparaître une croix de case malédiction sous eux.

    Au début de son tour, Hark-Saniss tape autour de lui en zone colère de 4, et pose des cases malédictions partout autour de lui. Il possède -200 de résistances dos, tape en étoile de 1 à distance.

    Si vous êtes dans son dos, il vous téléporte aléatoirement face à lui en vous infligeant énormément de dégâts.

    Hark-Saniss a 2 phases : la première de 100 % à 50 %, la seconde de 50 % à 0 %. Il n’y a aucune différence de stratégie entre les deux phases, simplement qu’il réinvoque 3 monstres à son tour de jeu et ne peut pas être tué avant son tour de jeu.
"
rewards:
  - name: ""
    type: "equipment"
    description: ""
    dropRate: 0
    image:
      src: ""
      alt: ""
    icon:
      src: ""
      alt: ""
steles:
  - name: "Stèle d’intervention : Cire Momore (Modulation obligatoire)"
    description: "

    Cette stèle fait apparaître un 2ème boss.

    Cire Momore n’a pas beaucoup de PM.

    Il a un sort de zone autour de lui qui augmente les dégâts reçus en permanence.

    Il a un sort monocible à distance.
"
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
