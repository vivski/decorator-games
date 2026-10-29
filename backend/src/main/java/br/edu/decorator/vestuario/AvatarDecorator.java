package br.edu.decorator.vestuario;

import java.util.ArrayList;
import java.util.List;

/** Decorator base: cada peça acrescenta sua camada e pode cobrir (esconder) camadas de baixo. */
public abstract class AvatarDecorator implements Avatar {
    protected final Avatar avatar;
    protected AvatarDecorator(Avatar avatar) { this.avatar = avatar; }

    protected abstract String nome();
    protected abstract String camada();
    protected List<String> cobre() { return List.of(); }

    public String descricao() { return avatar.descricao() + " + " + nome(); }
    public List<String> camadas() {
        List<String> c = new ArrayList<>(avatar.camadas());
        c.removeAll(cobre());
        c.add(camada());
        return c;
    }
}
