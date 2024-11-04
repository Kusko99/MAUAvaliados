from flask import Blueprint, jsonify, request
from controllers import AvaliacaoController

avaliacao_routes = Blueprint('avalicao_routes', __name__)

@avaliacao_routes.route("/aval", methods=["POST"])
def create_avaliacao():
    "Rota para criar uma avaliacao"
    data = request.get_json()

    if not data:
        return jsonify({"message": "No imput data provided"}), 400
    data = AvaliacaoController().create_avaliacao(data)
    return data, 200

@avaliacao_routes.route("/aval/get_by_user/<id_user>", methods =["GET"])
def get_aval_by_id_user(id_user:str):
    "rota para buscar uma avaliação pelo id do usuário"
    data = AvaliacaoController().get_aval_by_id_user(id_user)
    return data, 200

@avaliacao_routes.route("/aval/get_by_jogo/<id_jogo>", methods =["GET"])
def get_aval_by_id_jogo(id_jogo:str):
    "rota ppara buscar uma avaliação pelo id do jogo"
    data = AvaliacaoController().get_aval_by_id_jogo(id_jogo)
    return data, 200