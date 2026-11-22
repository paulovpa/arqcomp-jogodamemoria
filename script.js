// Viagem Computacional — lógica do jogo

// ===== Constantes do jogo =====
const PONTOS_POR_ACERTO = 10;
const TEMPO_POR_QUESTAO = 15; // em segundos
const SEGUNDOS_ALERTA = 5;     // a partir daqui o timer fica vermelho
const CHANCES = 3;            // chances por questão
const TOTAL_QUESTOES = 16;
const PAUSA_ENTRE_QUESTOES = 1400; // em milissegundos, para o jogador ver o resultado
const DURACAO_VIRAR = 400;         // em milissegundos, igual à animação virar-card do CSS
const DURACAO_ZOOM_SAIDA = 400;    // em milissegundos, igual à animação zoom-saida do CSS
const DURACAO_AVISO = 1500;        // em milissegundos, aviso de tempo ou chances esgotados
const AVISO_TEMPO = "Tempo esgotado!";
const AVISO_CHANCES = "Suas chances acabaram!";

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
let ordemQuestoes = []; // índices de TERMOS na ordem sorteada das questões
let questaoAtual = 0;   // posição em ordemQuestoes (0 a 15)
let pontos = 0;
let acertos = 0;
let chancesRestantes = CHANCES;
let resultados = [];    // um item por questão: { indice, acertou } (usado no "Conferir")
let aceitandoCliques = false; // false durante a pausa entre questões e no fim do jogo
let tempoRestante = TEMPO_POR_QUESTAO;
let intervaloTimer = null;    // id do setInterval do timer da questão

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

