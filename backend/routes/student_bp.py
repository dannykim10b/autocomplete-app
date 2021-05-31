from flask import Blueprint

from controllers.StudentController import search

student_bp = Blueprint('student_bp', __name__)

student_bp.route('/', methods=['GET'])(search)
# student_bp.route('/create', methods=['POST'])(store)
# student_bp.route('/show', methods=['GET'])(show)
# student_bp.route('/destroy', methods=['DELETE'])(destroy)
