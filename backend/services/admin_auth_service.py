# backend/services/admin_auth_service.py
from models.admin_model import Admin
from flask_jwt_extended import create_access_token
from datetime import timedelta

def login_admin(email, password):
    """Login admin and return JWT token"""
    admin = Admin.query.filter_by(email=email).first()
    if admin and admin.check_password(password):
        token = create_access_token(
            identity={"id": admin.id, "email": admin.email},
            expires_delta=timedelta(hours=12)
        )
        return {"message": "Login successful", "access_token": token}, 200
    return {"message": "Invalid credentials"}, 401
