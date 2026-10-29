package br.edu.decorator.vestuario;

import java.util.List;

public class Casaco extends AvatarDecorator {
    public Casaco(Avatar avatar) { super(avatar); }
    protected String nome() { return "Casaco"; }
    protected String camada() { return "boneca-com-casaco"; }
    protected List<String> cobre() { return List.of(); }
}
