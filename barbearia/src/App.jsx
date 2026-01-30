import { useState } from "react";
import "./App.css";

function BookingForm({ horario, fechar, aoConfirmar }) {
  const [nome, setNome] = useState("");
  const [celular, setCelular] = useState("");

  const handleCelularChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 12) value = value.slice(0, 12);

    const formattedValue = value.replace(/(\d{3})(\d{9})/, "$1 $2");
    setCelular(formattedValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nome.trim().split(" ").length < 2) {
      alert("Por favor, insira seu nome completo (nome e sobrenome).");
      return;
    }

    const rawCelular = celular.replace(/\s/g, "");
    if (rawCelular.length !== 12) {
      alert("O número deve ter exatamente 12 dígitos (ex: 011 952378000).");
      return;
    }

    alert(`Sucesso! Agendamento confirmado para ${nome} às ${horario}.`);
    aoConfirmar();
  };

  return (
    <div className="modal-overlay">
      <div className="glass-container modal-card animate-fade">
        <h2>Confirmar Horário</h2>
        <p className="horario-destaque">{horario}</p>

        <form onSubmit={handleSubmit} className="form-auth">
          <input
            type="text"
            placeholder="Nome Completo"
            className="input-field"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="099999999999"
            className="input-field"
            value={celular}
            onChange={handleCelularChange}
            required
          />
          <div className="modal-buttons">
            <button type="button" className="btn-link" onClick={fechar}>
              Cancelar
            </button>
            <button type="submit" className="btn-main">
              Finalizar Agendamento
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function App() {
  const [view, setView] = useState("home");
  const [isRegistering, setIsRegistering] = useState(false);
  const [horarioSelecionado, setHorarioSelecionado] = useState("");
  const [horarios, setHorarios] = useState([
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
  ]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validarAcesso = () => {
    if (!email.includes("@")) {
      alert("Insira um e-mail válido.");
      return;
    }
    if (password.length < 8) {
      alert("A senha deve ter no mínimo 8 caracteres.");
      return;
    }
    setView("agenda");
  };

  const confirmarAgendamentoNoEstado = (hora) => {
    setHorarios((prev) => prev.filter((h) => h !== hora));
    setHorarioSelecionado("");
  };

  return (
    <main className="main-app">
      {/* TELA HOME */}
      {view === "home" && (
        <div className="landing-page animate-fade">
          <nav className="navbar">
            <div className="logo">
              Agenda<span>Pro</span>
            </div>
            <button className="btn-nav" onClick={() => setView("auth")}>
              Acessar Agenda
            </button>
          </nav>
          <section className="hero">
            <div className="hero-inner">
              <h1>
                Fique sempre na régua com a{" "}
                <span className="text-blue">AgendaPro</span>
              </h1>
              <p>A plataforma definitiva para barbearias de alto nível.</p>
              <button className="btn-main" onClick={() => setView("auth")}>
                Agende seu horário
              </button>
            </div>
          </section>
        </div>
      )}

      {view === "auth" && (
        <div className="auth-view animate-fade">
          <div className="glass-container auth-card">
            <h2>{isRegistering ? "Criar Conta" : "Entrar"}</h2>

            <button className="btn-google" onClick={() => setView("agenda")}>
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="Google"
              />
              {isRegistering ? "Cadastrar com Google" : "Entrar com Google"}
            </button>

            <div className="divider">ou use e-mail</div>

            <div className="form-auth">
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
              />
              <input
                type="password"
                placeholder="Senha (mín. 8 caracteres)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
              />
              <button className="btn-main" onClick={validarAcesso}>
                {isRegistering ? "Criar Minha Conta" : "Entrar"}
              </button>
            </div>

            <p className="toggle-auth">
              {isRegistering ? "Já tem conta?" : "Novo por aqui?"}
              <span
                onClick={() => {
                  setIsRegistering(!isRegistering);
                  setEmail("");
                  setPassword("");
                }}
              >
                {isRegistering ? " Faça Login" : " Crie uma conta"}
              </span>
            </p>
            <button className="btn-link" onClick={() => setView("home")}>
              Voltar
            </button>
          </div>
        </div>
      )}

      {view === "agenda" && (
        <div className="booking-view animate-fade">
          <div className="glass-container">
            <header className="agenda-header">
              <h2>Horários Disponíveis 💈</h2>
              <button className="btn-close" onClick={() => setView("home")}>
                Sair
              </button>
            </header>
            <div className="grid-times">
              {horarios.map((hora) => (
                <button
                  key={hora}
                  className="time-btn"
                  onClick={() => setHorarioSelecionado(hora)}
                >
                  {hora}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {horarioSelecionado && (
        <BookingForm
          horario={horarioSelecionado}
          fechar={() => setHorarioSelecionado("")}
          aoConfirmar={() => confirmarAgendamentoNoEstado(horarioSelecionado)}
        />
      )}
    </main>
  );
}
