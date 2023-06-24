const St = imports.gi.St;
const Main = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;
const Util = imports.misc.util;

let button;

class OpenChromeButton extends PanelMenu.Button {
    _init() {
        super._init(0.0, 'Open Chrome', false);
        this.add_child(new St.Icon({
            icon_name: 'google-chrome-symbolic',
            style_class: 'system-status-icon'
        }));
        this.connect('button-press-event', this._onClick.bind(this));
    }

    _onClick() {
        Util.spawn(['google-chrome', 'https://openai.com/research/chatgpt']);
    }
}

function init() {
    button = new OpenChromeButton();
}

function enable() {
    Main.panel.addToStatusArea('open-chrome-button', button);
}

function disable() {
    button.destroy();
}
