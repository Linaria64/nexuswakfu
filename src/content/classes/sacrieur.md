---
# Informations de base de la classe
id: "sacrieur"
name: "Sacrieur"
description: "Le don de soi et l'esprit de sacrifice de Sacrieur honorent ses alliés.
Les Sacrieurs sont des Berzerkers qui décuplent leurs forces dès qu'ils sont frappés ! N'ayant pas peur de recevoir des coups, ni de s'exposer aux blessures, ils seront souvent en première ligne."

role: "DPT mêlée"
specialty: "Combat rapproché et dégâts bruts"
gameplayDescription: "Les sacrieurs sont des attaquants qui jouent avec la mort, en restant souvent en dessous de 50% de vie"



# Images
icon:
  src: "/images/classes/sacri.png"
  alt: "Icône de la classe Sacrieur"
image:
  src: "/images/classes/sacri.png"
  alt: "Bannière de la classe Sacrieur"
portrait:
  src: "/images/classes/sacri.png"
  alt: "Portrait d'un personnage Iop aux cheveux rouges"

# Passif unique de la classe
uniquePassive:
  name: "Berserker"
  description: "0.5 % de di par point de fureur bonus naturel de 200% du niveau en pv en début de combat il gagne chatiment osé et sanguin en début de tours si le sacrieur a subi des dommages d'au moins un enemi ou 20 % de ses pv par des alliès ou retour de flamme il gagne 2 pw "

# Aptitudes spécifiques de la classe
abilities:
  - type: "tank"
    name: "Situés en première ligne, les Sacrieurs aiment prendre des coups pour en rendre le double. Experts en combat rapproché, ils se mettent en danger pour se battre plus efficacement."
    image:
      src: "/images/ability/dps.png"
      alt: "Tank"
  - type: "dps"
    name: "Dotés d'une grande quantité de vie et générant de l'armure, les Sacrieurs encaissent plus facilement les coups que les autres classes"
    image:
      src: "/images/ability/tank.png"
      alt: "DPS" 
  - type: "explosion"
    name: "Les Sacrieurs disposent de moyens de placer leurs alliés ou leurs adversaires sur de grandes distances, faisant d’eux un atout stratégique pour leur équipe"
    image:
      src: "/images/ability/placement.png"
      alt: "Explosion"
---
