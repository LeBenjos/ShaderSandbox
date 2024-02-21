-- CREATE DATABASE shader_sandbox; 

-- Use the database
\c shader_sandbox;

CREATE TABLE shader (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    image_url TEXT NOT NULL,
    author VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE setting (
    shader_id INT PRIMARY KEY,
    s1 FLOAT NOT NULL,
    s2 FLOAT NOT NULL,
    s3 FLOAT NOT NULL,
    FOREIGN KEY (shader_id) REFERENCES shader(id) ON DELETE CASCADE
);