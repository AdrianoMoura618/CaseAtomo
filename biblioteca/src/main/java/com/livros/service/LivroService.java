
package com.livros.service;

import com.livros.model.Livro;
import com.livros.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LivroService {
    
    @Autowired
    private LivroRepository livroRepository;
    
    public List<Livro> getAllLivros() {
        return livroRepository.findAll();
    }
    
    public Livro saveLivro(Livro livro) {
        return livroRepository.save(livro);
    }
    
    public Optional<Livro> getLivroById(Long id) {
        return livroRepository.findById(id);
    }
    
    public void deleteLivro(Long id) {
    	livroRepository.deleteById(id);
    }
    
    public Livro updateLivro(Long id, Livro livroDetails) {
    	Livro livro = livroRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Livro não encontrado com o ID " + id));
        
    	livro.setTitulo(livroDetails.getTitulo());
    	livro.setAutor(livroDetails.getAutor());
    	livro.setIsbn(livroDetails.getIsbn());
    	livro.setAnoPublicacao(livroDetails.getAnoPublicacao());
    	livro.setEditora(livroDetails.getEditora());
    	livro.setQuantidade(livroDetails.getQuantidade());
        
        return livroRepository.save(livro);
    }
}