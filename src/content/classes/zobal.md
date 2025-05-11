---
# Informations de base de la classe
id: "Zobal"
name: "Zobal"
description: "Les Zobals sont des guerriers lunatiques s'adaptant à toutes les situations. Parfois pleutres, parfois psychopathes, souvent classes, leurs capacités en combat changent du tout au tout selon les masques dont ils s'équipent."

role: "DPT mêlée"
specialty: "Combat rapproché et dégâts bruts"
gameplayDescription: "Les zobals sont principalements des supports, qui peuvent placer, shield, heal (Attention a privilégier un gameplay et pas tenter de tout faire), ils ont une enorme mobilité et peuvent invoquer un double avec les mêmes sorts)"

uniquePassive:
  name: "Guerrier lunatique"
  description: " En début de combat il gagne masque de psychopathe masque du pleutre masque de classe il regagne 3pw si il porte aucun masque en fin de tours"

# Images
icon:
  src: "/images/classes/zobal.png"
  alt: "Icône de la classe Zobal"
image:
  src: "/images/classes/zobal.png"
  alt: "Bannière de la classe Zobal"
portrait:
  src: "/images/classes/zobal.png"
  alt: "Portrait d'un personnage Zobal aux cheveux rouges"

# Aptitudes spécifiques de la classe
abilities:
  - type: "transformation"
    name: "Usant de nombreuses capacités de placement et d’esquive, les Zobals peuvent faciliter le travail de leur équipe, et passer dans le dos de leurs adversaires."
    image:
      src: "/images/ability/placement.png"
      alt: "Transformation"
  - type: "polyvalence"
    name: "Disposant de plusieurs sorts de soin et de protection, les Zobals aident leurs alliés un par un, et peuvent même les ressusciter."
    image:
      src: "/images/ability/health.png"
      alt: "Polyvalence"
  - type: "dps"
    name: "Se battant globalement à mi-distance, les Zobals ont plusieurs styles de combat, selon qu’ils souhaitent attirer l’attention sur eux ou rester à l’écart."
    image:
      src: "/images/ability/dps.png"
      alt: "DPS"
---
