---
# Informations de base de la classe
id: "roublard"
name: "Roublard"
description: "Les Roublards sont intelligents et patients, ils ne se jettent pas dans la mêlée comme un Iop mais préparent ingénieusement leur piège de bombes pour faire un maximum de ravages.
Ils n'hésitent pas à se servir de leur pistolet et à fuir quand la situation devient trop épineuse"

role: "DPT mêlée"
specialty: "Combat rapproché et dégâts bruts"
gameplayDescription: "Les Roublards sont des maîtres de la ruse qui utilisent des bombes et des pièges. Ils peuvent poser des explosifs sur le champ de bataille puis les déclencher au moment opportun, infligeant des dégâts considérables dans des zones stratégiques."



# Images
icon:
  src: "/images/classes/roublard.png"
  alt: "Icône de la classe Roublard"
image:
  src: "/images/classes/roublard.png"
  alt: "Bannière de la classe Roublard"
portrait:
  src: "/images/classes/roublard.png"
  alt: "Portrait d'un personnage Roublard aux cheveux rouges"


# Aptitudes spécifiques de la classe
abilities:
  - type: "dps"
    name: "Bombes :
Les Bombes sont l’arme de prédilection des Roublards. Elles explosent sur commande et gagnent en puissance à chaque tour qui passe"
    image:
      src: "/images/ability/specialite.png"
      alt: "Assassinat"
  - type: "placement"
    name: "Utiles à toutes les distances, les Roublards peuvent s’adapter facilement aux situations les plus variées. Certains sorts peuvent atteindre les ennemis cachés derrière des obstacles"
    image:
      src: "/images/ability/dps.png"
      alt: "Positionnement"
  - type: "entrave"
    name: "Grâce à leurs bombes et à leurs capacités de placement, les Roublards peuvent positionner leur cible où ils le souhaitent, ou la contraindre à ne pas s’approcher"
    image:
      src: "/images/ability/control.png"
      alt: "Pièges"

# Passif unique de la classe
uniquePassive:
  name: "Maitre de la diversion "
  description: "Gagne en début de combat détonation dynamite ruse et roublabot le roublard commence le combat en mode fuyard il peut passer en mode fourbe grâce a ruse en début de tour les bombes double leur niveau et le roublard gange 5 de poudre  la poudre permet au roublard d'invoquer des bombes en fin de tours il gagne 1pw  "
---
