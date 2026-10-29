package br.edu.decorator.vestuario;

import java.util.List;

public class Vestido extends AvatarDecorator {
    public Vestido(Avatar avatar) { super(avatar); }
    protected String nome() { return "Vestido"; }
    protected String camada() { return "roupa-vestido"; }
    protected List<String> cobre() { return List.of(); }
}
