/**
 * Konfiguration für die Welcome-Webapp gemäss https://forum.camunda.org/t/spring-boot-replace-config-js-for-webapps-configuration/8401
 */
window.camWelcomeConf = {
    // Angezeigter Applikations-Name und Hersteller aus Variablen in application.properties
    app: {
        name: '${CUSTOM_WELCOME_TITLE}',
        vendor: '${CUSTOM_VENDOR_NAME}'
    },
    // Weitere Frontend-Sprachen (konkret Deutsch) aus application.properties unterstüzten
    "locales": {
        "availableLocales": ["en", "de"],
        "fallbackLocale": "en"
    },
    // Einen Link zur Startseite des Kantons Bern hinzufügen unten im Welcome-Bereich
    links: [
        {
            label: 'Startseite Kanton Bern',
            href: 'https://www.be.ch/',
            description: 'Von A-Z alles Relevante der kantonalen Verwaltung'
        }
    ]
};
