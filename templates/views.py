from templates import app, api
from flask import request, Response

@app.route('/', methods=['GET'])
def home():
    return 'yes'

@app.route('/api/crash_history', methods=['POST'])
def add_crash():
    if not request.content_type == 'application/json':
        return Response('failed', 'content_type must be application/json', 401)
    data = request.get_json()
    return api.add_crash(data['crash'])