export default function ConfirmModal({ onCancelar, onVoltar }: { onCancelar: () => void; onVoltar: () => void }) {
  return (
    <div className="overlay" role="dialog" aria-modal="true">
      <div className="modal">
        <div className="aviso">⚠️</div>
        <h2>Tem certeza que deseja voltar pro menu inicial?</h2>
        <p>Suas alterações serão perdidas.</p>
        <div className="linha">
          <button className="btn vermelho" onClick={onCancelar}>Cancelar</button>
          <button className="btn verde" onClick={onVoltar}>Voltar</button>
        </div>
      </div>
    </div>
  );
}
