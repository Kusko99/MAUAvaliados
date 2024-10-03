from flask import Flask
from flask_cors import CORS


import py_hot_reload

app = Flask(__name__)
CORS(app)

def main():
    #importando e registrando as rotas
    from routes import users_routes

    app.register_blueprint(users_routes)

    if __name__ == '__main__':
        app.run(port=7000)

py_hot_reload.run_with_reloader(main)
