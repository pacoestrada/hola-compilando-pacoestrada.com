const St = imports.gi.St;
const Main = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;
const GLib = imports.gi.GLib;

let menu;

var HolaCompilando = class HolaCompilando extends PanelMenu.Button {
    _init() {
        super._init(0.0, "Hola Compilando");

        let icon = new St.Icon({
            icon_name: 'system-run-symbolic',
            style_class: 'system-status-icon'
        });

        this.add_actor(icon);

        this.connect('button-press-event', () => {
            GLib.spawn_command_line_async('python3 /ruta/al/script/gtk_window.py');
        });
    }
}

function init() {
}

function enable() {
    menu = new HolaCompilando();
    Main.panel.addToStatusArea('hola-compilando', menu);
}

function disable() {
    menu.destroy();
}
