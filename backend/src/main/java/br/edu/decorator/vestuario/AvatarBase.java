package br.edu.decorator.vestuario;

import java.util.List;

/** ConcreteComponent: a boneca com top e short curtinhos (como se estivesse sem roupa). */
public class AvatarBase implements Avatar {
    public String descricao() { return "Avatar"; }
    public List<String> camadas() { return List.of("boneca-base"); }
}
