from flask import Flask, render_template, redirect, request, session, url_for, send_from_directory, flash, \
    make_response, jsonify, Response, g, Blueprint
from flask_restful import reqparse, fields, marshal_with, abort, Api, Resource
from flask_bcrypt import Bcrypt
from flask_cors import CORS
import sys

app = Flask(__name__, static_url_path='', static_folder='./static', template_folder='./static')
api = Api(app)
bcrypt = Bcrypt(app)
CORS(app, resources={r"/api/*": {"origins": "*"}}, supports_credentials=True)

def hello():
    print('hello')

@app.route('/api')
def api():
    return 'api'

# routing > react_router (method = GET) 
@app.route('/', defaults={'path': ''}, methods=['GET'])
# @app.route('/<string:path>', methods=['GET'])
def catch_all(path):
    g.jinja2_test = 'jinja2 template working!'
    return render_template('index.html')

# 404 not found > react_router
@app.errorhandler(404)
def not_found(error):
    return render_template('index.html')

if __name__ == '__main__':
    if len(sys.argv) > 1:
        if sys.argv[1] == 'test':
            app.debug = True
    app.run()
