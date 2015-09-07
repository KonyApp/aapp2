//startup.js file
var appConfig = {
    appId: "aapp2",
    appName: "aapp2",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "169.254.80.80",
    serverPort: "80",
    secureServerPort: "443",
    url: "http://127.0.0.1:8080/aapp2/MWServlet",
    secureurl: "http://127.0.0.1:8080/aapp2/MWServlet",
    middlewareContext: "aapp2"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    Form0092af6c0c4af49Globals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        APILevel: 7000
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            Form0092af6c0c4af49.show();
        }
    });
};

function loadResources() {
    kony.theme.packagedthemes(
    ["default"]);
    globalhttpheaders = {};
    callAppMenu();
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    loadResources();
};