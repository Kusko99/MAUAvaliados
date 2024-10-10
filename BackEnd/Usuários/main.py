from flask import Flask
from connector import db, init_db

app = Flask(__name__)


def main():
    #importando e registrando as rotas
    from routes import users_routes
    init_db(app)
    app.register_blueprint(users_routes)
    
if __name__ == '__main__':
    main()
    app.run(port=7000, debug=True)
   