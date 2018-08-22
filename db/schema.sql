DROP DATABASE IF EXISTS wings_db;

CREATE DATABASE wings_db;

USE wings_db;

CREATE TABLE wings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    wing_name VARCHAR(50),
    eaten BOOLEAN DEFAULT false
);

