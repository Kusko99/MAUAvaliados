from flask import Flask


app = Flask(__name__)

#importando e registrando as rotas
from api.games import games_routes
from api.records import records_routes
from api.user import user_routes

app.register_blueprint(games_routes)
app.register_blueprint(records_routes)
app.register_blueprint(user_routes)

if __name__ == '__main__':
    app.run()