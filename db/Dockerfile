FROM postgres:13.3-alpine

# COPY students.sql /docker-entrypoint-initdb.d/

ADD ./students.sql /docker-entrypoint-initdb.d/

EXPOSE 5432

ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=password
ENV POSTGRES_DB=students
