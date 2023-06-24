# gtk_window.py
import gi
gi.require_version('Gtk', '3.0')
from gi.repository import Gtk

class HelloWorld(Gtk.Window):

    def __init__(self):
        Gtk.Window.__init__(self, title="Hola Compilando")
        self.button = Gtk.Button(label="Cerrar")
        self.button.connect("clicked", self.on_button_clicked)
        self.add(self.button)

    def on_button_clicked(self, widget):
        print("Hola Compilando")
        Gtk.main_quit()

win = HelloWorld()
win.connect("destroy", Gtk.main_quit)
win.show_all()
Gtk.main()
