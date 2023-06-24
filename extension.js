const St = imports.gi.St;
const Main = imports.ui.main;
const Lang = imports.lang;
const Clutter = imports.gi.Clutter;
const ModalDialog = imports.ui.modalDialog;

let button, dialog;

const MyDialog = new Lang.Class({
    Name: 'MyDialog',
    Extends: ModalDialog.ModalDialog,

    _init: function() {
        this.parent();
        let label = new St.Label({ text: 'Hola Compilando' });
        this.contentLayout.add(label);
        this.setButtons([{ label: 'Cerrar', action: this.close.bind(this), key: Clutter.KEY_Return }]);
    }
});

function init() {
    button = new St.Bin({ style_class: 'panel-button' });
    let icon = new St.Icon({ icon_name: 'system-run-symbolic', style_class: 'system-status-icon' });
    button.set_child(icon);
    button.connect('button-press-event', function() {
        dialog = new MyDialog();
        dialog.open();
    });

    dialog = new MyDialog();
}

function enable() {
    Main.panel._rightBox.insert_child_at_index(button, 0);
}

function disable() {
    Main.panel._rightBox.remove_child(button);
}

