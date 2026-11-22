// Viagem Computacional — lógica do jogo

// ===== Constantes do jogo =====
const PONTOS_POR_ACERTO = 10;
const TEMPO_POR_QUESTAO = 15; // em segundos
const CHANCES = 3;            // chances por questão
const TOTAL_QUESTOES = 16;

// ===== Dados dos 16 termos (textos da especificação) =====
// Cada termo: termo, analogia, porquê, pista técnica e imagem da analogia.
const TERMOS = [
  {
    termo: "CPU",
    analogia: "Piloto do avião",
    porque: "Comanda toda a viagem.",
    pista: "É o que executa as instruções dos programas, é considerada o cérebro do computador.",
    imagem: "assets/cards/cpu.png"
  },
  {
    termo: "ULA",
    analogia: "Casa de câmbio",
    porque: "Faz as contas de conversão de moeda.",
    pista: "Parte da CPU que faz somas, subtrações e comparações entre valores.",
    imagem: "assets/cards/ula.png"
  },
  {
    termo: "UC",
    analogia: "Torre de controle",
    porque: "Decide quem decola e quando.",
    pista: "Parte da CPU que busca, decodifica instruções e coordena os demais componentes.",
    imagem: "assets/cards/uc.png"
  },
  {
    termo: "Registradores",
    analogia: "Câmera fotográfica na mão",
    porque: "Registra todas as fotos da viagem no exato momento em que você está.",
    pista: "Menores e mais rápidos espaços de dados, localizados dentro da própria CPU.",
    imagem: "assets/cards/registradores.png"
  },
  {
    termo: "RAM",
    analogia: "Mala de mão",
    porque: "Leva somente o necessário e é desfeita ao chegar no destino final (volátil).",
    pista: "Memória principal de trabalho; guarda programas em uso e perde tudo ao desligar.",
    imagem: "assets/cards/ram.png"
  },
  {
    termo: "ROM",
    analogia: "Guia de viagem impresso",
    porque: "Só dá para ler e não dá para alterar.",
    pista: "Gravada na fabricação; seu conteúdo não pode ser alterado depois.",
    imagem: "assets/cards/rom.png"
  },
  {
    termo: "EEPROM",
    analogia: "Passaporte com carimbos",
    porque: "Recebe registros um de cada vez e em períodos distantes.",
    pista: "Regravável byte a byte sem sair do circuito; mantém dados sem energia.",
    imagem: "assets/cards/eeprom.png"
  },
  {
    termo: "Flash",
    analogia: "Nome escrito na areia da praia",
    porque: "Fica lá até a onda apagar tudo de uma vez.",
    pista: "Regravável em blocos e não volátil; usada em pendrives e cartões de câmera.",
    imagem: "assets/cards/flash.png"
  },
  {
    termo: "Cache",
    analogia: "Pochete ou doleira",
    porque: "O que você mais usa e fica junto do corpo.",
    pista: "Pequena e ultrarrápida, fica entre a CPU e a RAM com dados mais usados.",
    imagem: "assets/cards/cache.png"
  },
  {
    termo: "Memória de massa",
    analogia: "Mala de viagem grande",
    porque: "Cabe muita coisa mas é lenta de pegar.",
    pista: "Guarda grandes volumes de forma permanente, como HDs e SSDs; é mais lenta.",
    imagem: "assets/cards/memoria-de-massa.png"
  },
  {
    termo: "DMA",
    analogia: "Esteira de bagagem",
    porque: "Entrega as malas sozinha para as pessoas sem ninguém precisar carregar.",
    pista: "Permite que dispositivos transfiram dados para a RAM sem ocupar a CPU.",
    imagem: "assets/cards/dma.png"
  },
  {
    termo: "Address bus",
    analogia: "Número do portão de embarque",
    porque: "Diz para onde ir.",
    pista: "Linhas que indicam em qual posição da RAM a CPU vai ler ou escrever.",
    imagem: "assets/cards/address-bus.png"
  },
  {
    termo: "Data bus",
    analogia: "Ônibus de Tour",
    porque: "Leva os passageiros de um lugar para outro.",
    pista: "Linhas que transportam as informações em si entre CPU, RAM e periféricos.",
    imagem: "assets/cards/data-bus.png"
  },
  {
    termo: "Microcontrolador",
    analogia: "Fechadura eletrônica do quarto de hotel",
    porque: "Faz uma única tarefa sozinha, que é abrir com o cartão-chave.",
    pista: "Chip único com CPU, RAM e periféricos, usado em aparelhos com tarefa específica.",
    imagem: "assets/cards/microcontrolador.png"
  },
  {
    termo: "Dual core",
    analogia: "Recepção do hotel com 2 atendentes",
    porque: "Faz o check-in de dois hóspedes ao mesmo tempo.",
    pista: "Processador com duas unidades de execução independentes no mesmo chip.",
    imagem: "assets/cards/dual-core.png"
  },
  {
    termo: "Quad core",
    analogia: "Recepção do hotel com 4 atendentes",
    porque: "Faz o check-in de quatro hóspedes ao mesmo tempo e a fila anda bem mais rápido.",
    pista: "Processador com quatro unidades de execução independentes no mesmo chip.",
    imagem: "assets/cards/quad-core.png"
  }
];

