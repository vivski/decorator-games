package br.edu.decorator.web;

import java.util.List;

public final class Dtos {
    private Dtos() {}
    public record Pedido(List<String> itens) {}
    public record CafeResposta(String descricao, double preco, List<String> camadas) {}
    public record AvatarResposta(String descricao, List<String> camadas) {}
    public record SalvarPedido(String tipo, List<String> itens) {}
    public record SalvarResposta(Long id, String mensagem) {}
}
