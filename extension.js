const St = imports.gi.St;
const Main = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;
const GLib = imports.gi.GLib;
const Clutter = imports.gi.Clutter;

let menu;

var HolaCompilando = class HolaCompilando extends PanelMenu.Button {
    _init() {
        super._init(0.0, "Hola Compilando");

        let botonIcono = new St.Icon({
            icon_name: 'system-run-symbolic',
            style_class: 'system-status-icon'
        });

        let boton = new St.Button({
            reactive: true,
            can_focus: true,
            track_hover: true,
            child: botonIcono
        });

        this.add_child(boton);

        boton.connect('button-press-event', () => {
            GLib.spawn_command_line_async('python3 gtk_window.py');
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
