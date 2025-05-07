---
# Informations de base de la classe
id: "Xelor"
name: "Xelor"
description: "Xélor détourne le temps pour qu'il serve ses desseins.
Les Xélors sont des mages qui maîtrisent le temps et l'espace, afin d'augmenter son propre potentiel ou celui de ses alliés, tout en réduisant celui de ses ennemis."

role: "DPT mêlée"
specialty: "Combat rapproché et dégâts bruts"
gameplayDescription: "Les Xelors manipulent le temps et l'espace. Ils peuvent ralentir leurs ennemis, se téléporter sur le champ de bataille, et infligent des dégâts qui augmentent avec le temps. Leur gameplay complexe offre de nombreuses possibilités tactiques."



# Images
icon:
  src: "/images/classes/xelor.png"
  alt: "Icône de la classe Xelor"
image:
  src: "/images/classes/xelor.png"
  alt: "Bannière de la classe Xelor"
portrait:
  src: "/images/classes/xelor.png"
  alt: "Portrait d'un personnage Xelor aux cheveux rouges"


# Aptitudes spécifiques de la classe
abilities:
  - type: "controle"
    name: "Très puissants sur de petites distances, les Xélors font des ravages chez les ennemis, aussi bien en zone que sur cible unique"
    image:
      src: "/images/ability/dps.png"
      alt: "Temporalité"
  - type: "entrave"
    name: "Les Xélors réduisent les capacités d'action. Ils disposent de sorts dédiés à empêcher leurs adversaires de jouer pleinement leur tour"
    image:
      src: "/images/ability/entrave.png"
      alt: "Blocage"
  - type: "placement"
    name: "Les capacités des Xélors leur permettent de se déplacer rapidement sur leur Cadran, et d'avoir un vaste contrôle sur le placement adverse"
    image:
      src: "/images/ability/placement.png"
      alt: "Positionnement"


# Passif unique de la classe
uniquePassive:
  name: "Furie du Xelor"
  description: "Chaque coup critique augmente vos dégâts de 5% pour 2 tours. Cumulable jusqu'à 3 fois."
---
