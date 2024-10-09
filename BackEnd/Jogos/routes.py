from flask import Blueprint, jsonify
from controllers import GameAPI

# Criando o blueprint corretamente
games_routes = Blueprint('games_routes', __name__)


@games_routes.route('/')
def hello():
    return "Bem-vindo ao serviço de jogos"

@games_routes.route("/games/games", methods = ["GET"])
def get_games():
    return GameAPI().get_games()


# @games_routes.route("/postcard", methods = ["POST"])
# def get_card():
#     return jsonify(GameAPI().post_card())



@games_routes.route("/getcard", methods = ["GET"])
def get_card():
    return GameAPI().get_card()