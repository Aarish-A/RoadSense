from templates import app, api, socketio
from flask import request, Response, render_template
from flask_socketio import emit
from predict import predict_sound

@app.route('/', methods=['GET'])
def home():
    return render_template('index.html')

@app.route('/api/crash_history', methods=['POST'])
def add_crash():
    if not request.content_type == 'application/json':
        return Response('failed', 'content_type must be application/json', 401)
    data = request.get_json()
    return api.add_crash(data['crash'])

@socketio.on('predict')
def handle_prediction(audio):
    print('Attemping to predict sound...')
    emit('prediction', predict_sound(audio))
