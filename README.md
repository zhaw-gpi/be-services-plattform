# eUmzugPrototyp: BEservices Plattform (be-services-webapp-webjar)

> Autoren der Dokumentation: Björn Scheppler

> Dokumentation letztmals aktualisiert: 30.12.2018

**Maven**-Projekt zur Erstelllung eines **WebJAR** für die [**Camunda Webapps**](https://docs.camunda.org/manual/latest/webapps/) mit benutzerdefinierten Eigenschaften (Logo, Farbe, Ubersetzung, usw.).

Dieses Projekt wird in der [**eUmzugPrototyp-Lösung**](https://github.com/zhaw-gpi/eumzug-plattform-2018) verwendet, welche [eumzug.swiss](https://www.eumzug.swiss) nachbildet. Erarbeitet am [**Institut für Wirtschaftsinformatik** an der ZHAW School of Management and Law](http://www.zhaw.ch/iwi) im Rahmen des [Bachelor-Studiengangs Wirtschaftsinformatik](https://www.zhaw.ch/de/sml/studium/bachelor/wirtschaftsinformatik/) im [**Modul Geschäftsprozessintegration**](https://modulmanagement.sml.zhaw.ch/StaticModDescAblage/Modulbeschreibung_w.BA.XX.2GPI-WIN.XX.pdf).

Hauptinspiration dieses Projekts von diesem [**Camunda Forumsbeitrag**](https://forum.camunda.org/t/spring-boot-replace-config-js-for-webapps-configuration/8401)

## (Technische) Komponenten der BEservices Plattform
**Wichtig**: Dieses Projekt ist für sich alleine nicht "lauffähig", da es hier lediglich darum geht, ein WebJAR zu generieren, welches dann in der [**eUmzugPrototyp-Lösung**](https://github.com/zhaw-gpi/eumzug-plattform-2018) verwendet werden kann als teilweise Ersatz für die Standard-Camunda-Webapps.

1. **Camunda Webapps WebJAR**: Als Basis für das eigene WebJAR dient das aktuelle von Camunda zur Verfügung gestellte WebJAR, bei dem gewisse Dateien (siehe nächste Punkte) ersetzt oder ergänzt werden.
2. **Deutsche Sprachdateien**:
    1. Von https://github.com/camunda/camunda-webapp-translations werden im pom.xml direkt die neusten Sprachdateien für Tasklist, Admin, Cockpit und Welcome heruntergeladen.
3. **Logo und Favicon**: Im Ordner artwork gibt es ein Favicon und ein Logo für den Kanton Bern, die an den entsprechenden Stellen in den Webapps reingeladen werden, um das Standard-Camunda Logo zu ersetzen.
4. **Benutzerdefinierte Farben und sonstige Stile**: In den user-styles.css-Dateien pro App folgendes angepasst:
    1. Für den Kanton Bern passende Farben für Linien, usw.
    2. Tasklist-App: Zahlreiche Elemente über display:hidden ausgeblendet, um das GUI übersichtlicher zu halten.
5. **Benutzerdefinierte Scripts** in src\main\resources\META-INF\resources\app\tasklist\scripts\config.js:
    1. **Stripe Checkout**: In der Umzugsplattform wird für den Bezahlvorgang der Stripe-Dienst genutzt.
    2. **Google Maps**: Im "Alle Angaben prüfen"-Formular wird die Zuzugsadresse in einer Google Maps-Karte angezeigt. **Wichtig**: Dies benötigt einen Google Maps-Entwickler-Key, welchen man als Umgebungsvariable GOOGLE_MAPS_KEY in diesem Projekt (nicht in Umzugsplattform) setzen muss. Hat man diesen nicht, wird es in der Umzugsplattform stets eine Fehlermeldung in der Konsole des Browsers geben.

## Deployment
1. Wenn man die **Enterprise Edition** von Camunda verwenden will, benötigt man die Zugangsdaten zum Nexus Repository und eine gültige Lizenz. Wie man diese "installiert", steht in den Kommentaren im pom.xml.
2. **Erstmalig** oder bei Problemen ein **Clean & Build (Netbeans)**, respektive `mvn clean install` (Cmd) durchführen
3. Bei Änderungen am POM-File oder bei **(Neu)kompilierungsbedarf** genügt ein **Build (Netbeans)**, respektive `mvn install`
4. Beim Build-Prozess wird das **JAR-File** auch im lokalen Maven-Repository abgelegt.

## Nutzung
In der [**eUmzugPrototyp-Lösung**](https://github.com/zhaw-gpi/eumzug-plattform-2018) muss im pom-File die Abhängigkeit zu dieser Ressource wie folgt hergestellt werden, was einerseits die Standard-Camunda-Webapps integriert, aber das WebJAR ersetzt mit diesem angepassten:

```
<dependency>
    <groupId>org.camunda.bpm.springboot</groupId>
    <artifactId>camunda-bpm-spring-boot-starter-webapp${camunda.enable.ee}</artifactId>
    <version>${camunda-bpm-spring-boot-starter.version}</version>

    <exclusions>
        <exclusion>
            <groupId>org.camunda.bpm.webapp</groupId>
            <artifactId>camunda-webapp-webjar${camunda.enable.ee}</artifactId>
        </exclusion>
    </exclusions>
</dependency>        
<dependency>
    <groupId>ch.zhaw.gpi</groupId>
    <artifactId>be-services-webapp-webjar</artifactId>
    <version>${camunda.version}${camunda.enable.ee}</version>
</dependency>
```