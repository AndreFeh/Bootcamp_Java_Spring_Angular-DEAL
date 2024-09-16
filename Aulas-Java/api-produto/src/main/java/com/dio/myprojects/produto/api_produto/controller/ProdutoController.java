package com.dio.myprojects.produto.api_produto.controller;

import com.dio.myprojects.produto.api_produto.model.Produto;
import com.dio.myprojects.produto.api_produto.service.ProdutoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produto")
public class ProdutoController {

    @Autowired
    private ProdutoService service;

    @GetMapping("/{id}")
    public ResponseEntity<Produto> getOneItem(Long id){
        service.findById(id);
        return ResponseEntity.ok().body(getOneItem(id).getBody());
    }

    @GetMapping("/all")
    public ResponseEntity<List<Produto>> getAllItem(){
        List<Produto> produtos = service.findAll();
        return ResponseEntity.ok().body(produtos);
    }

    @PostMapping("/save")
    public ResponseEntity<Produto> saveItem(Produto produto) throws Exception {
            /*Respose para retornar uma resposta HTTP*/
        produto = service.save(produto);

        return ResponseEntity.ok().body(produto);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<Produto> updateItem(Long id, Produto produto) throws Exception {
        if (produto.getId().equals(id)){
        service.save(produto);
        }
        return ResponseEntity.ok().body(produto);
    }
}
