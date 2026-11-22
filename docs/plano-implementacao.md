# Plano de implementação — Viagem Computacional

## Contexto
O repositório (`paulovpa/arqcomp-jogodamemoria`) tem só a documentação: `README.md`, `docs/especificacao.md` e `docs/AGENTS.md`. Ainda não há código. O objetivo é construir o jogo da memória em HTML, CSS e JS puros (com Font Awesome e Google Fonts via CDN e `localStorage`), publicado no GitHub Pages, em etapas pequenas. Cada etapa tem seus próprios commits no padrão `tipo: descrição curta` (`feat`, `fix`, `style`, `docs`), em português e com o verbo no presente. Regras do AGENTS.md: no mínimo 6 commits, em pelo menos 2 dias diferentes, sem rebase, squash ou force push, e sem dados pessoais.

## Decisões tomadas (ambiguidades resolvidas com o usuário)
1. **Erro:** o card errado fica vermelho e bloqueado na questão atual, e o jogador perde 1 chance. A questão só avança quando ele acerta, quando acabam as 3 chances ou quando acabam os 15s.
2. **Cards de termo:** o nome do termo fica visível desde o início. Ao acertar, o card vira mostrando a imagem da analogia, fica verde e some com zoom out, deixando o espaço vazio (`visibility: hidden`, a grade 4x4 não se reorganiza). Os cards errados voltam ao normal na questão seguinte.
3. **Fim de jogo:** acontece depois que as 16 questões foram feitas (o tempo máximo é 16 × 15s). O pop-up "Relaxa, acabou a turbulência!" com o botão "Ver placar" aparece sempre.
4. **Pergunta:** o texto fixo é "Qual termo corresponde a esta imagem?", com o contador "Questão X/16". A "frase da questão" é a descrição "Analogia: porquê" que aparece no card.
5. **Faixas:** a barra fica vermelha com 0–4 acertos, laranja com 5–9, amarela com 10–11 e verde com 12–16. As mensagens seguem a linha 115: <5 "Vish, se perdeu...", <10 "Eu confio", <12 "Tá no caminho!", <16 "Tá voando alto", 16 "Você é monstro!". A barra "X/16 acertadas" aparece sempre.
6. **Ordem:** a ordem das questões e a posição dos cards na grade são sorteadas a cada partida (Fisher–Yates). As posições não mudam durante a partida.
7. **Ranking e recorde:** o ranking mostra as 10 partidas mais recentes (nome, pontos e acertos), da mais nova para a mais antiga. O recorde guarda `{nome, pontos}`. As chaves são `viagemComputacional_ranking`, `viagemComputacional_recorde` e `viagemComputacional_ultimoFundo`.
8. **Feedback tátil:** um keyframe CSS de "pressionar" no estilo 16-bit, mais `navigator.vibrate(30)` quando o aparelho permitir.
9. **Imagens:** uso caminhos fixos em minúsculas dentro de `assets/`. Enquanto a imagem não existir, aparece um placeholder em CSS (o `onerror` adiciona uma classe). O background cai num degradê da paleta. Não uso SVG.
10. **Fontes:** Press Start 2P para títulos, score e timer. Pixelify Sans para botões, termos e mensagens. IBM Plex Mono para descrição e pista.
11. **Avisos:** "Tempo esgotado!" e "Suas chances acabaram!", mostrados por cerca de 1,5s junto com o emoji chorando.
12. **Docs:** os arquivos continuam em `docs/`. O background é sorteado entre 3 sem repetir o da partida anterior.

## Arquivos
`index.html`, `style.css` e `script.js` na raiz. Pastas `assets/{logo,cards,emojis,backgrounds}/`. Ao final, atualizo `README.md`. `docs/especificacao.md` não muda.

## Etapas e commits

1. **Plano no repositório**
   - `docs: adiciona plano de implementação` (cria `docs/plano-implementacao.md` com este plano)

2. **Estrutura base**
   - `feat: cria estrutura inicial com index, estilos e script`: HTML com as seções de tela (início, jogo, placar), links CDN do Font Awesome e Google Fonts, e `style.css` e `script.js` vazios ligados ao HTML.
   - `feat: adiciona pastas de assets com nomes padronizados`: `.gitkeep` em cada pasta.

