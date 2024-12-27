const BASE_URL = 'http://localhost:8080/livros';

export const api = {
  getAllLivros: async () => {
    try {
      const response = await fetch(BASE_URL);
      if (!response.ok) {
        throw new Error('Erro ao buscar livros');
      }
      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
      throw error;
    }
  },

  getLivroById: async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/${id}`);
      if (!response.ok) {
        throw new Error('Livro não encontrado');
      }
      return await response.json();
    } catch (error) {
      console.error('Erro ao buscar livro:', error);
      throw error;
    }
  },

  createLivro: async (livro) => {
    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(livro),
      });
      if (!response.ok) {
        throw new Error('Erro ao criar livro');
      }
      return await response.json();
    } catch (error) {
      console.error('Erro ao criar livro:', error);
      throw error;
    }
  },

  updateLivro: async (id, livro) => {
    try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(livro),
      });
      if (!response.ok) {
        throw new Error('Livro não encontrado');
      }
      return await response.json();
    } catch (error) {
      console.error('Erro ao atualizar livro:', error);
      throw error;
    }
  },

  deleteLivro: async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Erro ao deletar livro');
      }
    } catch (error) {
      console.error('Erro ao deletar livro:', error);
      throw error;
    }
  },
};

