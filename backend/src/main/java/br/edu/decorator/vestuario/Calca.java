package br.edu.decorator.vestuario;

// import java.util.List;

public class Calca extends AvatarDecorator {
    public Calca(Avatar avatar) { super(avatar); }
    protected String nome() { return "Calça"; }
    protected String camada() { return "roupa-calca"; }
    // protected List<String> cobre() { return List.of(); }
}
