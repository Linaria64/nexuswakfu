---
# Informations de base de la classe
id: "steamer"
name: "Steamer"
description: "Les Steamers sont des êtres à l'apparence de machines et originaires de l'ancien peuple Sufokien.
Ils fonctionnent à base de Stasis et manipulent cette énergie rare pour effectuer des attaques à distance destructrices."

role: "DPT mêlée"
specialty: "Combat rapproché et dégâts bruts"
gameplayDescription: "Les Steamers sont des ingénieurs qui combattent avec l'aide de tourelles mécaniques. Leurs mécanismes leur permettent de contrôler le terrain et d'attaquer à distance, tandis qu'ils supportent leur équipe avec diverses capacités techniques."



# Images
icon:
  src: "/images/classes/steamer.png"
  alt: "Icône de la classe Steamer"
image:
  src: "/images/classes/steamer.png"
  alt: "Bannière de la classe Steamer"
portrait:
  src: "/images/classes/steamer.png"
  alt: "Portrait d'un personnage Steamer aux cheveux rouges"


# Passif unique de la classe
uniquePassive:
  name: "maitre saboteur"
  description: "Début du combat la moitié de ses pw sont convertie en ps il débloque microbot tourelle steamerator et canonnier il regagne 1 pw a la fin de son tours et 1 ps chaque fois que sa tourelle touche un enemi quand il regagne 1 ps et que sa jauge de ps est pleine il gagne 1 pw a la place le sort de la tourelle tape dans l'élément du dernier sort utilisé par le steamer"

# Aptitudes spécifiques de la classe
abilities:
  - type: "dps"
    name: "Les Steamers ont un grand contrôle du terrain, grâce à des rails facilitant les déplacements de leur équipe et à l'invocation de machines de combat."
    image:
      src: "/images/ability/control.png"
      alt: "DPS"
  - type: "drone"
    name: "Afin de garantir leur puissance, les Steamers peuvent exploiter les faiblesses d'une cible pour maximiser leurs dégâts."
    image:
      src: "/images/ability/dps.png"
      alt: "Drones" 
  - type: "zone"
    name: "Grâce à de nombreux moyens à leur disposition, les Steamers sont capables de se protéger ainsi que leur équipe."
    image:
      src: "/images/ability/tank.png"
      alt: "Contrôle de zone"
      

---
