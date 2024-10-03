from flask import Flask
from flask_cors import CORS

import py_hot_reload

app = Flask(__name__)
CORS(app)

def main():
    from routes import recomendacao_routes

    app.register_blueprint(recomendacao_routes)

    if __name__ == '__main__':
        app.run(port=000)


py_hot_reload.run_with_reloader(main)