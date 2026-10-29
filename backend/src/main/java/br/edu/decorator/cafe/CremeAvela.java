package br.edu.decorator.cafe;

public class CremeAvela extends CafeDecorator {
    public CremeAvela(Cafe cafe) { super(cafe); }
    protected String nome() { return "Creme de avelã"; }
    protected double adicional() { return 3.00; }
    protected String camada() { return "cafe-com-creme-de-avela"; }
}
