# ✈️ Viagem Computacional

Um jogo da memória para aprender os termos de arquitetura computacional viajando pelo mundo.

🎮 **Jogue online:** https://paulovpa.github.io/arqcomp-jogodamemoria/

## Sobre o jogo

**Viagem Computacional** é um jogo web inspirado nos jogos 16-bit. Ele ensina 16 termos de arquitetura de computadores por meio de analogias com uma viagem: o piloto do avião é a CPU, a mala de mão é a RAM, a esteira de bagagem é o DMA, e assim por diante.

O jogo usa o **método loci** (palácio da memória), uma técnica que associa cada informação a uma imagem e a um lugar. Em vez de decorar definições soltas, o jogador liga cada termo a uma cena da viagem, o que torna a memorização mais fácil e duradoura.

## Como jogar

1. Na tela inicial, clique no botão **Play** (▶).
2. Digite seu nome e clique em **Jogar**.
3. A cada questão aparece uma imagem com a descrição da analogia e uma **pista técnica**. Encontre no tabuleiro o card com o termo correspondente.
4. **Acertou:** o card fica verde, vira mostrando a imagem e some do tabuleiro. Você ganha **10 pontos** e passa para a próxima questão.
5. **Errou:** o card fica vermelho e você perde uma chance. Você tem **3 chances** por questão.
6. Cada questão tem **15 segundos**. Nos últimos 5 segundos o timer fica vermelho. Se o tempo ou as chances acabarem, o jogo passa para a próxima questão.
7. O jogo termina depois das **16 questões**. A pontuação máxima é **160 pontos**.
8. No placar final você vê sua pontuação, a barra de acertos, o **recorde** e o **ranking** das últimas 10 partidas (salvos no navegador).
9. Use **Conferir** para ver quais termos você acertou e errou, e **Reiniciar** para jogar de novo. A cada partida o cenário de fundo muda.

## Termos e pistas

| Nº | Termo | Analogia | Por quê | Pista técnica |
|---|---|---|---|---|
| 1 | CPU | Piloto do avião | Comanda toda a viagem. | É a parte do computador que executa as instruções dos programas, ela é considerada o cérebro do computador. |
| 2 | ULA | Casa de câmbio | Faz as contas de conversão de moeda. | Essa parte faz todas as operações aritméticas, como soma, subtração, multiplicação e divisão. Ela também faz operações lógicas como AND, OR, NOT e comparações de maior, menor e igual. |
| 3 | UC | Torre de controle | Decide quem decola e quando. | Parte da CPU que coordena os demais componentes, é ela que dá ordens para ULA e outras partes. |
| 4 | Registradores | Câmera fotográfica na mão | Registra todas as fotos da viagem no exato momento em que você está. | Registram dados e instruções que a CPU está utilizando no momento, ficam localizados dentro da própria CPU. |
| 5 | RAM | Mala de mão | Leva somente o necessário e é desfeita ao chegar no destino final (volátil). | É uma memória mais rápida que um HD e que guarda programas e dados que estão sendo usados naquele momento, mas por ser volátil, se desligar o computador, perderá esses dados. |
| 6 | ROM | Guia de viagem impresso | Só dá para ler e não dá para alterar. | É uma memória não volátil gravada na fabricação, que contém instruções e configurações básicas para o computador ligar, e as primeiras nunca mais poderiam ser regravadas. |
| 7 | EEPROM | Passaporte com carimbos | Recebe registros um de cada vez e em períodos distantes. | É um tipo de ROM que é regravável byte a byte sem sair do circuito, ela mantém dados sem energia. |
| 8 | Flash | Nome escrito na areia da praia | Fica lá até a onda apagar tudo de uma vez. | É uma memória regravável em blocos e não volátil, é muito usada em pendrives e cartões de câmera. |
| 9 | Cache | Pochete ou doleira | O que você mais usa e fica junto do corpo. | É pequena e ultrarrápida, fica entre a CPU e a RAM com dados mais usados, assim a CPU não precisa ficar buscando o dado na RAM toda vez. |
| 10 | Memória de massa | Mala de viagem grande | Cabe muita coisa mas é lenta de pegar. | Guarda grandes volumes de forma permanente, como HDs e SSDs, é mais lenta. |
| 11 | DMA | Esteira de bagagem | Entrega as malas sozinha para as pessoas sem ninguém precisar carregar. | Permite que dispositivos de entrada e saída transfiram e armazenem dados na RAM sem a necessidade de ocupar a CPU. |
| 12 | Address bus | Número do portão de embarque | Diz para onde ir. | Linhas ou trilhas condutoras que ficam na placa-mãe, ligam a CPU à memória e que indicam em qual posição da RAM a CPU vai ler ou escrever. |
| 13 | Data bus | Ônibus de Tour | Leva os passageiros de um lugar para outro. | Linhas ou trilhas condutoras que transportam as informações em si entre CPU, RAM e periféricos. |
| 14 | Microcontrolador | Fechadura eletrônica do quarto de hotel | Faz uma única tarefa sozinha, que é abrir com o cartão-chave. | É um pequeno chip único que contém CPU, RAM, periféricos e memória não volátil que guarda o firmware. É muito utilizado em dispositivos que têm uma tarefa específica, como um pen-drive ou arduino. |
| 15 | Dual core | Recepção do hotel com 2 atendentes | Faz o check-in de dois hóspedes ao mesmo tempo. | É um processador com duas unidades de execução (núcleos) independentes no mesmo chip. |
| 16 | Quad core | Recepção do hotel com 4 atendentes | Faz o check-in de quatro hóspedes ao mesmo tempo e a fila anda bem mais rápido. | É um processador com quatro unidades de execução independentes (núcleos) no mesmo chip. |

## Tecnologias

- HTML, CSS e JavaScript puros (sem frameworks e sem etapa de build)
- [Font Awesome](https://fontawesome.com/) para os ícones
- Google Fonts: Press Start 2P, Pixelify Sans e IBM Plex Mono
- `localStorage` para o recorde e o ranking
- GitHub Pages para a publicação

## Estrutura do projeto

```
├── index.html        # telas do jogo
├── style.css         # visual 16-bit, paleta e animações
├── script.js         # dados dos 16 termos e lógica do jogo
├── assets/
│   ├── logo/         # logo do jogo
│   ├── cards/        # imagens das 16 analogias
│   ├── emojis/       # emojis de acerto e de erro
│   └── backgrounds/  # 3 cenários 16-bit (Itália, Japão e Suíça)
└── docs/             # especificação, AGENTS e plano de implementação
```

## Como rodar localmente

Baixe ou clone o repositório e abra o arquivo `index.html` no navegador (ou use uma extensão como o Live Server). Não é preciso instalar nada.
