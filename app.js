const VERSAO = "1.0.0";

// Lista de recados
const recados = [];

// Elementos da página
const form = document.getElementById("form-recado");
const campoNome = document.getElementById("campo-nome");
const campoTexto = document.getElementById("campo-texto");
const mural = document.getElementById("mural");
const contador = document.getElementById("contador");

// Desenha o mural
function desenharMural() {
  mural.innerHTML = "";

  if (recados.length === 0) {
    mural.innerHTML = "<p>Nenhum recado ainda. Seja o primeiro!</p>";
  }

  for (const recado of recados) {
    mural.appendChild(criarPostit(recado));
  }

  contador.textContent = `${recados.length} recado(s) no mural`;
}

// Cria um post-it
function criarPostit(recado) {
  const postit = document.createElement("div");
  postit.className = "postit";

  const texto = document.createElement("p");
  texto.textContent = recado.texto;

  const autor = document.createElement("strong");
  autor.textContent = "— " + recado.nome;

  postit.append(texto, autor);
  return postit;
}

// Envia recado
form.addEventListener("submit", (evento) => {
  evento.preventDefault(); // n recarrega a página

  const nome = campoNome.value.trim();
  const texto = campoTexto.value.trim();
  if (!nome || !texto) return;

  recados.unshift({ nome: nome, texto: texto }); // coloca no começo da lista
  console.log(`[mural] Novo recado de ${nome}`);

  campoTexto.value = "";
  desenharMural();
});

document.getElementById("versao").textContent = VERSAO;
console.log(`App iniciado, versão ${VERSAO}`);
desenharMural();
