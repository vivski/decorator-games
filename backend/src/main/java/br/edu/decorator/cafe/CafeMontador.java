package br.edu.decorator.cafe;

import java.util.List;

/** Monta a cadeia de decorators a partir dos itens escolhidos. Remover um item = remontar sem ele. */
public final class CafeMontador {
    private CafeMontador() {}

    public static Cafe montar(List<String> itens) {
        Cafe cafe = new CafeSimples();
        for (String item : itens) {
            cafe = switch (item) {
                case "leite" -> new Leite(cafe);
                case "chantilly" -> new Chantilly(cafe);
                case "creme-de-avela" -> new CremeAvela(cafe);
                case "cacau" -> new Cacau(cafe);
                case "chocolate" -> new Chocolate(cafe);
                default -> throw new IllegalArgumentException("Ingrediente desconhecido: " + item);
            };
        }
        return cafe;
    }
}
