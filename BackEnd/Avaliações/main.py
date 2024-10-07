from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def main():
    from routes import avalicao_routes

    app.register_blueprint(avalicao_routes)

    if __name__ == '__main__':
        app.run(port=6000, debug=True)