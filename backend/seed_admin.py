from app import app
from database import db
from models.admin_model import Admin

with app.app_context():
    admin = Admin.query.filter_by(email="admin@gmail.com").first()
    if not admin:
        admin = Admin(username="admin", email="admin@gmail.com")
    admin.set_password("Admin@123")  # Hashes the password
    db.session.add(admin)
    db.session.commit()
    print("Admin password hashed and saved!")
