# backend/routes/admin_auth_routes.py
from flask import Blueprint, request, jsonify
from services.admin_auth_service import login_admin

admin_bp = Blueprint("admin_bp", __name__)

@admin_bp.route("/login", methods=["POST"])
def admin_login():
    """
    POST /api/admin/login
    Body: { "email": "...", "password": "..." }
    """
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    response, status_code = login_admin(email, password)
    return jsonify(response), status_code
