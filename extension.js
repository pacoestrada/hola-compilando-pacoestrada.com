const St = imports.gi.St;
const Gio = imports.gi.Gio;  // necesitarás también importar Gio
const Main = imports.ui.main;
const Shell = imports.gi.Shell;
const Util = imports.misc.util;

let button;

function init() {
    button = new St.Bin({
        style_class: 'panel-button',
        reactive: true,
        can_focus: true,
        track_hover: true
    });

    // Asume que el logotipo está en la misma carpeta"
    let gicon = Gio.icon_new_for_string("openai.svg");
    let icon = new St.Icon({
        gicon: gicon,
        style_class: 'system-status-icon'
    });

    button.set_child(icon);
    button.connect('button-press-event', _ => {
        Util.spawn(["google-chrome", "https://chat.openai.com/auth/login"]);
    });
}

function enable() {
    Main.panel._rightBox.insert_child_at_index(button, 0);
}

function disable() {
    Main.panel._rightBox.remove_child(button);
}
