/**
 * Konfiguration für die Cockpit-Webapp gemäss https://forum.camunda.org/t/spring-boot-replace-config-js-for-webapps-configuration/8401
 */
window.camCockpitConf = {
    // Angezeigter Applikations-Name und Hersteller aus Variablen in application.properties
    app: {
        name: '${CUSTOM_COCKPIT_TITLE}',
        vendor: '${CUSTOM_VENDOR_NAME}'
    },
    // Weitere Frontend-Sprachen (konkret Deutsch) aus application.properties unterstüzten
    'locales': {
        'availableLocales': ['${CUSTOM_LANG}', 'en'],
        'fallbackLocale': 'en'
    },
    // Wenn man Prozessinstanzen löscht sollen standardmässig Listener-Events auch gelöscht werden
    skipCustomListeners: {
       default: true,
       hidden: false
    }
};
