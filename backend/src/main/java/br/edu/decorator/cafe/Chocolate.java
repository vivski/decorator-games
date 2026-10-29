package br.edu.decorator.cafe;

public class Chocolate extends CafeDecorator {
    public Chocolate(Cafe cafe) { super(cafe); }
    protected String nome() { return "Chocolate"; }
    protected double adicional() { return 1.00; }
    protected String camada() { return "cafe-com-chocolate"; }
}
