package br.edu.decorator.cafe;

public class Chantilly extends CafeDecorator {
    public Chantilly(Cafe cafe) { super(cafe); }
    protected String nome() { return "Chantilly"; }
    protected double adicional() { return 2.00; }
    protected String camada() { return "cafe-com-chantilly"; }
}
