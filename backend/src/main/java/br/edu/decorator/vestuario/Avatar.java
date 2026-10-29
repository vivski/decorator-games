package br.edu.decorator.vestuario;

import java.util.List;

/** Component: contrato comum ao avatar original e às peças de roupa. */
public interface Avatar {
    String descricao();
    /** Ids das camadas SVG na ordem de desenho (de baixo para cima). */
    List<String> camadas();
}
