const horariosDisponiveis = [
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

const lista = document.getElementById("listaHorarios");
const modal = document.getElementById("modal");
const horarioEscolhidoSpan = document.getElementById("horarioEscolhido");
const formAgendamento = document.getElementById("formAgendamento");

function renderizarHorarios() {
  lista.innerHTML = "";
  horariosDisponiveis.forEach((horario, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${horario} <button onclick="agendar(${index})">Agendar</button>`;
    lista.appendChild(li);
  });
}

function agendar(index) {
  const horarioEscolhido = horariosDisponiveis[index];
  horarioEscolhidoSpan.textContent = horarioEscolhido;

  modal.classList.add("show");
}

function fecharModal() {
  modal.classList.remove("show");
}
formAgendamento.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;

  if (nome && telefone) {
    alert(`Agendamento confirmado!\nNome: ${nome}\nTelefone: ${telefone}`);
    horariosDisponiveis.splice(
      horariosDisponiveis.indexOf(horarioEscolhidoSpan.textContent),
      1
    );
    renderizarHorarios();
    fecharModal();
  } else {
    alert("Por favor, preencha todos os campos.");
  }
});

renderizarHorarios();
