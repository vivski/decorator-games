package br.edu.decorator.cafe;

public class Cacau extends CafeDecorator {
    public Cacau(Cafe cafe) { super(cafe); }
    protected String nome() { return "Cacau"; }
    protected double adicional() { return 1.00; }
    protected String camada() { return "cafe-com-cacau"; }
}
