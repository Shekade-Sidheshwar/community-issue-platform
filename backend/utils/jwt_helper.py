from flask_jwt_extended import create_access_token


def generate_token(user_id):
    token = create_access_token(identity=user_id)
    return token
