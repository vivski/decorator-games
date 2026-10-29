package br.edu.decorator.vestuario;

import java.util.List;

public final class AvatarMontador {
    private AvatarMontador() {}

    public static Avatar montar(List<String> pecas) {
        Avatar avatar = new AvatarBase();
        for (String peca : pecas) {
            avatar = switch (peca) {
                case "vestido" -> new Vestido(avatar);
                case "calca" -> new Calca(avatar);
                case "blusa" -> new Blusa(avatar);
                case "casaco" -> new Casaco(avatar);
                case "bone" -> new Bone(avatar);
                default -> throw new IllegalArgumentException("Peça desconhecida: " + peca);
            };
        }
        return avatar;
    }
}
