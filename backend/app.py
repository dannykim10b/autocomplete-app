from flask import Flask
from flask_migrate import Migrate
from flask_cors import CORS

from models.Student import db
from routes.student_bp import student_bp

app = Flask(__name__)
# CORS(app)
app.config.from_object('config')

db.init_app(app)
migrate = Migrate(app, db)

app.register_blueprint(student_bp, url_prefix='/students')

if __name__ == '__main__':
    app.debug = True
    app.run()
