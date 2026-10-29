package br.edu.decorator.web;

import br.edu.decorator.cafe.*;
import br.edu.decorator.persistencia.*;
import br.edu.decorator.vestuario.*;
import br.edu.decorator.web.Dtos.*;
import java.util.Map;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class JogoController {
    private final CriacaoRepository repo;
    public JogoController(CriacaoRepository repo) { this.repo = repo; }

    @PostMapping("/cafe/montar")
    public CafeResposta cafe(@RequestBody Pedido p) {
        Cafe c = CafeMontador.montar(p.itens());
        return new CafeResposta(c.descricao(), c.preco(), c.camadas());
    }

    @PostMapping("/avatar/vestir")
    public AvatarResposta avatar(@RequestBody Pedido p) {
        Avatar a = AvatarMontador.montar(p.itens());
        return new AvatarResposta(a.descricao(), a.camadas());
    }

    @PostMapping("/salvar")
    public SalvarResposta salvar(@RequestBody SalvarPedido p) {
        boolean cafe = "cafe".equals(p.tipo());
        String desc = cafe ? CafeMontador.montar(p.itens()).descricao() : AvatarMontador.montar(p.itens()).descricao();
        Criacao c = repo.save(new Criacao(p.tipo(), String.join(",", p.itens()), desc));
        String msg = cafe ? "Parabéns! Seu " + desc + " foi feito!" : "Look final: " + desc;
        return new SalvarResposta(c.getId(), msg);
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<Map<String, String>> invalido(IllegalArgumentException e) {
        return ResponseEntity.badRequest().body(Map.of("erro", e.getMessage()));
    }
}
