from flask import Flask
# from controllers.StudentController import search, create
import json


def test_search_matching_first_and_last(app):

    response = app.test_client().get('http://localhost:5000/students/?search=jackson')

    assert response.status_code == 200
    assert json.loads(response.data) == [
        {
            "firstName": "Jackson",
            "grade": 9,
            "id": 100,
            "lastName": "Hayes"
        },
        {
            "firstName": "Michael",
            "grade": 12,
            "id": 61,
            "lastName": "Jackson"
        }
    ]


def test_search_no_match(app):
    response = app.test_client().get('http://localhost:5000/students/?search=q')

    assert response.status_code == 200
    assert json.loads(response.data) == []
