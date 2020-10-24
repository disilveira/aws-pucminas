package com.example.springboot;

import org.springframework.web.bind.annotation.RestController;

import com.example.springboot.model.Produto;
import com.example.springboot.service.ProdutoService;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
public class ProdutosController {
	
	@Autowired
	private ProdutoService produtoService;

	@RequestMapping(value = "/produto", method = RequestMethod.GET)
	public List<Produto> getAllProduto() {
		return this.produtoService.findAllProduto();
	}
	 
	@RequestMapping(value = "/produto/{id}", method = RequestMethod.GET)
    public ResponseEntity<Produto> GetById(@PathVariable(value = "id") long id)
    {
        Produto produto = this.produtoService.findProdutoById(id);
        if(produto!=null)
            return new ResponseEntity<Produto>(produto, HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
	
	 @RequestMapping(value = "/produto", method =  RequestMethod.POST)
	 public ResponseEntity<Produto> Post(@Valid @RequestBody Produto produto)
	 {
	     this.produtoService.insertProduto(produto);
	     return new ResponseEntity<Produto>(produto, HttpStatus.CREATED);
	 }
	 
	 @RequestMapping(value = "/produto/{id}", method =  RequestMethod.PUT)
	    public ResponseEntity<Produto> Put(@PathVariable(value = "id") long id,@Valid @RequestBody Produto newProduto)
	    {
	        Produto produtoAtual = this.produtoService.findProdutoById(id);
	        if(produtoAtual!=null){
	        	produtoAtual.setNome(newProduto.getNome());
	            produtoAtual.setCategoria(newProduto.getCategoria());
	            produtoAtual.setDescricao(newProduto.getDescricao());
	            produtoAtual.setPreco(newProduto.getPreco());
	            return new ResponseEntity<Produto>(produtoAtual, HttpStatus.OK);
	        }
	        else
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	 
	 
	 @RequestMapping(value = "/produto/{id}", method = RequestMethod.DELETE)
	    public ResponseEntity<Object> Delete(@PathVariable(value = "id") long id)
	    {
	        Produto produto = this.produtoService.findProdutoById(id);
	        if(produto!=null){
	            this.produtoService.deleteProduto(produto);
	            return new ResponseEntity<>(HttpStatus.OK);
	        }
	        else
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	 
	 @RequestMapping(value = "/produto/{id}", method =  RequestMethod.PATCH)
	    public ResponseEntity<Produto> Patch(@PathVariable(value = "id") long id,@RequestBody Produto newProduto)
	    {
	        Produto produtoAtual = this.produtoService.findProdutoById(id);
	        if(produtoAtual!=null){
	        	
	        	if(newProduto.getNome()!=null) {
	        	produtoAtual.setNome(newProduto.getNome());
	        	}
	        	
	        	if(newProduto.getCategoria()!=null) {
	            produtoAtual.setCategoria(newProduto.getCategoria());
	        	}
	        	
	        	if(newProduto.getDescricao()!=null) {
	            produtoAtual.setDescricao(newProduto.getDescricao());
	        	}
	        	
	            if(newProduto.getPreco()!=null) {
	        	produtoAtual.setPreco(newProduto.getPreco());
	            }
	            
	            
	            return new ResponseEntity<Produto>(produtoAtual, HttpStatus.OK);
	        }
	        else
	            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }

}
