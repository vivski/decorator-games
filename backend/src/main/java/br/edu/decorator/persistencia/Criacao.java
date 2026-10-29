package br.edu.decorator.persistencia;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
public class Criacao {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY) private Long id;
    private String tipo;          // "cafe" ou "avatar"
    private String itens;         // ex.: "leite,chantilly"
    private String descricao;
    private Instant criadoEm = Instant.now();

    protected Criacao() {}
    public Criacao(String tipo, String itens, String descricao) { this.tipo = tipo; this.itens = itens; this.descricao = descricao; }
    public Long getId() { return id; }
    public String getTipo() { return tipo; }
    public String getItens() { return itens; }
    public String getDescricao() { return descricao; }
    public Instant getCriadoEm() { return criadoEm; }
}
