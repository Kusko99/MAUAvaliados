from flask import Flask
from flask_cors import CORS

import py_hot_reload

app = Flask(__name__)
CORS(app)

def main():
    #importando e registrando as rotas
    from routes import games_routes

    app.register_blueprint(games_routes)

    if __name__ == '__main__':
        app.run(port=5000)

py_hot_reload.run_with_reloader(main)