package br.edu.decorator.vestuario;

import java.util.List;

public class Blusa extends AvatarDecorator {
    public Blusa(Avatar avatar) { super(avatar); }
    protected String nome() { return "Blusa"; }
    protected String camada() { return "boneca-com-blusa"; }
    protected List<String> cobre() { return List.of(); }
}
