package com.example.springboot.model;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class Produto {
	
	private Long id;
	
    @NotNull(message="Nome do produto deve ser informado.")
    @Size(min=1, message="Nome do produto deve ser informado.")
	private String nome;
    
    @NotNull(message="Descrição do produto deve ser informado.")
    @Size(min=1, message="Descrição do produto deve ser informada.")
	private String descricao;
    
    @NotNull(message="Categoria do produto deve ser informada.")
    @Size(min=1, message="Categoria do produto deve ser informada.")
	private String categoria;
    
    @NotNull(message="Preco do produto deve ser informado.")
	private Double preco;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public String getCategoria() {
		return categoria;
	}
	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
	public Double getPreco() {
		return preco;
	}
	public void setPreco(Double preco) {
		this.preco = preco;
	}

}
