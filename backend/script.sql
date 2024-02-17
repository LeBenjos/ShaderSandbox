-- CREATE DATABASE shader_sandbox; 

-- Use the database
\c shader_sandbox;

CREATE TABLE shader (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE setting (
    id SERIAL PRIMARY KEY,
    shader_id INT UNIQUE NOT NULL,
    s1 FLOAT NOT NULL,
    s2 FLOAT NOT NULL,
    s3 FLOAT NOT NULL,
    FOREIGN KEY (shader_id) REFERENCES shader(id) ON DELETE CASCADE
);

--  FAKE DATA FOR TEST WITH DOCKER
INSERT INTO shader (title, password, image_url, author) VALUES
    ('Shader 1', 'password1', 'image_url1', 'Author 1'),
    ('Shader 2', 'password2', 'image_url2', 'Author 2'),
    ('Shader 3', 'password3', 'image_url3', 'Author 3'),
    ('Shader 4', 'password4', 'image_url4', 'Author 4'),
    ('Shader 5', 'password5', 'image_url5', 'Author 5'),
    ('Shader 6', 'password6', 'image_url6', 'Author 6'),
    ('Shader 7', 'password7', 'image_url7', 'Author 7'),
    ('Shader 8', 'password8', 'image_url8', 'Author 8'),
    ('Shader 9', 'password9', 'image_url9', 'Author 9'),
    ('Shader 10', 'password10', 'image_url10', 'Author 10');

INSERT INTO setting (shader_id, s1, s2, s3) VALUES
    (1, 0.1, 0.2, 0.3),
    (2, 0.2, 0.3, 0.4),
    (3, 0.3, 0.4, 0.5),
    (4, 0.4, 0.5, 0.6),
    (5, 0.5, 0.6, 0.7),
    (6, 0.6, 0.7, 0.8),
    (7, 0.7, 0.8, 0.9),
    (8, 0.8, 0.9, 1.0),
    (9, 0.9, 1.0, 1.1),
    (10, 1.0, 1.1, 1.2);