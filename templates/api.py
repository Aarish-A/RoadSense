import firebase_admin, time, google
from firebase_admin import credentials, firestore
from google.cloud.firestore_v1 import ArrayUnion, SERVER_TIMESTAMP, Increment
from flask import Response

cred = credentials.Certificate("deltahacks-1580042834253-firebase-adminsdk-719kb-801dac3fa9.json")
firebase_admin.initialize_app(cred, {'projectId': 'deltahacks-1580042834253'})

db = firestore.client()

def add_crash(crash):
    try:
        db.collection('crashes').document.add(crash)
    except:
        Response('failed', 'Could not add crash', 401)
    return Response('Successfully added crash', 200)