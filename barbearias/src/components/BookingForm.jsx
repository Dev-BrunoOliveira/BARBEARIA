import React, { useState } from "react";

export default function BookingForm({ horario, fechar }) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Agendamento confirmado para ${horario}!\nNome: ${nome}\nTelefone: ${telefone}`);
    fechar();
  };

  return (
    <div className="modal show">
      <div className="modal-content">
        <h2>Agendar horário: {horario}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Seu telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            required
          />
          <div className="botoes">
            <button type="submit">Confirmar</button>
            <button type="button" onClick={fechar}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
