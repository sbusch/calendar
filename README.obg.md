# bei neueren versionen kommt fehler "ReferenceError: primordials is not defined"
nvm use 10

git fetch --all --tags -p

git merge 9.13.1
Achtung! Wenn branch statt tag merged werden soll, dann muss zur Zeit 9.x branch merged werden (master zeigt auf 10.x ff)

# conflits resolven
# version in package.json setzen, bspwl. 9.13.1-obg.1

# aktualisierte module installieren (vor commit, da dort
# dann eventuell pre-commit checks laufen (z.b. tests), die
# mit veralteten modulen fehlschlagen würden)
npm install

# commit (Hinweis: der eigene pre-commit code läuft (noch?)
# nicht mit node 12, man bekommt dann den folgenden Fehler:
# "ReferenceError: primordials is not defined in node". Daher
# nvm exec 10 ...)
nvm exec 10 git commit
# bei probleme evtl checks umgehen mit alternative: git commit -n

npm run pub

# git push ist nicht mehr notwendig, da dies implizit von
# npm run pub erledigt wurde, inkl. tagging etc

# oder manuell, äquivalent?:
# npm run compile
# npm run build
# npm publish
# git push
