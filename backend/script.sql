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
    shader_id INT PRIMARY KEY,
    s1 FLOAT NOT NULL,
    s2 FLOAT NOT NULL,
    s3 FLOAT NOT NULL,
    FOREIGN KEY (shader_id) REFERENCES shader(id) ON DELETE CASCADE
);

--  FAKE DATA FOR TEST WITH DOCKER
INSERT INTO shader (title, password, image_url, author) VALUES
    ('Mon Shader', 'n4bQgYhMfWWaL+qgxVrQFaO/TxsrC4Is0V1sFbDwCgg=', 'image_url1', 'Benjos'),
    ('Best Shader', 'n4bQgYhMfWWaL+qgxVrQFaO/TxsrC4Is0V1sFbDwCgg=', 'image_url2', 'Recooord'),
    ('Random Seed', 'n4bQgYhMfWWaL+qgxVrQFaO/TxsrC4Is0V1sFbDwCgg=', 'image_url3', 'SupT'),
    ('Try make better', 'n4bQgYhMfWWaL+qgxVrQFaO/TxsrC4Is0V1sFbDwCgg=', 'image_url4', 'Zeroway'),
    ('Super Shader', 'n4bQgYhMfWWaL+qgxVrQFaO/TxsrC4Is0V1sFbDwCgg=', 'image_url5', 'Alessandro'),
    ('Frog Shader', 'n4bQgYhMfWWaL+qgxVrQFaO/TxsrC4Is0V1sFbDwCgg=', 'image_url6', 'Enzozo'),
    ('My unique and best shader', 'n4bQgYhMfWWaL+qgxVrQFaO/TxsrC4Is0V1sFbDwCgg=', 'image_url7', 'LTOssian'),
    ('BXXGIE WXXGIE', 'n4bQgYhMfWWaL+qgxVrQFaO/TxsrC4Is0V1sFbDwCgg=', 'image_url8', 'BXXGIMAN'),
    ('Australia flag', 'n4bQgYhMfWWaL+qgxVrQFaO/TxsrC4Is0V1sFbDwCgg=', 'image_url9', 'Maxaille'),
    ('Just Do It', 'n4bQgYhMfWWaL+qgxVrQFaO/TxsrC4Is0V1sFbDwCgg=', 'image_url10', 'Test');

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