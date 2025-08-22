import { useState } from "react";
import "../index.css";

export default function BookingForm({ horario, fechar }) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [confirmado, setConfirmado] = useState(false);

  const confirmar = () => {
    if (nome.trim() && telefone.trim()) {
      setConfirmado(true);
      setTimeout(() => {
        fechar();
        setConfirmado(false);
        setNome("");
        setTelefone("");
      }, 2000);
    } else {
      alert("Preencha todos os campos!");
    }
  };

  return (
    <div className="modal show">
      <div className="modal-content">
        {!confirmado ? (
          <>
            <h2>Agendar para {horario}</h2>
            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <input
              type="tel"
              placeholder="Telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
            <div className="botoes">
              <button onClick={confirmar}>Confirmar</button>
              <button onClick={fechar}>Cancelar</button>
            </div>
          </>
        ) : (
          <div style={{ textAlign: "center" }}>
            <h2 style={{ color: "#402313" }}> Confirmado!</h2>
            <p>
              Agendamento Realizado, te esperamos às <strong>{horario}</strong>,{" "}
              {nome}!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
