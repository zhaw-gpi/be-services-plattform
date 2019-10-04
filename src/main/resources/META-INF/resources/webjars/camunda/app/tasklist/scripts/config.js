/**
 * Konfiguration für die Tasklist-Webapp gemäss https://forum.camunda.org/t/spring-boot-replace-config-js-for-webapps-configuration/8401
 */
window.camTasklistConf = {
    // Angezeigter Applikations-Name und Hersteller aus Variablen in application.properties
    app: {
        name: '${CUSTOM_TASKLIST_TITLE}',
        vendor: '${CUSTOM_VENDOR_NAME}'
    },
    // Weitere Frontend-Sprachen (konkret Deutsch) aus application.properties unterstüzten
    "locales": {
        "availableLocales": ["${CUSTOM_LANG}", "en"],
        "fallbackLocale": "en"
    },
    // Hinzufügen eines benutzerdefinierten Skripts gemäss http://docs.camunda.org/guides/user-guide/#tasklist-customizing-custom-scripts
    // Konkret Stripe Checkout-Javascript-Libraries beim Konfigurieren der Angular App als Abhängigkeiten hinzufügen
    customScripts: {
        // Benötigte Angular-Module im benutzerdefinierten Skript (keine benötigt)
        ngDeps: [],
        // Abhängigkeiten gemäss RequireJS konfigurieren (http://requirejs.org/docs/api.html#config)
        // Konkret sind dies Stripe Checkout
        deps: ['stripecheckout'],
        paths: {
            'stripecheckout': 'https://checkout.stripe.com/checkout'
        },
        shim: {
            'stripecheckout': {'exports': 'StripeCheckout'}
        }
    }
};
