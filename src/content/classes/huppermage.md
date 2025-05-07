---
# Informations de base de la classe
id: "Huppermage"
name: "Huppermage"
description: "Maîtres des runes élémentaires, les Huppermages combinent les éléments Eau, Feu, Air et Terre pour créer des sorts d'une puissance à couper le souffle. Mus par leur soif de connaissance, ils étudient inlassablement les moyens de rétablir l'équilibre de la Balance Krosmique."

role: "DPT mêlée"
specialty: "Combat rapproché et dégâts bruts"
gameplayDescription: "Les Huppermages maîtrisent tous les éléments et peuvent les combiner pour créer des effets dévastateurs. Leur capacité à adapter leurs attaques en fonction des faiblesses ennemies et à manipuler les éléments en fait des mages polyvalents."



# Images
icon:
  src: "/images/classes/hupper.png"
  alt: "Icône de la classe Huppermage"
image:
  src: "/images/classes/hupper.png"
  alt: "Bannière de la classe Huppermage"
portrait:
  src: "/images/classes/hupper.png"
  alt: "Portrait d'un personnage Huppermage aux cheveux rouges"


# Aptitudes spécifiques de la classe
abilities:
  - type: "specialite"
    name: "Polyvalence :
Les Huppermages sont polyvalents en combat, capables de frapper dans tous les éléments en empruntant la magie des autres classes, et infligeant des dégâts conséquents grâce à leurs sorts de spécialité"
    image:
      src: "/images/ability/specialite.png"
      alt: "En cumulant assez d’énergie au cours du combat, les Huppermages libèrent toute leur puissance, sur un ennemi ou sur un groupe"
  - type: "dps"
    name: "Combo"
    image:
      src: "/images/ability/dps.png"
      alt: "La majorité des sorts des Huppermages possède des effets secondaires, parmi lesquels des effets d’entrave et de placement. Il leur est également possible de poser sur le terrain des dispositifs contraignant les placements adverses."
  - type: "controle"
    name: "Maîtrise"
    image:
      src: "/images/ability/control.png"
      alt: "Maîtrise"

# Passif unique de la classe
uniquePassive:
  name: "Furie du Huppermage"
  description: "Chaque coup critique augmente vos dégâts de 5% pour 2 tours. Cumulable jusqu'à 3 fois."
---
