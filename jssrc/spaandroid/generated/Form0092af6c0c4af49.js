function addWidgetsForm0092af6c0c4af49() {
    var Button0c4c0c7773c6b4b = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "Button0c4c0c7773c6b4b",
        "isVisible": true,
        "left": "113dp",
        "skin": "slButtonGlossBlue",
        "text": "Button",
        "top": "143dp",
        "width": "260dp"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var Image0808cb01bf2f64e = new kony.ui.Image2({
        "height": "150dp",
        "id": "Image0808cb01bf2f64e",
        "isVisible": true,
        "left": "136dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "36dp",
        "width": "150dp",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var Image08801991528eb41 = new kony.ui.Image2({
        "height": "150dp",
        "id": "Image08801991528eb41",
        "isVisible": true,
        "left": "114dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "143dp",
        "width": "150dp",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    var Button0b80d5181983f49 = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "Button0b80d5181983f49",
        "isVisible": true,
        "left": "249dp",
        "skin": "slButtonGlossBlue",
        "text": "user2",
        "top": "285dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [6, 6, 6, 6],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {});
    Form0092af6c0c4af49.add(
    Button0c4c0c7773c6b4b, Image0808cb01bf2f64e, Image08801991528eb41, Button0b80d5181983f49);
};

function Form0092af6c0c4af49Globals() {
    Form0092af6c0c4af49 = new kony.ui.Form2({
        "addWidgets": addWidgetsForm0092af6c0c4af49,
        "enabledForIdleTimeout": false,
        "id": "Form0092af6c0c4af49",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
    Form0092af6c0c4af49.setDefaultUnit(kony.flex.DP);
};