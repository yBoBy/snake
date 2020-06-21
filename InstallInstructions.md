# Used Packages
- react-native-game-engine
- react-native-gesture-handler
- react-native-swipe-gestures
- react-navigation
- underscore

# Installation
1. Initialisieren Sie ein neues Projekt. ` npx react-native init **projectname** `
2. Verschieben und überschreiben sie eventuell schon existierende Dateien mit den Dateien im Unterorder snake/
3. Mithilfe der JSON-Dateien sollten fast alle Dependencies automatisch installiert werden:
` npm install `
4. Folgendes Kommando muss noch im Projektordner ausgeführt werden:
` npm install underscore ` (wird nicht automatisch installiert)
5. 
```java
/*
Für GIF im Hauptmenü, folgende Zeilen in
./android/app/build.gradle hinzufügen an der Stelle:
*/

dependencies {
    // hier stehen schon Sachen, Folgendes einfach am Ende einfügen

    implementation 'com.facebook.fresco:fresco:2.0.0'
    implementation 'com.facebook.fresco:animated-gif:2.0.0'

}
/*
Nach dem Einfügen und speichern, sollte Android Studio nach einem Gradle-Sync fragen.
Diesen ausführen lassen.
Im Fall, dass kein Androidstudio nicht verwendet wird im "android" Ordner des Projekts
.\gradlew build
*/
```

6. ` npx react-native start ` um den Metro Server zu starten
7. ` npx react-native run-android ` um die App zu starten

## WICHTIG:
Warum auch immer stürzt die App teilweise manchmal ab.
Warum genau dieser Fehler auftritt, ist uns nicht bekannt.
Bis jetzt hat es immer geholfen die App neu zu laden. (doppel r im Emulator / Reload über Developer Menü)
Wenn Debugging aktiviert ist, tritt der Fehler wahrscheinlich immer auf, also am besten kein Debug anmachen.
