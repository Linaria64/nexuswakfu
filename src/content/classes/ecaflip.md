---
# Informations de base de la classe
id: "ecaflip"
name: "Ecaflip"
description: "Ecaflip vit de l'amour du jeu. Pour lui, chaque jour est placé sous le signe de la chance.
Les Ecaflips sont des Guerriers joueurs qui jouent leurs vies sur un lancer de dés pour gagner un combat."

role: "DPT mêlée"
specialty: "Combat rapproché et dégâts bruts"
gameplayDescription: "Les ecas sont des personnages assez mobiles, ils se basent sur des degats critiques et peuvent être orienté soit attaquant ou soigneur en fonction du build."


# Images
icon:
  src: "/images/classes/eca.png"
  alt: "Icône de la classe Ecaflip"
image:
  src: "/images/classes/eca.png"
  alt: "Bannière de la classe Ecaflip"
portrait:
  src: "/images/classes/eca.png"
  alt: "Portrait d'un personnage Ecaflip aux cheveux rouges"


# Passif unique de la classe
uniquePassive:
  name: "Guerrier joueur"
  description: "En début de combat l'écaflip gagne 2 sort bond du félin qui coûte 1 pa et vous téléporte sur la case il peut ciblé l'arbre a chat et la relance qui coûte 2 pa ca permet de défausse ses carte et en tiré 3 par carte défaussée 15% de cc ( 2 tours ) jouer une carte donne 7 de Veine Passif : au dessus de 100 cc ca donne des di  en fin de tours l'écaflip gagne 1 pw et 20 de veine toutes les 100 veine cela double l'effêt de la carte"

# Aptitudes spécifiques de la classe
abilities:
  - type: "dps"
    name: "Bien que les Ecaflips comptent sur la chance et que les dégâts qu'ils infligent soient aléatoires, ceux-ci sont toujours conséquents."
    image:
      src: "/images/ability/dps.png"
      alt: "DPS"
  - type: "tank"
    name: "Grâce à quelques effets de contrôle du terrain, les Ecaflips maintiennent leurs adversaires où ils le souhaitent."
    image:
      src: "/images/ability/control.png"
      alt: "Survivabilité" 
  - type: "controle"
    name: "Capables de soigner leurs alliés de plusieurs manières, les Ecaflips peuvent veiller sur eux entre deux coups de griffe"
    image:
      src: "/images/ability/health.png"
      alt: "Contrôle"
      
---
