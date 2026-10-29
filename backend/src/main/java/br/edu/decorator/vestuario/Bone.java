package br.edu.decorator.vestuario;

import java.util.List;

public class Bone extends AvatarDecorator {
    public Bone(Avatar avatar) { super(avatar); }
    protected String nome() { return "Boné"; }
    protected String camada() { return "roupa-bone"; }
    protected List<String> cobre() { return List.of(); }
}
