from flask import Blueprint, jsonify, request
from controllers import UserController

users_routes = Blueprint("users_routes", __name__)


@users_routes.route("/users", methods=["POST"])
def create_user():
    "Rota para criar um usuário"
    data = request.get_json()

    if not data:
        return jsonify({"message": "No input data provided"}), 400
    data = UserController().create_user(data)
    return data, 200


@users_routes.route("/users/<user_id>", methods=["GET"])
def get_user_by_id(user_id:str):
    "Rota para buscar um usuário por ID"
    data = UserController().get_user_by_id(user_id)
    return data, 200

@users_routes.route("/users/<user_id>", methods=["PUT"])
def update_user(user_id:str):
    "Rota para atualizar um usuário"
    data = request.get_json()

    if not data:
        return jsonify({"message": "No input data provided"}), 400
    data = UserController().update_user(user_id,data)
    return data

@users_routes.route("/users/<user_id>", methods=["DELETE"])
def delete_user(user_id:str):
    "Rota para deletar um usuário"
    response = UserController().delete_user(user_id)
    if response.get("error"):
        return response, 400
    return response, 200

@users_routes.route("/users/list/<user_id>", methods=["POST"])
def create_list(user_id:str):
    "Rota para o usuário ver suas listas de jogos"
    data = request.get_json()

    if not data:
        return jsonify({"message": "No input data provided"}), 400
    list_id = UserController().create_list(user_id,data)
    return {"list_id": list_id}, 200


@users_routes.route("/users/list/add_game/<list_id>/<user_id>/<game_id>", methods=["POST"])
def get_all_users(user_id:str, game_id:str):
    "Rota para o usuário adicionar um jogo a sua lista de jogos"