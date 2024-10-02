from flask import Flask
from flask_cors import CORS


import py_hot_reload

app = Flask(__name__)
CORS(app)

def main():
    #importando e registrando as rotas
    from api.games import games_routes
    from api.records import records_routes
    from api.user import user_routes

    app.register_blueprint(games_routes)
    app.register_blueprint(records_routes)
    app.register_blueprint(user_routes)

    if __name__ == '__main__':
        app.run()

py_hot_reload.run_with_reloader(main)
