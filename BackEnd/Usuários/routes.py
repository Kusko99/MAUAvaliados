from flask import Blueprint, jsonify
from controllers import UserController

users_routes = Blueprint('users_routes', __name__)

