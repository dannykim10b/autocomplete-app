from routes.student_bp import student_bp
import pytest
from flask import Flask
from models.Student import db


@pytest.fixture
def app():
    app = Flask(__name__)

    app.config.from_object('config')

    db.init_app(app)

    app.register_blueprint(student_bp, url_prefix='/students')

    yield app


# @pytest.fixture
# def client(app):
#     return app.test_client()
