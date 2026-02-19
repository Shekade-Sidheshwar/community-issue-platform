# backend/app.py
from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from config import Config
from database import db

from routes.admin_auth_routes import admin_bp
from routes.user_auth_routes import user_auth_bp 

app = Flask(__name__)
CORS(app, supports_credentials=True)

app.config.from_object(Config)

db.init_app(app)
jwt = JWTManager(app)

# Register admin blueprint
app.register_blueprint(admin_bp, url_prefix="/api/admin")
app.register_blueprint(user_auth_bp, url_prefix="/api/users")

# Create tables if not exists
with app.app_context():
    db.create_all()

@app.route("/")
def home():
    return "Admin API is running!"

if __name__ == "__main__":
    app.run(debug=True)