// ===== Estado da partida =====
let nomeJogador = "";

// ===== Elementos da tela inicial =====
const botaoPlay = document.getElementById("botao-play");
const formNome = document.getElementById("form-nome");
const campoNome = document.getElementById("campo-nome");
const erroNome = document.getElementById("erro-nome");

// ===== Troca de telas =====
// Mostra só a tela com o id informado e esconde as outras.
function mostrarTela(idTela) {
  const telas = document.querySelectorAll(".tela");
  for (let i = 0; i < telas.length; i++) {
    if (telas[i].id === idTela) {
      telas[i].hidden = false;
    } else {
      telas[i].hidden = true;
    }
  }
}

// ===== Tela inicial =====
// Play: esconde o botão e mostra o campo do nome.
botaoPlay.addEventListener("click", function () {
  botaoPlay.hidden = true;
  formNome.hidden = false;
  campoNome.focus();
});

// Jogar: valida o nome e inicia a partida.
formNome.addEventListener("submit", function (evento) {
  evento.preventDefault();
  const nome = campoNome.value.trim();

  if (nome === "") {
    erroNome.textContent = "Digite seu nome para embarcar!";
    campoNome.focus();
  } else {
    erroNome.textContent = "";
    nomeJogador = nome;
    mostrarTela("tela-jogo");
    iniciarPartida();
  }
});

// ===== Elementos da tela de jogo =====
const elementoPontuacao = document.getElementById("pontuacao");
const elementoTimer = document.getElementById("timer");
const elementoChances = document.getElementById("chances");

// ===== Cabeçalho =====
function atualizarPontuacao(pontos) {
  elementoPontuacao.textContent = pontos;
}

function atualizarTimer(segundos) {
  elementoTimer.textContent = segundos;
}

// Desenha um ícone por chance; as já usadas ficam apagadas.
function atualizarChances(chancesRestantes) {
  elementoChances.innerHTML = "";
  for (let i = 0; i < CHANCES; i++) {
    const icone = document.createElement("i");
    icone.className = "fa-solid fa-heart chance";
    if (i >= chancesRestantes) {
      icone.classList.add("perdida");
    }
    elementoChances.appendChild(icone);
  }
}

// ===== Card da imagem questionada =====
const contadorQuestao = document.getElementById("contador-questao");
const molduraQuestao = document.getElementById("moldura-questao");
const imagemQuestao = document.getElementById("imagem-questao");
const reservaQuestao = document.getElementById("reserva-questao");
const descricaoQuestao = document.getElementById("descricao-questao");
const pistaQuestao = document.getElementById("pista-questao");

// Se a imagem não existir, mostra a analogia escrita no lugar.
imagemQuestao.addEventListener("error", function () {
  molduraQuestao.classList.add("sem-imagem");
});
imagemQuestao.addEventListener("load", function () {
  molduraQuestao.classList.remove("sem-imagem");
});

// Preenche o card com a imagem, a descrição (analogia + porquê) e a pista.
function exibirQuestao(item, numeroQuestao) {
  contadorQuestao.textContent = "Questão " + numeroQuestao + "/" + TOTAL_QUESTOES;
  reservaQuestao.textContent = item.analogia;
  imagemQuestao.alt = item.analogia;
  imagemQuestao.src = item.imagem;
  descricaoQuestao.textContent = item.analogia + ": " + item.porque;
  pistaQuestao.textContent = "Pista: " + item.pista;
}

// ===== Início da partida =====
function iniciarPartida() {
  atualizarPontuacao(0);
  atualizarTimer(TEMPO_POR_QUESTAO);
  atualizarChances(CHANCES);
  exibirQuestao(TERMOS[0], 1);
}