// Nos últimos 5 segundos os números do timer ficam vermelhos.
function atualizarTimer(segundos) {
  elementoTimer.textContent = segundos;
  if (segundos <= SEGUNDOS_ALERTA) {
    elementoTimer.classList.add("urgente");
  } else {
    elementoTimer.classList.remove("urgente");
  }
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
const avisoQuestao = document.getElementById("aviso-questao");
const emojiAcerto = document.getElementById("emoji-acerto");
const emojiErro = document.getElementById("emoji-erro");

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

// ===== Sorteio =====
// Vetor com os índices de TERMOS: [0, 1, 2, ..., 15].
function criarListaIndices() {
  const lista = [];
  for (let i = 0; i < TERMOS.length; i++) {
    lista.push(i);
  }
  return lista;
}

// Embaralha o vetor (algoritmo de Fisher–Yates): percorre de trás para frente
// e troca cada posição com outra sorteada entre 0 e ela mesma.
function embaralhar(vetor) {
  for (let i = vetor.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temporario = vetor[i];
    vetor[i] = vetor[j];
    vetor[j] = temporario;
  }
  return vetor;
}

// ===== Início da partida =====
function iniciarPartida() {
  // Ordem das questões e posição dos cards são sorteadas de forma independente.
  ordemQuestoes = embaralhar(criarListaIndices());
  questaoAtual = 0;
  pontos = 0;
  acertos = 0;
  chancesRestantes = CHANCES;
  resultados = [];
  aceitandoCliques = true;

  atualizarPontuacao(0);
  atualizarChances(CHANCES);
  exibirQuestao(TERMOS[ordemQuestoes[questaoAtual]], questaoAtual + 1);
  montarTabuleiro(embaralhar(criarListaIndices()));
  iniciarTimer();
}

// ===== Tabuleiro 4x4 =====
const tabuleiro = document.getElementById("tabuleiro");

// Palavras longas demais para o card de 100px: o "\u00AD" (hífen opcional)
// só aparece se a palavra precisar quebrar. O texto em TERMOS não muda.
const QUEBRA_DE_PALAVRA = {
  "Registradores": "Re\u00ADgis\u00ADtra\u00ADdo\u00ADres",
  "Microcontrolador": "Mi\u00ADcro\u00ADcon\u00ADtro\u00ADla\u00ADdor"
};

function textoDoCard(termo) {
  if (QUEBRA_DE_PALAVRA[termo]) {
    return QUEBRA_DE_PALAVRA[termo];
  } else {
    return termo;
  }
}

// Cria um card de termo para cada item da lista, na ordem recebida.
// Cada card guarda a posição do termo no vetor TERMOS (data-indice).
function montarTabuleiro(listaIndices) {
  tabuleiro.innerHTML = "";
  for (let i = 0; i < listaIndices.length; i++) {
    const indice = listaIndices[i];
    const card = document.createElement("button");
    card.type = "button";
    card.className = "card-termo";
    card.dataset.indice = indice;
    card.setAttribute("aria-label", TERMOS[indice].termo);

    // Frente: nome do termo. Verso (mostrado ao acertar): imagem da analogia.
    const texto = document.createElement("span");
    texto.className = "texto-termo";
    texto.textContent = textoDoCard(TERMOS[indice].termo);

    const imagem = document.createElement("img");
    imagem.className = "imagem-termo";
    imagem.src = TERMOS[indice].imagem;
    imagem.alt = TERMOS[indice].analogia;
    imagem.addEventListener("error", function () {
      card.classList.add("sem-imagem");
    });

    // Reserva exibida no verso enquanto a imagem não existir.
    const reserva = document.createElement("span");
    reserva.className = "reserva-termo";
    reserva.textContent = TERMOS[indice].analogia;

    card.appendChild(texto);
    card.appendChild(imagem);
    card.appendChild(reserva);
    tabuleiro.appendChild(card);
  }
}

// ===== Resposta do jogador =====
tabuleiro.addEventListener("click", function (evento) {
  const card = evento.target.closest(".card-termo");
  if (!card || !aceitandoCliques || card.disabled) {
    return;
  }

  const indiceEscolhido = Number(card.dataset.indice);
  const indiceCorreto = ordemQuestoes[questaoAtual];

  if (indiceEscolhido === indiceCorreto) {
    responderCerto(card);
  } else {
    responderErrado(card);
  }
});

// Acerto: o card fica verde, vira mostrando a imagem da analogia e some com zoom out.
function responderCerto(card) {
  aceitandoCliques = false;
  pararTimer();
  pontos = pontos + PONTOS_POR_ACERTO;
  acertos = acertos + 1;
  atualizarPontuacao(pontos);
  resultados.push({ indice: ordemQuestoes[questaoAtual], acertou: true });

  card.classList.add("certo", "virando");
  mostrarEfeitoQuestao(emojiAcerto, "saindo-zoom");

  // No meio da virada (card "fechado") troca o termo pela imagem.
  setTimeout(function () {
    card.classList.add("mostrando-imagem");
  }, DURACAO_VIRAR / 2);

  setTimeout(function () {
    card.classList.remove("virando");
    card.classList.add("saindo");
  }, PAUSA_ENTRE_QUESTOES - DURACAO_ZOOM_SAIDA);

  setTimeout(function () {
    // O espaço do card acertado fica vazio no tabuleiro.
    card.classList.add("removido");
    card.disabled = true;
    avancarQuestao();
  }, PAUSA_ENTRE_QUESTOES);
}

// Erro: card vermelho e bloqueado nesta questão, sem pontos e com uma chance a menos.
// Sem chances, a questão conta como errada e o jogo passa para a próxima.
function responderErrado(card) {
  card.classList.add("errado");
  card.disabled = true;
  chancesRestantes = chancesRestantes - 1;
  atualizarChances(chancesRestantes);

  if (chancesRestantes === 0) {
    aceitandoCliques = false;
    pararTimer();
    resultados.push({ indice: ordemQuestoes[questaoAtual], acertou: false });
    mostrarAviso(AVISO_CHANCES);
    mostrarEfeitoQuestao(emojiErro, "saindo-fade");
    setTimeout(avancarQuestao, DURACAO_AVISO);
  }
}

// Limpa os cards errados da questão anterior (os removidos continuam vazios).
function limparCardsErrados() {
  const cards = tabuleiro.querySelectorAll(".card-termo");
  for (let i = 0; i < cards.length; i++) {
    if (cards[i].classList.contains("errado")) {
      cards[i].classList.remove("errado");
      cards[i].disabled = false;
    }
  }
}

// Vai para a próxima questão ou para o fim das 16 questões.
function avancarQuestao() {
  esconderAviso();
  limparEfeitosQuestao();
  limparCardsErrados();
  questaoAtual = questaoAtual + 1;

  if (questaoAtual < TOTAL_QUESTOES) {
    chancesRestantes = CHANCES;
    atualizarChances(chancesRestantes);
    exibirQuestao(TERMOS[ordemQuestoes[questaoAtual]], questaoAtual + 1);
    aceitandoCliques = true;
    iniciarTimer();
  } else {
    // Fim das questões: o encerramento da partida vem numa próxima etapa.
    aceitandoCliques = false;
    pararTimer();
  }
}

// ===== Timer da questão =====
// Recomeça a contagem de 15 segundos para a questão atual.
function iniciarTimer() {
  pararTimer();
  tempoRestante = TEMPO_POR_QUESTAO;
  atualizarTimer(tempoRestante);
  intervaloTimer = setInterval(contarSegundo, 1000);
}

function pararTimer() {
  if (intervaloTimer !== null) {
    clearInterval(intervaloTimer);
    intervaloTimer = null;
  }
}

// Chamado a cada segundo: diminui o tempo e, ao chegar em 0, encerra a questão.
function contarSegundo() {
  tempoRestante = tempoRestante - 1;
  atualizarTimer(tempoRestante);

  if (tempoRestante <= 0) {
    pararTimer();
    esgotarTempo();
  }
}

// Tempo esgotado sem acerto: a questão conta como errada e o jogo avança.
function esgotarTempo() {
  aceitandoCliques = false;
  resultados.push({ indice: ordemQuestoes[questaoAtual], acertou: false });
  mostrarAviso(AVISO_TEMPO);
  mostrarEfeitoQuestao(emojiErro, "saindo-fade");
  setTimeout(avancarQuestao, DURACAO_AVISO);
}

// ===== Aviso sobre o card questionado =====
function mostrarAviso(texto) {
  avisoQuestao.textContent = texto;
  avisoQuestao.hidden = false;
}

function esconderAviso() {
  avisoQuestao.hidden = true;
  avisoQuestao.textContent = "";
}

// ===== Efeitos sobre o card questionado =====
// Mostra o emoji por cima do card e aplica a animação de saída no card.
function mostrarEfeitoQuestao(emoji, classeSaida) {
  emoji.hidden = false;
  molduraQuestao.classList.add(classeSaida);
}

// Esconde os emojis e traz o card de volta para a próxima questão.
function limparEfeitosQuestao() {
  const emojis = document.querySelectorAll(".emoji");
  for (let i = 0; i < emojis.length; i++) {
    emojis[i].hidden = true;
  }
  molduraQuestao.classList.remove("saindo-zoom", "saindo-fade");
}

// ===== Feedback tátil =====
// Vibração curta ao tocar em botões e cards (só em aparelhos que suportam).
const DURACAO_VIBRACAO = 30; // em milissegundos

// O "true" no final escuta o clique na fase de captura, antes do tabuleiro
// tratar a resposta (um card errado é bloqueado logo no clique).
document.addEventListener("click", function (evento) {
  const alvo = evento.target.closest(".botao, .card-termo");
  if (alvo && !alvo.disabled && navigator.vibrate) {
    navigator.vibrate(DURACAO_VIBRACAO);
  }
}, true);

// Sem um ouvinte de toque, alguns navegadores de celular não aplicam o :active.
document.addEventListener("touchstart", function () {}, { passive: true });
