from flask import Blueprint, jsonify
from controllers import RecomendaController

recomendacao_routes = Blueprint('recomendacao_routes', __name__)

@recomendacao_routes.route("/recomendacao/<user_id>", methods=["GET"])
def get_recomendacao_by_id(user_id:str):
    "Rota para buscar uma recomendação por ID do usuario"
    data = RecomendaController().get_recomendacao_by_id(user_id)
    return data, 200

