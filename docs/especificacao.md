# Titulo do documento

## 1. Contexto

O cenário atual, o problema identificado e a necessidade de desenvolver o sistema:

Quero criar um jogo para entender melhor alguns termos de arquitetura computacional.
O jogo será baseado num jogo da memória utilizando o método loci para auxiliar a memorização, onde o jogo vai disponibilizar um card com imagem, e o jogador tem um tempo limite (está na seção 3) para escolher um card com a resposta (termo de arquitetura computacional), ao escolher a resposta certa, ele acumula pontos (que estão especficiados na seção 3), e passa para o próximo desafio para acertar o card, o jogo acaba quando o jogador atingir o limite de pontos, e recebe uma mensagem de parabéns.
O nome do jogo é Viagem Computacional, e o tema é de viagens pelos países do mundo passando por aviões em aeroportos.

## 2. Objetivo

A finalidade do sistema e o resultado que pretendo alcançar com o desenvolvimento:

O objetivo é que o usuário possa aprender os termos de arquitetura computacional através de um jogo da memória interativo que utiliza o aprendizado associativo por imagens.

## 3. Escopo

Delimitações do que será desenvolvido nesta versão.

- **Dentro do escopo:** 
Modo de jogo: Partida solo (1 jogador) contra o relógio.
Inicio do jogo: Deve haver um botão com icone play no inicio, o jogador insere o nome num campo, aperta no botão "jogar" para começar as aparecer os cards e questões.
Tabuleiro único: Grade fixa de 4x4 (16 cartas)
Card da imagem questionada: deve estar centralizado acima do centro da tela e deve ter dimensoes de 200px x 200px.
Card da imagem questionada: deve haver uma descrição abaixo da imagem que une a analogia e o porque. Por exemplo: "O piloto do avião comanda toda a viagem"
Card da imagem questionada: para cada questão, deve haver a pista técnica (dica) correspodente abaixo da descrição para ajudar o usuário a acertar a resposta.
Cards dos termos: devem estar abaixo do card da imagem selecionada e terem dimensões de 100px x 100px.
Pergunta: Deve haver uma pergunta acima do card da imagem questionada.
Frase da questão: deve haver 
Pontuação: Deve haver um score na parte superior central acima da pergunta.
Timer: A pergunta tem um timer de 15s que fica na parte superior central ao lado da pontuação, que ao encerrar, mostra uma mensagem de aviso e pula para o próximo desafio (trocando o card da imagem questionada com descrição e mantendo cards do termo no mesmo lugar).
Chances: Para cada imagem questionada o usuário tem 3 chances que devem exibir na tela, ao acabar as chances, passa para o próximo desafio, independente se no timer ainda tinha tempo ou não.
Mensagem no final do jogo: Quando acabar o jogo, deve haver uma mensagem no final com um botao para ver o placar.
Placar final: Ao final do jogo, após o usuário clicar em ver placar, deve ir para uma tela de placar do jogador, e abaixo do placar mostrar um ranking com o nome e os ultimas pontuações, acima do ranking e abaixo do placar deve ter o record que fica salvo no localStorage.
Contador de acertos: Uma barra que fica na telado placar final.
Botão Conferir: na tela do placar final que mostra um pop-up de quais palavras estão certas e quais estão erradas naquela partida jogada.
Botão Reiniciar: na tela do placar final que permite o usuário jogar novamente.
Botões e cliques nos card: devem ter feedback tátil.
Plataforma: Aplicação web responsiva rodando 100% no navegador (sem backend).
Idioma: Interface toda em português (PT-BR).
Plano de fundo: Deve ser um background em 16-bits inspirado no tema.

