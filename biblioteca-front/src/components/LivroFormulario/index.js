import React, { useState } from 'react';
import { Form, Input, Button, Label, Labels, Inputs } from './styles';

const BookForm = ({ onSubmit }) => {
    const [livro, setLivro] = useState({
        titulo: '',
        autor: '',
        isbn: '',
        anoPublicacao: '',
        editora: '',
        quantidade: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!livro.titulo || !livro.autor) return;

        const livroFormatado = {
            ...livro,
            anoPublicacao: parseInt(livro.anoPublicacao),
            quantidade: parseInt(livro.quantidade),
        };

        onSubmit(livroFormatado);
        setLivro({
            titulo: '',
            autor: '',
            isbn: '',
            anoPublicacao: '',
            editora: '',
            quantidade: '',
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <div>
            <Labels>
                <Label width="194px">Título</Label>
                <Label width="192px">Autor</Label>
                <Label width="112px">ISBN</Label>
                <Label width="142px">Editora</Label>
                <Label width="112px">Ano de Publicação</Label>
                <Label width="114px">Quantidade</Label>
            </Labels>
            <Inputs>
                <Input
                    type="text"
                    width="200px"
                    value={livro.titulo}
                    onChange={(e) => setLivro({ ...livro, titulo: e.target.value })}
                />
                <Input
                    type="text"
                    width="200px"
                    value={livro.autor}
                    onChange={(e) => setLivro({ ...livro, autor: e.target.value })}
                />
                <Input
                    type="text"
                    width="120px"
                    value={livro.isbn}
                    onChange={(e) => setLivro({ ...livro, isbn: e.target.value })}
                />
                <Input
                    type="text"
                    width="150px"
                    value={livro.editora}
                    onChange={(e) => setLivro({ ...livro, editora: e.target.value })}
                />
                <Input
                    type="number"
                    width="120px"
                    value={livro.anoPublicacao}
                    onChange={(e) => setLivro({ ...livro, anoPublicacao: e.target.value })}
                />
                <Input
                    type="number"
                    width="120px"
                    value={livro.quantidade}
                    onChange={(e) => setLivro({ ...livro, quantidade: e.target.value })}
                />
            </Inputs>
            </div>
            <Button type="submit">Adicionar Livro</Button>
        </Form>
    );
};

export default BookForm;

