Autocomplete App made for Powerschool and Schoology

Built with a Flask backend, React frontend, and postgresql database.

HOW TO INSTALL WITH DOCKER
docker-compose up --build

CURL COMMANDS
Type any string after = to search the database of students by string
docker exec backend-docker curl 'http://localhost:5000/student/?search='

App is accessible at
'http://localhost:3000'
