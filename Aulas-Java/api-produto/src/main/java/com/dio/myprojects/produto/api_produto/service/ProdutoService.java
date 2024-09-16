package com.dio.myprojects.produto.api_produto.service;

import com.dio.myprojects.produto.api_produto.exception.ProdutoNullException;
import com.dio.myprojects.produto.api_produto.exception.ProdutoPrecoException;
import com.dio.myprojects.produto.api_produto.model.Produto;
import com.dio.myprojects.produto.api_produto.repository.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ControllerAdvice;

import java.util.List;

@Service
public class ProdutoService {
    @Autowired
    private ProdutoRepository repository;



//    TODO:     A CLASSE SERVICE SERVE SOMENTE PARA MOSTRAR QUE TAL SERVICOS EXISTEM

    public Produto save(Produto produto) throws Exception {
        if ((produto.getName() == null) /*|| (produto.getPreco() == null)*/) {
            /*Criando uma exceção que trate valores Null*/
            throw new ProdutoNullException();
        }
        if (produto.getPreco() < 0) {
            throw new ProdutoPrecoException();
        }
        return repository.save(produto);
    }

    public Produto findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public List<Produto> findAll() {
        return repository.findAll();
    }
}