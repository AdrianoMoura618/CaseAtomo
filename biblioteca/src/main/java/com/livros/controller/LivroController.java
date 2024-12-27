package com.livros.controller;

import com.livros.model.Livro;
import com.livros.service.LivroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("livros")
@CrossOrigin(origins = "*")
public class LivroController {
    
    @Autowired
    private LivroService livroService;
    
	@GetMapping
	public List<Livro> getAllLivros() {
		return livroService.getAllLivros();
	}
    
    @PostMapping
    public Livro createLivro(@RequestBody Livro livro) {
        return livroService.saveLivro(livro);
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Livro> getLivroById(@PathVariable Long id) {
        return livroService.getLivroById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Livro> updateLivro(@PathVariable Long id, @RequestBody Livro livro) {
        try {
        	Livro updatedLivro = livroService.updateLivro(id, livro);
            return ResponseEntity.ok(updatedLivro);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLivro(@PathVariable Long id) {
    	livroService.deleteLivro(id);
        return ResponseEntity.ok().build();
    }
    
    @GetMapping("/error")
    public String handleError() {
        return "Página não encontrada. Verifique a URL e tente novamente.";
    }
}