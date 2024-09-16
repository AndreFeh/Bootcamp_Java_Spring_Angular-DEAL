package com.dio.myprojects.produto.api_produto.controller;

import com.dio.myprojects.produto.api_produto.exception.ProdutoNullException;
import com.dio.myprojects.produto.api_produto.exception.ProdutoPrecoException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
/**Tornando uma classe de Avisos*/
public class ProdutoControllerAdvice extends ResponseEntityExceptionHandler { /*Controller de erros*/
//    ESSA CLASSE SERVE PARA PEGAR OS ERROS QUE DEREM DENTRO DA CLASS SERVICE
//        Trata esses erros, e devolve a classe Controller original

//TODO:     Ao inves de passar uma URL igual Controller,
//    Ele ira passar um caminho caso de algum erro

    @ExceptionHandler(ProdutoNullException.class) /*Quando acusar essa falha, entra nessa regra*/
    public ResponseEntity<Object> capturaErroNull() {

        Map<String, Object> body = new HashMap<String, Object>();
        body.put("message", "verificar campos obrigatorios");

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(body);
    }

    @ExceptionHandler(ProdutoPrecoException.class) /*Quando acusar essa falha, entra nessa regra*/
    public ResponseEntity<Object> capturaErroPrice() {

        Map<String, Object> body = new HashMap<String, Object>();
        body.put("message", "valor abaixo do permitido");

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(body);
    }


}
