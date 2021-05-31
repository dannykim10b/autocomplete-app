from flask import Flask
import requests
# from controllers.StudentController import search, create


def test_search():

    response = requests.get('http://localhost:5000/students/?search=')

    assert response.status_code == 200
