package br.edu.decorator.cafe;

import java.util.ArrayList;
import java.util.List;

/** Decorator base: envolve outro Cafe e delega tudo a ele. */
public abstract class CafeDecorator implements Cafe {
    protected final Cafe cafe;
    protected CafeDecorator(Cafe cafe) { this.cafe = cafe; }

    protected abstract String nome();
    protected abstract double adicional();
    protected abstract String camada();

    public String descricao() { return cafe.descricao() + " + " + nome(); }
    public double preco() { return cafe.preco() + adicional(); }
    public List<String> camadas() {
        List<String> c = new ArrayList<>(cafe.camadas());
        c.add(camada());
        return c;
    }
}
