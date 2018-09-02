/**
 * Konfiguration für die Admin-Webapp gemäss https://forum.camunda.org/t/spring-boot-replace-config-js-for-webapps-configuration/8401
 */
window.camAdminConf = {
    // Angezeigter Applikations-Name und Hersteller aus Variablen in application.properties
    app: {
        name: '${CUSTOM_ADMIN_TITLE}',
        vendor: '${CUSTOM_VENDOR_NAME}'
    },
    // Weitere Frontend-Sprachen (konkret Deutsch) aus application.properties unterstüzten
    'locales': {
        'availableLocales': ['${CUSTOM_LANG}', 'en'],
        'fallbackLocale': 'en'
    }
};
