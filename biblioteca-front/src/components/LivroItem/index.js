import React, { useState } from 'react';
import { Container, BookInfo, ButtonGroup, Button, Input, Inputs, Labels, Label } from './styles';

const BookItem = ({ livro, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedLivro, setEditedLivro] = useState(livro);

  const handleSave = () => {
    const livroFormatado = {
      ...editedLivro,
      anoPublicacao: parseInt(editedLivro.anoPublicacao),
      quantidade: parseInt(editedLivro.quantidade),
    };
    onUpdate(livro.id, livroFormatado);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
        <Container>
        <div>
            <Labels>
            <Label width="204px">Título</Label>
            <Label width="200px">Autor</Label>
            <Label width="120px">ISBN</Label>
            <Label width="58px">Ano</Label>
            <Label width="150px">Editora</Label>
            <Label width="118px">Quantidade</Label>
            </Labels>
      
            <Inputs>
            <Input
                type="text"
                width="200px"
                value={editedLivro.titulo}
                onChange={(e) => setEditedLivro({ ...editedLivro, titulo: e.target.value })}
            />
            <Input
                type="text"
                width="200px"
                value={editedLivro.autor}
                onChange={(e) => setEditedLivro({ ...editedLivro, autor: e.target.value })}
            />
            <Input
                type="text"
                width="120px"
                value={editedLivro.isbn}
                onChange={(e) => setEditedLivro({ ...editedLivro, isbn: e.target.value })}
            />
            <Input
                type="number"
                width="60px"
                value={editedLivro.anoPublicacao}
                onChange={(e) => setEditedLivro({ ...editedLivro, anoPublicacao: e.target.value })}
            />
            <Input
                type="text"
                width="150px"
                value={editedLivro.editora}
                onChange={(e) => setEditedLivro({ ...editedLivro, editora: e.target.value })}
            />
            <Input
                type="number"
                width="60px"
                value={editedLivro.quantidade}
                onChange={(e) => setEditedLivro({ ...editedLivro, quantidade: e.target.value })}
            />
            </Inputs>
        </div>
        <ButtonGroup>
          <Button onClick={handleSave}>Salvar</Button>
          <Button onClick={() => setIsEditing(false)}>Cancelar</Button>
        </ButtonGroup>
      </Container>
      
      
    );
  }

  return (
    <Container>
      <BookInfo>
        <h3>{livro.titulo}</h3>
        <p className="author">{livro.autor}</p>
        <p className="details">
          ISBN: <b>{livro.isbn}</b> • Editora: <b>{livro.editora}</b> • Ano de Publicação: <b>{livro.anoPublicacao}</b> • Quantidade no Estoque: <b>{livro.quantidade}</b>
        </p>
      </BookInfo>
      <ButtonGroup>
        <Button onClick={() => setIsEditing(true)}>Editar</Button>
        <Button onClick={() => onDelete(livro.id)}>Excluir</Button>
      </ButtonGroup>
    </Container>
  );
};

export default BookItem;
