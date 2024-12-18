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

@avaliacao_routes.route("/aval/<id>", methods=["PUT"])
def update_aval(id:str):
    "Rota para atualizar uma avaliação"
    data = request.get_json()

    if not data:
        return jsonify({"message": "No input data provided"}), 400
    data = AvaliacaoController().update_aval(id, data)
    return data

@avaliacao_routes.route("/aval/<id>", methods=["DELETE"])
def delete_aval(id:str):
    "Rota para deletar uma avaliação"
    response = AvaliacaoController().delete_aval(id)
    if response.get("error"):
        return response, 400
    return response, 200