Tema dos cards: Viagem, seguindo a respectiva lista abaixo:
1. Termo: CPU, Analogia: Piloto do avião, Por quê: Comanda toda a viagem.
2. Termo: ULA, Analogia: Casa de câmbio, Por quê: Faz as contas de conversão de moeda.
3. Termo: UC, Analogia: Torre de controle, Por quê: Decide quem decola e quando.
4. Termo: Registradores, Analogia: Câmera fotográfica na mão, Por quê: Registra todas as fotos da viagem no exato momento em que você está.
5. Termo: RAM, Analogia: Mala de mão, Por quê: Leva somente o necessário e é desfeita ao chegar no destino final (volátil).
6. Termo: ROM, Analogia: Guia de viagem impresso, Por quê: Só dá para ler e não dá para alterar.
7. Termo: EEPROM, Analogia: Passaporte com carimbos, Por quê: Recebe registros um de cada vez e em períodos distantes.
8. Termo: Flash, Analogia: Nome escrito na areia da praia, Por quê: Fica lá até a onda apagar tudo de uma vez.
9. Termo: Cache, Analogia: Pochete ou doleira, Por quê: O que você mais usa e fica junto do corpo.
10. Termo: Memória de massa, Analogia: Mala de viagem grande, Por quê: Cabe muita coisa mas é lenta de pegar.
11. Termo: DMA, Analogia: Esteira de bagagem, Por quê: Entrega as malas sozinha para as pessoas sem ninguém precisar carregar.
12. Termo: Address bus, Analogia: Número do portão de embarque, Por quê: Diz para onde ir.
13. Termo: Data bus, Analogia: Ônibus de Tour, Por quê: Leva os passageiros de um lugar para outro.
14. Termo: Microcontrolador, Analogia: Fechadura eletrônica do quarto de hotel, Por quê: Faz uma única tarefa sozinha, que é abrir com o cartão-chave.
15. Termo: Dual core, Analogia: Recepção do hotel com 2 atendentes, Por quê: Faz o check-in de dois hóspedes ao mesmo tempo.
16. Termo: Quad core, Analogia: Recepção do hotel com 4 atendentes, Por quê: Faz o check-in de quatro hóspedes ao mesmo tempo e a fila anda bem mais rápido.

Pistas técnicas:

1. CPU: É o que executa as instruções dos programas, é considerada o cérebro do computador.
2. ULA: Parte da CPU que faz somas, subtrações e comparações entre valores.
3. UC: Parte da CPU que busca, decodifica instruções e coordena os demais componentes.
4. Registradores: Menores e mais rápidos espaços de dados, localizados dentro da própria CPU.
5. RAM: Memória principal de trabalho; guarda programas em uso e perde tudo ao desligar.
6. ROM: Gravada na fabricação; seu conteúdo não pode ser alterado depois.
7. EEPROM: Regravável byte a byte sem sair do circuito; mantém dados sem energia.
8. Flash: Regravável em blocos e não volátil; usada em pendrives e cartões de câmera.
9. Cache: Pequena e ultrarrápida, fica entre a CPU e a RAM com dados mais usados.
10. Memória de massa: Guarda grandes volumes de forma permanente, como HDs e SSDs; é mais lenta.
11. DMA: Permite que dispositivos transfiram dados para a RAM sem ocupar a CPU.
12. Address bus: Linhas que indicam em qual posição da RAM a CPU vai ler ou escrever.
13. Data bus: Linhas que transportam as informações em si entre CPU, RAM e periféricos.
14. Microcontrolador: Chip único com CPU, RAM e periféricos, usado em aparelhos com tarefa específica.
15. Dual core: Processador com duas unidades de execução independentes no mesmo chip.
16. Quad core: Processador com quatro unidades de execução independentes no mesmo chip.


- **Fora do escopo:** 
Não haverá modo multiplayer (nem local, nem online).
Não haverá sistema de login, cadastro ou perfil de usuário.
Não haverá ranking global / banco de dados (apenas recorde salvo no localStorage)
Não haverá seletor de dificuldade (sem grades 2x2 ou 6x6 por enquanto).
Não haverá efeitos sonoros ou música de fundo.
Não gere imagens em SVG, exceto se for necessário para o background, mesmo assim me avise se for necessário antes de gerar.



## 4. Funcionalidades

Operações que o usuário poderá realizar no sistema:


o usuário poderá clicar no botão play e escolher um nome para iniciar a partida.

O usuário poderá clicar na carta do card da resposta e se o card resposta for correspondente a 

Ao acertar a reposta o card do termo vai virar com a imagem desse próprio card resposta, se a resposta estiver corresponder com o atual card da imagem questionada e estiver correta, o card com o termo vai ficar verde, o jogador ganha 10 pontos, e se tiver errado o card vai ficar vermelho e o jogador não ganha nenhum ponto e passa para a próxima questão.
O timer de cada carta tem 15 segundos e vai diminuindo com o passar do tempo, e ao chegar nos 5 segundos restante os numeros do timer devem ficar vermelho.

Quando o tempo da questão acabar e o usuário não tiver clicado, ou quando o usuário tiver errado em todas as chances, deve aparecer uma imagem de emoji chorando por cima do card da imagem questionada, enquanto ele some com fade out (a imagem deve ser apontada numa tag img no html para que eu possa trocar quando quiser).

Quando o usuário acertar a resposta da imagem questionada, deve aparecer uma imagem de um emoji de fogo, enquanto o card da imagem questionada some com zoom out (a imagem deve ser apontada numa tag img no html para que eu possa trocar quando quiser).

