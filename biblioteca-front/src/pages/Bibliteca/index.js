// src/pages/Library/index.js
import React, { useState, useEffect } from 'react';
import { Container, BookList, SearchBar, Titulo } from './styles';
import BookItem from '../../components/LivroItem';
import BookForm from '../../components/LivroFormulario';
import { api } from '../../services/api';

const Library = () => {
  const [livros, setLivros] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadLivros();
  }, []);

  const loadLivros = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.getAllLivros();
      setLivros(data);
    } catch (error) {
      setError('Erro ao carregar livros');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateLivro = async (novoLivro) => {
    try {
      const livro = await api.createLivro(novoLivro);
      setLivros([...livros, livro]);
    } catch (error) {
      console.error('Erro ao criar livro:', error);
      alert('Erro ao criar livro');
    }
  };

  const handleUpdateLivro = async (id, livroAtualizado) => {
    try {
      const livro = await api.updateLivro(id, livroAtualizado);
      setLivros(livros.map(l => l.id === id ? livro : l));
    } catch (error) {
      console.error('Erro ao atualizar livro:', error);
      alert('Erro ao atualizar livro');
    }
  };

  const handleDeleteLivro = async (id) => {
    try {
      await api.deleteLivro(id);
      setLivros(livros.filter(livro => livro.id !== id));
    } catch (error) {
      console.error('Erro ao deletar livro:', error);
      alert('Erro ao deletar livro');
    }
  };

  const filteredLivros = livros.filter(livro =>
    (livro.titulo?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
    (livro.autor?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
    (livro.editora?.toLowerCase() || '').includes(searchTerm.toLowerCase())
  );  

  if (loading) {
    return <Container>Carregando...</Container>;
  }

  if (error) {
    return <Container>Erro: {error}</Container>;
  }

  return (
    <Container>
      <Titulo>Biblioteca</Titulo>
      <BookForm onSubmit={handleCreateLivro} />
      <SearchBar
        type="text"
        placeholder="Pesquisar livros..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <BookList>
        {filteredLivros.map(livro => (
          <BookItem
            key={livro.id}
            livro={livro}
            onDelete={handleDeleteLivro}
            onUpdate={handleUpdateLivro}
          />
        ))}
      </BookList>
    </Container>
  );
};

export default Library;
