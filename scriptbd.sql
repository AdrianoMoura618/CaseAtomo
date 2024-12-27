CREATE DATABASE IF NOT EXISTS Biblioteca;

USE Biblioteca;

CREATE TABLE livros (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    isbn VARCHAR(20) NOT NULL,
    ano_publicacao INT NOT NULL,
    editora VARCHAR(255) NOT NULL,
    quantidade INT NOT NULL
);

INSERT INTO livros (titulo, autor, isbn, ano_publicacao, editora, quantidade) VALUES 
('The Great Gatsby', 'F. Scott Fitzgerald', '9780743273565', 1925, 'Scribner', 5),
('Moby Dick', 'Herman Melville', '9781853260087', 1851, 'Penguin Classics', 3),
('1984', 'George Orwell', '9780451524935', 1949, 'Signet Classics', 7);
 