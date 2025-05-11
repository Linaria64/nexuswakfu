---
# Informations de base de la classe
id: "ouginak"
name: "Ouginak"
description: "Les Ouginak sont des guerriers traquant leurs proies sans merci. Agiles et résistants, ils n'hésitent pas à bondir sur tout ce qui bouge. Joueur ou monstre, pas de distinction !"

role: "DPT mêlée"
specialty: "Combat rapproché et dégâts bruts"
gameplayDescription: " Les ouginaks sont des attaquants mêlée (inférieur a 3 cases (3 non compris))  qui peuvent se transformer en gros loup pour faire de gros dégats."

# Images
icon:
  src: "/images/classes/ouginak.png"
  alt: "Icône de la classe Ouginak"
image:
  src: "/images/classes/ouginak.png"
  alt: "Bannière de la classe Ouginak"
portrait:
  src: "/images/classes/ouginak.png"
  alt: "Portrait d'un personnage Ouginak aux cheveux rouges"

# Passif unique de la classe
uniquePassive:
  name: "Ouginak"
  description: "En début de combat, l'ouginak débloque proie ougigarou chienchien l'ouginak possède une jauge de rage (30 max) elle augmente lorsqu'il réagit avec ses proies la rage lui permet d'utiliser ses sorts en ougigarou lorsque ougigarou se termine régénère tous ses pw la rage est remis a zero tous les poisons de l'ouginak prennent ses meilleurs maitrises entre distance et mélée peut importe son placement"

# Aptitudes spécifiques de la classe
abilities:
  - type: "dps"
    name: "Chasseur par excellence, l'Ouginak est redoutable contre une cible unique. Mais peu importe le nombre d'adversaires, il est toujours prêt à en découdre à coup de crocs !"
    image:
      src: "/images/ability/dps.png"
      alt: "DPS"
  - type: "tank"
    name: "Lorsqu'il s'agit de résister aux coups, l'Ouginak est un maître en la matière. Il dispose d'un arsenal lui permettant de survivre lorsqu'il est exposé au danger."
    image:
      src: "/images/ability/tank.png"
      alt: "Tank"
  - type: "entrave"
    name: "MImpitoyable, l'Ouginak laisse rarement ses adversaires s'échapper. Pour cela il peut réduire les capacités de déplacement de sa Proie. C'est aussi un champion pour rattraper les cibles qui fuient ou ralentir la progression adverse grâce à son piège."
    image:
      src: "/images/ability/control.png"
      alt: "Entrave"
---