Quando o usuário acertar a resposta, o card da resposta deve sumir com zoom out e seu espaço na tela deve ficar vazio.

Se o usuário acertar tudo, deve mostrar no final abaixo da pontuação uma barra de progresso como por exemplo "15/16 acertadas"
Na barra de progresso, se  acertou menos que 5, fica vermelha, se acertou menos que 10 fica laranja, se acertou menos que 12 fica amarela, e se acertou 13 ou mais fica verde.

Deve haver um card com a mensagem pop-up no centro mostrada no final do jogo quando acabar o tempo, escrita "Relaxa, acabou a turbulência!" e com o botão escrito "Ver placar", que vai levar a tela do placar final.

Deve haver uma mensagem na tela do placar final, acima da pontuação final do jogador, considerado que se acertou menos que 5, mostra "Vish, se perdeu...", se acertou menos que 10 mostra "Eu confio", se acertou menos que 12 mostra "Tá no caminho!", e se acertou menos que 16 mostra "Tá voando alto", se acertou 16 mostra "Você é monstro!"

Na tela do placar, deve haver um botão "reiniciar" para jogar novamente

A cada nova partida o background deverá trocar aleatoriamente.


## 5. Regras de negócio

Descreva as condições e restrições que determinam o funcionamento do sistema:

Todo card de imagem questionada só tem uma resposta correta.

O sistema deve validar a troca dos cards com a resposta correta a cada nova questão.

O jogo acaba quando o usuário acertar todas as questões, ou tiver sido questionado para todas as questões, independente se acertou ou não e indepentente se selecionou uma resposta,  ou quando atingir o tempo limite (o tempo limite é considerado com o cálculo da soma de tempo de todas as questões de 15s finalizadas).

Use a biblioteca font awesome para icones do jogo.

A quantidade de pontos ganhas em cada questão é de 10 pontos, e os pontos máximos por partida são de 160 pontos.


## 6. Interface

Descreva como o sistema será apresentado e como o usuário deverá interagir com ele:

O sistema terá uma tela inicial onde mostra o logo do jogo (o logo deve ser uma tag img que eu possa trocar a imagem a qualquer momento).
O botão play está logo abaixo do nome do jogo.

Ao clicar no botão play, o jogo deve iniciar.

Toda a interface deve ser inspirada em jogos 16-bit.

Toda partida tem um background diferente. Tem uma rotação de backgrounds limitada a uma lista de 3 backgrounds.
Os backgrounds são 16-bit inspirados em Dreamlike Fantasy Adventure.

Tipografia deve ser inspirada em jogos 16-bit, contendo fontes como IBM Plex Mono, Pixelta, e outras fontes 16-bit. Use no máximo 3 fontes diferentes para compor a tipografia do jogo, de acordo com o elemento. Padronize a tipografia considerando os elementos.

A paleta de cores deve seguir uma paleta clara como a paleta abaixo:
Morning Sky — #A9D5F2
Cloud White — #F5F4E9
Meadow Green — #91B978
Forest Green — #527B58
Sunlight Yellow — #F5D77E
Golden Wheat — #DDBB72
Flower Pink — #E8B6B1
Mountain Blue — #718FA8
Earth Beige — #D6C2A0
Deep Forest — #344F45
Sunset Orange — #E9A15B

Considere organização das telas, formulários, botões, filtros, mensagens e identidade visual.

## 7. Critérios de aceitação

Defina condições objetivas para verificar se as funcionalidades foram implementadas corretamente.

- Critério de aceitação 1: O usuário está clicando no botão play, inserindo seu nome, e iniciando o jogo
- Critério de aceitação 2: O usuário seleciona a resposta certa, soma 10 pontos no score, passa para a proxima questao, o timer renova para 15s.
- Critério de aceitação 3: O usuário tem 3 chances para selecionar a resposta correta.
- Critério de aceitação 4: Os pontos estão sendo acumulados durante a partida para serem mostrados na tela do placar final.
- Critério de aceitação 5: Ao acertar a questão, o card da resposta que o usuario selecionou e estava certa some da tela com zoom out.
- Critério de aceitação 6: O jogo está finalizando seguindo o critério de finalização definido na seção 5.
- Critério de aceitação 7: A tela do placar final está mostrando todos os itens necessários solicitados, e o ranking e record estão guardando os valores.
- Critério de aceitação 8: Na tela do placar final o usuário consegue utilizar o botão "reiniciar" para iniciar uma nova partida para jogar novamente.
