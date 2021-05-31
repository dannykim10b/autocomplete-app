from models.Student import Student
# from flask import jsonify


def test_new_student():
    student = Student(first_name='Danny', last_name='Kim', grade=12)
    assert student.id == None
    assert student.first_name == 'Danny'
    assert student.last_name == 'Kim'
    assert student.grade == 12


def test_serializer():
    student = Student(first_name='Danny', last_name='Kim', grade=12)
    assert student.serialize == {
        'id': None,
        'firstName': 'Danny',
        'lastName': 'Kim',
        'grade': 12
    }
