import { useState } from "react";
import BookingForm from "./components/BookingForm";
import "./styles.css";

export default function App() {
  const [horarioSelecionado, setHorarioSelecionado] = useState("");
  const horarios = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1 style={{ color: 'red' }}>AGENDE O SEU HORÁRIO💈</h1>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {horarios.map((hora) => (
          <li key={hora} style={{ marginBottom: "10gipx" }}>
            <button onClick={() => setHorarioSelecionado(hora)}>
              {hora}
            </button>
          </li>
        ))}
      </ul>

      {horarioSelecionado && (
        <BookingForm
          horario={horarioSelecionado}
          fechar={() => setHorarioSelecionado("")}
        />
      )}
    </div>
  );
}
