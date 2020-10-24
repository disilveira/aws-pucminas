package com.example.springboot.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.springboot.model.Produto;

@Service
public class ProdutoService {
	
	private List<Produto> produtos = new ArrayList<Produto>();
	
	private Long proxId = 1L;
	
	public List<Produto> findAllProduto(){
		return produtos;
	}
	
	public void insertProduto (Produto produto) {
		produto.setId(proxId);
		produtos.add(produto);
		proxId++;
	}
	
	public Produto findProdutoById(Long id) {
		
		for (Produto produto: this.produtos) {
			
			if(produto.getId().equals(id)) {
			
				return produto;
				
			}	
		}
		
		return null;
	}
	
	public void deleteProduto(Produto produto) {
		
		this.produtos.remove(produto);
		
	}

}
