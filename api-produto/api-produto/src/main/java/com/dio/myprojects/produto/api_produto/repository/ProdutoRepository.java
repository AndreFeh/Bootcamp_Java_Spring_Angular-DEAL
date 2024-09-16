package com.dio.myprojects.produto.api_produto.repository;

import com.dio.myprojects.produto.api_produto.model.Produto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
//TODO:    JPA JA TEM AQUELES METODOS BASICOS DE UM CRUD, DESSA FORMA, NAO PRECISA RECRIAR A RODA FAZENDO NA MAO

}
