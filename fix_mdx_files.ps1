$classesDirPath = "c:\Users\Administrateur\Desktop\nexuswakfu\src\content\classes"
$classFiles = Get-ChildItem -Path $classesDirPath -Filter "*.mdx"

foreach ($file in $classFiles) {
    $className = $file.BaseName
    $className = $className.Substring(0, 1).ToUpper() + $className.Substring(1).ToLower()
    $content = Get-Content -Path $file.FullName -Raw
    
    Write-Host "Traitement de $className..."
    
    # 1. Correction du format uniquePassive
    if ($content -match 'uniquePassive:(?![\r\n\s]+name:)') {
        Write-Host "  Correction du format uniquePassive pour $className"
        $content = $content -replace 'uniquePassive:(.*?)(\r?\n)',
            "uniquePassive:`r`n  name: `"Furie du $className`"`r`n  description: `"Chaque coup critique augmente vos dégâts de 5% pour 2 tours. Cumulable jusqu'à 3 fois.`"`r`n"
    }
    
    # 2. Correction des chaînes multilignes dans les abilities
    if ($content -match 'name:\s*"[^"]*\r?\n[^"]*"') {
        Write-Host "  Correction des chaînes multilignes dans abilities pour $className"
        $content = $content -replace 'name:\s*"([^"]*)\r?\n([^"]*)"', 'name: "$1 $2"'
    }
    
    # Écriture du contenu mis à jour dans le fichier
    Set-Content -Path $file.FullName -Value $content -NoNewline
}

Write-Host "Correction des fichiers MDX terminée."
