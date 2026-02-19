from flask import Blueprint, request, jsonify
from services.user_auth_service import signup_user, login_user

user_auth_bp = Blueprint("user_auth", __name__)


@user_auth_bp.route("/signup", methods=["POST"])
def signup():
    data = request.get_json()

    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    if not name or not email or not password:
        return jsonify({"message": "All fields are required"}), 400

    result, error = signup_user(name, email, password)

    if error:
        return jsonify({"message": error}), 409

    return jsonify(result), 201


@user_auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"message": "Email and password are required"}), 400

    result, error = login_user(email, password)

    if error:
        return jsonify({"message": error}), 401

    return jsonify(result), 200
