---
# Informations de base de la classe
id: "eni"
name: "Eniripsa"
description: "À chaque seconde, les connaissances médicinales d'Eniripsa sauvent des vies.
Les Eniripsas sont des soigneurs qui guérissent d'un simple Mot ! Ils les utilisent surtout pour soigner leurs alliés, mais parfois aussi pour blesser leurs ennemis."

role: "DPT mêlée"
specialty: "Combat rapproché et dégâts bruts"
gameplayDescription: " Les eniripsas sont des soigneurs qui soignent leurs alliés avec leurs sorts et lapino qu'ils invoquent."



# Images
icon:
  src: "/images/classes/eni.png"
  alt: "Icône de la classe Eniripsa"
image:
  src: "/images/classes/eni.png"
  alt: "Bannière de la classe Eniripsa"
portrait:
  src: "/images/classes/eni.png"
  alt: "Portrait d'un personnage Eniripsa aux cheveux rouges"


# Passif unique de la classe
uniquePassive:
  name: "Soigneur"
  description: "En début de combat l'éniripsa débloque Contre-nature lapino répulsion en fin de tour 1pw 2pw si > 80% pv bonus de grâce +10 niv a chaque soin réalisé propagateur boost de pv pour toutes l'équipe 200% du niveau de l'eniripsa"

# Aptitudes spécifiques de la classe
abilities:
  - type: "soutien"
    name: "Médecine :
Les Eniripsas maîtrisent tous les moyens de soigner, ou d'empoisonner. Et si un allié tombe au combat malgré l'aide apportée, les Eniripsas peuvent le ressusciter."
    image:
      src: "/images/ability/specialite.png"
      alt: "Soins"
  - type: "dps"
    name: "Les Eniripsas sont les soigneurs absolus. Qu'il s'agisse d'aider une cible ou tout un groupe, les Eniripsas sont les plus fiables vers qui se tourner, capables d'intervenir dans toutes les situations."
    image:
      src: "/images/ability/health.png"
      alt: "DPS" 
  - type: "controle"
    name: "Outre la préservation de la santé de leurs alliés, les Eniripsas ont aussi à cœur d'améliorer leurs autres capacités et d'affaiblir les adversaires."
    image:
      src: "/images/ability/soutien.png"
      alt: "Contrôle"
      
---
