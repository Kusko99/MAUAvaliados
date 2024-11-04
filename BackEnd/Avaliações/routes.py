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