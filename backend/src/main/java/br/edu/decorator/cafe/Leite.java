package br.edu.decorator.cafe;

public class Leite extends CafeDecorator {
    public Leite(Cafe cafe) { super(cafe); }
    protected String nome() { return "Leite"; }
    protected double adicional() { return 1.50; }
    protected String camada() { return "cafe-com-leite"; }
}
