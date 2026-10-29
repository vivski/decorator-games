package br.edu.decorator.cafe;

import java.util.List;

/** Component: contrato comum ao café original e aos decorators. */
public interface Cafe {
    String descricao();
    double preco();
    /** Ids das camadas SVG que o frontend empilha para desenhar o café. */
    List<String> camadas();
}
