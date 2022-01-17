CREATE DATABASE todolisting;

CREATE TABLE addtodo(
    table_id SERIAL PRIMARY KEY, --unique key name todo_id , SERIAL increments the primary key when new values are added
    description VARCHAR(255) -- sending max char of 255
);