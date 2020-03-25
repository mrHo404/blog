<h1 align="center"> Bavarian Multirotor Blog Website </h1>

## 1) Wie richte ich den quellcode ein
1. Node installieren
2. Git installieren
3. Kommandozeile öffnen und "git clone https://github.com/mrHo404/blog.git" eingeben
4. Navigiere in das Projekt "blog" in der Kommandozeile
5. Gebe "git checkout liveContent" ein und gehe sicher dass du auf dem branch "liveContent" bist. 
5. Gebe in der Kommandozeile "npm i" ein
6. Warten... Fertig

## 2) Wie schreibe ich einen neuen Artikel?
1. Update das Projekt wie in punkt 2.1 beschrieben
1. Navigiere zu "blog/src/pages/posts"
2. Dupliziere einer der ".md" Dateien
3. Benenne die Datei um (nummerierung fortsetzen)
4. Zwischen den "---" Zeichen befinden sich die Metadaten des Artikels, bitte richtig ausfüllen und auf Einrückung der "tags" achten
5. Artikel schreiben [Formatierungshilfe](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
6. Korrekturlesen!
7. Änderung Lokal testen wie in Punkt 2.3 beschrieben
8. Projekt bauen und auf den FTPServer legen wie in Punkt 2.4 beschrieben

### 2.1) Wie update ich das Projekt?
1. Navigiere in das Projekt "blog" in der Kommandozeile
2. Versichere dich dass du keine lokalen änderungen im Projekt hast indem du "git status" in der Kommandozeile eingibst
3. Wenn du Änderungen hast die egal sind gebe "git restore ." ein. ACHTUNG! alle lokalen Änderungen werden hierduch verworfen.
4. Wenn du die Änderungen sichern willst folge den Anweisungen in Punkt 2.2
5. Wenn es keine Ängerungen gibt, gebe "git pull" in der Kommandozeile ein.

### 2.2) Wie sichere ich meine Änderungen bei Git
1. Navigiere in das Projekt "blog" in der Kommandozeile
2. Gebe "git status" in der Kommandozeile ein. Du solltest nun alle geänderten Datein sehen
3. Gebe "git add ." in der Kommandozeile ein um ALLE geänderten Datein hinzuzufügen. Wahlweise kannst du auch einzelne Datein hinzufügen per "git add PFAD/DATEI"
4. Gebe nochmals "git status" ein um die Hinzugefügten Dateien zu sehen
5. Gebe "git commit -m "DEINE NACHRICHT" && git push" ein um deine Änderungen auf Git zu legen

### 2.3) Wie schaue ich die webseite lokal an?
1. Navigiere in das Projekt "blog"
2. In der Kommandozeile "npm run start" eingeben
3. Warten...
4. Im Browser "localhost:8000/" eingeben
5. Du befindest nun auf der lokalen Version der Seite

### 2.4) Wie baue ich das Projekt?
1. Teste die Seite Lokal wie in Punkt 2.3 beschrieben
2. Navigiere in das Projekt "blog" in der Kommandozeile
3. Gebe "git run cleanBuild" in die Kommandozeile ein
4. Warte bis das skript durchgelaufen ist
5. Kopiere den kompletten Inhalt in dem Ordner "public"
6. Lösche alle Dateien in dem Ordner "Bavarianmultirotorsquad" auf dem FTP server
7. Lege den Inhalt aus dem "public" ordner in dem ordner "Bavarianmultirotorsquad" ab

