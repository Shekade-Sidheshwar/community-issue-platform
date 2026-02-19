from werkzeug.security import generate_password_hash, check_password_hash

from models.user_model import get_user_by_email, create_user
from utils.jwt_helper import generate_token


def signup_user(name, email, password):
    email = email.lower().strip()

    existing = get_user_by_email(email)
    if existing:
        return None, "User already exists"

    hashed_password = generate_password_hash(password)

    user_id = create_user(name, email, hashed_password)

    return {
        "id": user_id,
        "name": name,
        "email": email
    }, None


def login_user(email, password):
    email = email.lower().strip()

    user = get_user_by_email(email)
    if not user:
        return None, "Invalid email or password"

    # ✅ SQLAlchemy object access
    if not check_password_hash(user.password, password):
        return None, "Invalid email or password"

    token = generate_token(user.id)

    return {
        "token": token,
        "user": {
            "id": user.id,
            "name": user.name,
            "email": user.email
        }
    }, None