3. **Identidade visual**
   - `style: define paleta de cores em variáveis css`: as 11 cores no `:root` com os nomes da especificação.
   - `style: aplica tipografia 16-bit com três fontes`

4. **Dados e constantes**
   - `feat: adiciona dados dos 16 termos e constantes do jogo`: no topo de `script.js` ficam `TERMOS` (termo, analogia, porquê, pista, imagem) com os textos exatos da especificação, `PONTOS_POR_ACERTO=10`, `TEMPO_POR_QUESTAO=15`, `CHANCES=3` e `TOTAL_QUESTOES=16`.

5. **Tela inicial**
   - `feat: cria tela inicial com logo e botão play`: logo numa `<img>` e ícone `fa-play`.
   - `feat: adiciona campo de nome e botão jogar`: o nome é obrigatório, com no máximo 20 caracteres e sem espaços nas pontas.

6. **Layout da tela de jogo**
   - `feat: monta cabeçalho com pontuação, timer e chances`: score e timer no topo, ao centro. As chances são 3 ícones Font Awesome.
   - `feat: adiciona card da imagem questionada com descrição e pista`: card de 200×200 centralizado, com a pergunta acima dele.
   - `feat: adiciona tabuleiro 4x4 com os 16 termos`: cards de 100×100.

7. **Fluxo de questões**
   - `feat: sorteia ordem das questões e posição dos cards`
   - `feat: valida resposta e soma 10 pontos ao acertar`
   - `feat: controla 3 chances por questão`: card vermelho, bloqueado, e um ícone de chance a menos.

8. **Timer**
   - `feat: implementa timer de 15 segundos`
   - `style: deixa timer vermelho nos últimos 5 segundos`
   - `feat: mostra aviso e avança ao esgotar tempo ou chances`

9. **Animações e emojis**
   - `feat: vira card certo para a imagem e some com zoom out`
   - `feat: exibe emoji de fogo e zoom out no card questionado ao acertar`
   - `feat: exibe emoji chorando e fade out ao errar ou esgotar tempo`
   - `style: adiciona feedback tátil em botões e cards`

10. **Fim de jogo**
    - `feat: encerra partida após as 16 questões`
    - `feat: mostra pop-up de fim de jogo com botão ver placar`

11. **Placar final**
    - `feat: cria tela de placar com mensagem por desempenho`
    - `feat: adiciona barra de acertos com cores por faixa`
    - `feat: salva recorde e ranking no localStorage`

12. **Conferir e reiniciar**
    - `feat: adiciona pop-up conferir com termos certos e errados`
    - `feat: adiciona botão reiniciar nova partida`

13. **Backgrounds**
    - `feat: sorteia background a cada partida sem repetir`
    - `style: adiciona fallback de degradê para o background`

14. **Responsividade e acabamento**
    - `style: ajusta layout responsivo para celular`: a 375px, a grade continua 4x4 e os cards usam `min(100px, 21vw)`.
    - `fix: ...`: correções que aparecerem no teste dos critérios.

15. **README e publicação**
    - `docs: atualiza README com link do GitHub Pages`: https://paulovpa.github.io/arqcomp-jogodamemoria/

Para cumprir a regra dos 2 dias diferentes, as etapas 1 a 7 ficam num dia e as etapas 8 a 15 em outro. Os commits são feitos e enviados com `git push` normal, sem nenhuma reescrita de histórico.

## Verificação
- Abrir `index.html` no navegador (ou no Live Server) e conferir os 8 critérios da seção 7:
  1. Play, nome e "Jogar" iniciam a partida.
  2. Um acerto soma 10 pontos, avança a questão e o timer volta a 15s.
  3. Há 3 chances por questão.
  4. Os pontos aparecem no placar.
  5. O card certo some com zoom out.
  6. O jogo termina após as 16 questões.
  7. Recorde e ranking continuam lá depois de recarregar a página.
  8. "Reiniciar" começa uma nova partida.
- Testar também: timer vermelho com ≤5s, cores da barra nos limites (4, 5, 9, 10, 11, 12 e 16 acertos), pop-up Conferir, background que não repete, e placeholders quando as imagens não existem.
- Testar com a largura de 375px no DevTools.
- Depois de publicar, abrir o link do GitHub Pages numa janela anônima.
