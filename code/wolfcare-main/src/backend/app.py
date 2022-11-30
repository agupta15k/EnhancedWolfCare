from werkzeug.exceptions import HTTPException
from flask import Flask, request, jsonify
from flask_cors import CORS
import json
from src.backend.utils import *

# Flask application configuration
app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET', 'POST', 'OPTIONS'])
def empty():
    """
    Empty function which sends a json when we start the application.\n
    Response is a json which contains:\n
    1) Status - This can take 3 values = (200 : Perfect response, 405 : Database Error, 400 : Failure from client side ).\n
    2) Data - Associated data with the operation.\n
    3) Message - A message assoicated with the status.
    Returns
    ----------
    json
        Returns a json containing the status, data(No data associated with this function, hence the data is empty), message in accordance with the status.
    """

    return jsonify({"status": 200, "data": {}, "message": "Backend working"})

