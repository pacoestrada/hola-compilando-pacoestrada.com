const St = imports.gi.St;
const Main = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;
const GObject = imports.gi.GObject;

let boton, botonIcono, menu;

var HolaCompilando = GObject.registerClass(
    {GTypeName: 'HolaCompilando'},
    class HolaCompilando extends PanelMenu.Button {
        _init() {
            super._init(0.0, "Hola Compilando");

            botonIcono = new St.Icon({
                icon_name: 'system-run-symbolic',
                style_class: 'system-status-icon'
            });

            boton = new St.Bin({
                style_class: 'panel-button',
                reactive: true,
                can_focus: true,
                track_hover: true
            });

            boton.set_child(botonIcono);
            this.add_actor(boton);

            boton.connect('button-press-event', () => {
                global.log("Hola Compilando");
            });
        }
    }
);

function init() {
}

function enable() {
    menu = new HolaCompilando();
    Main.panel.addToStatusArea('hola-compilando', menu);
}

function disable() {
    menu.destroy();
}
