import { useState } from "react";
import BookingForm from "./components/BookingForm";
import "./App.css";

export default function App() {
  const [horarioSelecionado, setHorarioSelecionado] = useState("");
  const horarios = [
    "09:00",
    "10:00",
    "11:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
  ];

  return (
    <div style={{ padding: "3rem" }}>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <h1
            style={{
              backgroundColor: "#402313",
              color: "white",
              padding: "8px 16px",
              marginBottom: "20px",
              border: "none",
              boxShadow: "none",
              width: "fit-content",
              borderRadius: "6px",
              fontFamily: "Segoe UI, sans-serif",
            }}
          >
            AGENDE O SEU HORÁRIO 💈
          </h1>
        </li>

        {horarios.map((hora) => (
          <li key={hora} style={{ marginBottom: "10px" }}>
            <button
              style={{
                backgroundColor: "#402313",
                color: "white",
                border: "none",
                padding: "8px 16px",
                borderRadius: "6px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() => setHorarioSelecionado(hora)}
            >
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
