# ✈️ Viagem Computacional

Um jogo da memória para aprender os termos de arquitetura computacional viajando pelo mundo.

## Sobre o jogo

**Viagem Computacional** é um jogo web inspirado nos jogos 16-bit. Ele ensina 16 termos de arquitetura de computadores por meio de analogias com uma viagem: o piloto do avião é a CPU, a mala de mão é a RAM, a esteira de bagagem é o DMA, e assim por diante.

O jogo usa o **método loci** (palácio da memória), uma técnica que associa cada informação a uma imagem e a um lugar. Em vez de decorar definições soltas, o jogador liga cada termo a uma cena da viagem, o que torna a memorização mais fácil e duradoura.

A cada rodada aparece uma imagem com a descrição da analogia e uma pista técnica. O desafio é encontrar, no tabuleiro, o card com o termo correspondente antes que o tempo acabe.

## Como jogar

1. Na tela inicial, clique no botão **Play**.
2. Digite seu nome e clique em **Jogar**.
3. Observe a imagem no centro da tela, leia a descrição e a pista técnica.
4. Clique no card do tabuleiro com o termo que corresponde à imagem.
   - **Acertou:** o card fica verde, você ganha **10 pontos** e passa para a próxima imagem.
   - **Errou:** o card fica vermelho e você não ganha pontos.
5. Você tem **15 segundos** e **3 chances** por imagem. Se o tempo ou as chances acabarem, o jogo passa para a próxima imagem.
6. O jogo termina depois das 16 imagens. A pontuação máxima é de **160 pontos**.
7. No placar final, veja sua pontuação, seu recorde e o ranking das últimas partidas. Use **Conferir** para ver os termos que você acertou e errou, e **Reiniciar** para jogar de novo.

## Termos e pistas

| Nº | Termo | Analogia | Pista técnica |
|---|---|---|---|
| 1 | CPU | Piloto do avião | Executa as instruções dos programas; é considerada o cérebro do computador. |
| 2 | ULA | Casa de câmbio | Parte da CPU que faz somas, subtrações e comparações entre valores. |
| 3 | UC | Torre de controle | Parte da CPU que busca, decodifica instruções e coordena os demais componentes. |
| 4 | Registradores | Câmera fotográfica na mão | Menores e mais rápidos espaços de dados, localizados dentro da própria CPU. |
| 5 | RAM | Mala de mão | Memória principal de trabalho; guarda programas em uso e perde tudo ao desligar. |
| 6 | ROM | Guia de viagem impresso | Gravada na fabricação; seu conteúdo não pode ser alterado depois. |
| 7 | EEPROM | Passaporte com carimbos | Regravável byte a byte sem sair do circuito; mantém dados sem energia. |
| 8 | Flash | Nome escrito na areia da praia | Regravável em blocos e não volátil; usada em pendrives e cartões de câmera. |
| 9 | Cache | Pochete ou doleira | Pequena e ultrarrápida, fica entre a CPU e a RAM com dados mais usados. |
| 10 | Memória de massa | Mala de viagem grande | Guarda grandes volumes de forma permanente, como HDs e SSDs; é mais lenta. |
| 11 | DMA | Esteira de bagagem | Permite que dispositivos transfiram dados para a RAM sem ocupar a CPU. |
| 12 | Address bus | Número do portão de embarque | Linhas que indicam em qual posição da RAM a CPU vai ler ou escrever. |
| 13 | Data bus | Ônibus de tour | Linhas que transportam as informações em si entre CPU, RAM e periféricos. |
| 14 | Microcontrolador | Fechadura eletrônica do quarto de hotel | Chip único com CPU, RAM e periféricos, usado em aparelhos com tarefa específica. |
| 15 | Dual core | Recepção do hotel com 2 atendentes | Processador com duas unidades de execução independentes no mesmo chip. |
| 16 | Quad core | Recepção do hotel com 4 atendentes | Processador com quatro unidades de execução independentes no mesmo chip. |

## Tecnologias

- HTML, CSS e JavaScript puros
- Font Awesome (ícones)
- localStorage (recorde e ranking)
- GitHub Pages (publicação)

## Como rodar localmente

Baixe ou clone o repositório e abra o arquivo `index.html` no navegador. Não é preciso instalar nada.

## Jogue online

🔗 https://SEU-USUARIO.github.io/NOME-DO-REPOSITORIO/
