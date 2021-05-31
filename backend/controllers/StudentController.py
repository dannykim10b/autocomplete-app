from flask import request, jsonify
from models.Student import Student
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import func

db = SQLAlchemy()

# Recieves a string request from the frontend and uses that string to search the database
# for matches by first name and last name. The two query results are combined, jsonified
# and sent back to the frontend


def search():
    searchValue = request.args.get('search').lower()

    studentsByFirstName = Student.query.order_by(Student.last_name).filter(
        func.concat(Student.first_name, ' ',
                    Student.last_name).ilike(f'{searchValue}%')
    )

    studentsByLastName = Student.query.order_by(Student.last_name).filter(
        func.concat(Student.last_name, ' ',
                    Student.first_name).ilike(f'{searchValue}%')
    )

    studentsByFirstName = [s.serialize for s in studentsByFirstName]
    studentsByLastName = [s.serialize for s in studentsByLastName]

    studentsByFirstName.extend(studentsByLastName)

    return jsonify(studentsByFirstName), 200


# def store():
#     data = request.get_json()
#     addedStudent = Student(
#         first_name=data['firstName'], last_name=data['lastName'], grade=data['grade'])
#     db.session.add(addedStudent)
#     db.session.commit()
#     return {"msg": "Created Student"}, 201


# def show():
#     students = Student.query.all()
#     return jsonify(students=[s.serialize for s in students])


# def destroy():
#     db.session.query(Student).delete()
#     db.session.commit()
#     return {"message": "success"}
