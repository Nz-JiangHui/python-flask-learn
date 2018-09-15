from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/getMsg": {"origins": "*"}})

@app.route('/')
def hello_world():
  return 'Hello World!'

@app.route('/api/getMsg', methods=['GET', 'POST'])
def home():
  response = {
    'msg': 'Hello, Python !'
  }
  return jsonify(response)

if __name__ == '__main__':
  app.run()