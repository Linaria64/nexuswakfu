$classDescriptions = @{
    # Pour les 3 classes déjà mises à jour, on ne fait rien
    "cra" = $null  # Déjà mis à jour
    "ecaflip" = $null  # Déjà mis à jour
    "osamodas" = $null  # Déjà mis à jour
    
    # Pour les autres classes, on extrait les descriptions du fichier index.astro
    "iop" = "Les Iops sont des combattants puissants spécialisés dans les dégâts de mêlée. Leur force réside dans leur capacité à infliger des dégâts massifs aux ennemis proches. Ils compensent leur manque de portée par une grande mobilité et des sorts de saut."
    "eniripsa" = "Les Eniripsas sont les soigneurs principaux de Wakfu. Ils peuvent se spécialiser dans les soins, les buffs d'équipe ou les attaques magiques. Leur polyvalence leur permet de s'adapter à diverses situations de combat, mais ils brillent particulièrement en groupe."
    "sacrieur" = "Les Sacrieurs sont des tanks agressifs qui utilisent leurs propres points de vie comme ressource. Ils peuvent absorber d'énormes quantités de dégâts et les convertir en puissance offensive, ce qui en fait d'excellents combattants de première ligne."
    "feca" = "Les Fécas sont spécialisés dans la protection et les armures. Ils peuvent créer des glyphes sur le terrain et offrir divers boucliers à leurs alliés, faisant d'eux d'excellents protecteurs d'équipe et contrôleurs de zone."
    "xelor" = "Les Xelors manipulent le temps et l'espace. Ils peuvent ralentir leurs ennemis, se téléporter sur le champ de bataille, et infligent des dégâts qui augmentent avec le temps. Leur gameplay complexe offre de nombreuses possibilités tactiques."
    "pandawa" = "Les Pandawas sont polyvalents, capables de soulever et lancer des alliés ou des ennemis. Ils peuvent également consommer de l'alcool pour renforcer leurs capacités, passant de la mêlée aux attaques à distance selon les besoins."
    "sram" = "Les Srams sont des assassins furtifs utilisant pièges et poisons. Ils peuvent devenir invisibles pour se repositionner et infliger d'importants dégâts critiques. Cette classe excelle dans la surprise et l'élimination rapide de cibles isolées."
    "sadida" = "Les Sadidas utilisent des poupées et contrôlent la nature. Ils peuvent planter des ronces, invoquer des poupées et manipuler le terrain. Cette classe excelle dans le contrôle de zone et l'usure avec ses dégâts sur la durée."
    "enutrof" = "Les Enutrofs sont experts en fouille et collection de butins. Ils manipulent la terre et peuvent immobiliser leurs ennemis tout en générant des ressources supplémentaires. Leur style de jeu mêle contrôle et support."
    "zobal" = "Les Zobals sont des maîtres du déguisement qui changent de masques pour alterner entre différents rôles. Chaque masque offre des aptitudes uniques, leur permettant de s'adapter rapidement à diverses situations de combat."
    "huppermage" = "Les Huppermages maîtrisent tous les éléments et peuvent les combiner pour créer des effets dévastateurs. Leur capacité à adapter leurs attaques en fonction des faiblesses ennemies et à manipuler les éléments en fait des mages polyvalents."
    "eliotrope" = "Les Eliotropes manipulent les portails dimensionnels. Ils peuvent ouvrir des portails pour se déplacer ou déplacer leurs alliés sur le champ de bataille, et peuvent aussi amplifier leurs sorts en les faisant passer plusieurs fois à travers ces portails."
    "roublard" = "Les Roublards sont des maîtres de la ruse qui utilisent des bombes et des pièges. Ils peuvent poser des explosifs sur le champ de bataille puis les déclencher au moment opportun, infligeant des dégâts considérables dans des zones stratégiques."
    "steamer" = "Les Steamers sont des ingénieurs qui combattent avec l'aide de tourelles mécaniques. Leurs mécanismes leur permettent de contrôler le terrain et d'attaquer à distance, tandis qu'ils supportent leur équipe avec diverses capacités techniques."
}

$classesDir = "c:\Users\Administrateur\Desktop\nexuswakfu\src\content\classes"
$classFiles = Get-ChildItem -Path $classesDir -Filter "*.mdx"

foreach ($file in $classFiles) {
    $className = $file.BaseName.ToLower()
    
    # Vérifie si on doit mettre à jour ce fichier
    if ($classDescriptions[$className] -ne $null) {
        $content = Get-Content -Path $file.FullName -Raw
        
        # Vérifier si gameplayDescription existe déjà
        if ($content -notmatch "gameplayDescription:") {
            # Cherche le pattern où ajouter la description
            $updatedContent = $content -replace '(role:.*\r?\nspecialty:.*(?:\r?\n))', "`$1gameplayDescription: `"$($classDescriptions[$className])`"`r`n`r`n"
            
            # Écrire le contenu mis à jour dans le fichier
            Set-Content -Path $file.FullName -Value $updatedContent -NoNewline
            
            Write-Host "Ajout de la gameplayDescription pour $className"
        } else {
            Write-Host "$className a déjà une gameplayDescription"
        }
    }
}

Write-Host "Mise à jour des descriptions de gameplay terminée."
