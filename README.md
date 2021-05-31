Autocomplete App made for Powerschool and Schoology

Built with a Flask backend, React frontend, and postgresql database.

HOW TO INSTALL WITH DOCKER
FOR INITIAL SETUP:
docker-compose up --build
AFTER INTIAL SETUP:
docker-compose up

CURL COMMANDS
Type any string after = to search the database of students by string
docker exec backend-docker curl 'http://localhost:5000/students/?search='

API TESTING COMMAND
docker exec backend-docker pytest

App is accessible at
'http://localhost:3000'

Github Repo Link
https://github.com/dannykim10b/autocomplete-app
