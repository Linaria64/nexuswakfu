---
# Informations de base de la classe
id: "Enutrof"
name: "Enutrof"
description: "Enutrof tire gloire et puissance des trésors qu'il amasse.
Les Enutrofs sont des chasseurs de trésors invétérés. Ils sont intéressés par toute denrée, tout objet, ou toute créature dont ils pourraient tirer des kamas."

role: "DPT mêlée"
specialty: "Combat rapproché et dégâts bruts"
gameplayDescription: "Les Enutrofs sont experts en fouille et collection de butins. Ils manipulent la terre et peuvent immobiliser leurs ennemis tout en générant des ressources supplémentaires. Leur style de jeu mêle contrôle et support."



# Images
icon:
  src: "/images/classes/enu.png"
  alt: "Icône de la classe Enutrof"
image:
  src: "/images/classes/enu.png"
  alt: "Bannière de la classe Enutrof"
portrait:
  src: "/images/classes/enu.png"
  alt: "Portrait d'un personnage Enutrof aux cheveux rouges"


# Passif unique de la classe
uniquePassive:
  name: "Furie du Enutrof"
  description: "Chaque coup critique augmente vos dégâts de 5% pour 2 tours. Cumulable jusqu'à 3 fois."

# Aptitudes spécifiques de la classe
abilities:
  - type: "dps"
    name: "Prospection :
L’atout principal des Enutrofs réside dans leur capacité à récolter davantage d’objets sur les monstres tués. Une classe toute trouvée pour les chercheurs de trésors."
    image:
      src: "/images/ability/specialite.png"
      alt: "Spécialité"
  - type: "tank"
    name: "En combat, les Enutrofs ont de nombreux moyens de gêner les adversaires, en réduisant leur mobilité et leur vision."
    image:
      src: "/images/ability/entrave.png"
      alt: "Défense" 
  - type: "controle"
    name: "Les Enutrofs peuvent infliger des dégâts importants, surtout lorsqu’ils invoquent leur Phorreur, ou qu’ils fusionnent avec lui pour se transformer en un monstre redoutable."
    image:
      src: "/images/ability/dps.png"
      alt: "Contrôle"
      
---
