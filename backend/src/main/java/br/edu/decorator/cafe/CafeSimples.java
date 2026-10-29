package br.edu.decorator.cafe;

import java.util.List;

/** ConcreteComponent: o café original. Nunca é alterado pelos decorators. */
public class CafeSimples implements Cafe {
    public String descricao() { return "Café simples"; }
    public double preco() { return 5.00; }
    public List<String> camadas() { return List.of("cafe-base"); }
}
