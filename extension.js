const St = imports.gi.St;
const Main = imports.ui.main;
const Clutter = imports.gi.Clutter;
const ModalDialog = imports.ui.modalDialog;

let button, dialog;

class MyDialog extends ModalDialog.ModalDialog {
    _init() {
        super._init();
        let label = new St.Label({ text: 'Hola Compilando' });
        this.contentLayout.add(label);
        this.setButtons([{ label: 'Cerrar', action: this.close.bind(this), key: Clutter.KEY_Return }]);
    }
}

function init() {
    button = new St.Bin({ style_class: 'panel-button' });
    let icon = new St.Icon({ icon_name: 'system-run-symbolic', style_class: 'system-status-icon' });
    button.set_child(icon);
    button.connect('button-press-event', function() {
        if (!dialog) {
            dialog = new MyDialog();
        }
        dialog.open();
    });
}

function enable() {
    Main.panel._rightBox.insert_child_at_index(button, 0);
}

function disable() {
    Main.panel._rightBox.remove_child(button);
    if (dialog) {
        dialog.close();
        dialog = null;
    }
}

