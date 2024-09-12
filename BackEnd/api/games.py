from flask import Blueprint
from services.controllers.games import GameAPI

# Criando o blueprint corretamente
games_routes = Blueprint('games_routes', __name__)

@games_routes.route('/')
def hello():
    return GameAPI().get_access_token()

@games_routes.route("/games/games", methods = ["GET"])
def get_games():
    return GameAPI().get_games()
