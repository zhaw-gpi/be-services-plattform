window.camTasklistConf = {
    // change the app name and vendor
    app: {
        name: '${CUSTOM_TASKLIST_TITLE}',
        vendor: '${CUSTOM_VENDOR_NAME}'
    },
    //
    // configure the date format
    // "dateFormat": {
    //   "normal": "LLL",
    //   "long":   "LLLL"
    // },

    "locales": {
        "availableLocales": ["${CUSTOM_LANG}", "en"],
        "fallbackLocale": "en"
    },

     // custom libraries and scripts loading and initialization,
     // see: http://docs.camunda.org/guides/user-guide/#tasklist-customizing-custom-scripts
     customScripts: {
       // AngularJS module names
       ngDeps: [],
       // RequireJS configuration for a complete configuration documentation see:
       // http://requirejs.org/docs/api.html#config
       deps: ['stripecheckout', 'gmaps'],
       paths:{
           'stripecheckout':'https://checkout.stripe.com/checkout',
           'gmaps':'https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_KEY}'
       },
       shim:{
           'stripecheckout':{'exports':'StripeCheckout'},
           'gmaps':{'exports':'google.maps'}
       }
     }
};
