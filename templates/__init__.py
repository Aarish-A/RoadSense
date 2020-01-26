from flask import Flask
from flask_socketio import SocketIO

app = Flask(__name__,
static_folder='../build/static',
template_folder='../build')
app.config['SECRET_KEY'] = 'secret'
socketio = SocketIO(app)


import templates.views