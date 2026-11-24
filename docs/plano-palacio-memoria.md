# Plano de implementação — Card "Palácio da memória"

## Contexto
O jogo já está pronto e publicado. Esta feature adiciona à tela inicial um card que apresenta a técnica do palácio da memória e um pop-up com uma explicação curta. Os requisitos estão em `docs/especificacao-palacio-memoria.md`. As regras de nomes, estilo e commits seguem `docs/AGENTS.md`: HTML, CSS e JS puros, classes e IDs em português, commits no padrão `tipo: descrição curta` e sem reescrever o histórico.

## Decisões tomadas
1. **Foco ao abrir:** vai para o botão `#botao-fechar-palacio`, como já acontece no `#popup-conferir`. Assim o título não precisa de `tabindex`.
2. **Abrir e fechar:** `abrirPopupPalacio()` e `fecharPopupPalacio()` reaproveitam as funções `abrirPopup()` e `fecharPopup()` que já existem no `script.js`.
3. **Esc:** o listener novo é separado do listener do `#popup-conferir` e só age quando `#popup-palacio` está aberto. O listener existente não muda.
4. **Ícone do card:** Font Awesome `fa-landmark`, que já vem com o CDN carregado.
5. **Textos:** usados exatamente como estão na especificação, sem reescrever.

## Arquivos
- `index.html`: card dentro de `#tela-inicio` e pop-up junto dos outros popups.
- `style.css`: estilos de `.card-palacio` e do pop-up.
- `script.js`: lógica de abrir e fechar.
- `README.md`: menção ao card na seção "Sobre o jogo".

## Etapas

### Etapa 1 — Card na tela inicial
- Adicionar `div.card-palacio` dentro de `#tela-inicio`, logo abaixo da `.caixa-inicio`, com o ícone `fa-landmark`, a frase em destaque, a descrição e o `button#botao-palacio` com os textos da especificação.
- Estilizar o card em `style.css`:
  - layout horizontal (ícone à esquerda, textos à direita) e mesma largura da `.caixa-inicio`;
  - mais baixo e mais discreto que a caixa de início, para não competir com o botão Play;
  - bordas e sombras em estilo pixel, usando as variáveis de cor do `:root`;
  - botão-pergunta como botão secundário, com hover e foco visível;
  - contraste legível sobre o fundo da tela inicial;
  - até 599px, empilhar na vertical (ícone em cima, texto embaixo).
- Conferir que o card só aparece na tela inicial e que a tela continua cabendo em notebooks (a regra `@media (min-width: 600px) and (max-height: 820px)` pode precisar de ajuste).

### Etapa 2 — Pop-up explicativo
- Adicionar em `index.html`, junto de `#popup-fim` e `#popup-conferir`:
  `div.popup-fundo#popup-palacio[hidden] > div.popup[role="dialog"][aria-modal="true"][aria-labelledby="titulo-palacio"]`
  com o `h2#titulo-palacio`, os três blocos ("O que é?", "Por que funciona?", "Como aparece no jogo?"), a lista `ul` com os três exemplos, o parágrafo final e o `button#botao-fechar-palacio`.
- Em `script.js`:
  - criar `abrirPopupPalacio()`, que abre o pop-up e põe o foco no botão de fechar;
  - criar `fecharPopupPalacio()`, que fecha o pop-up e devolve o foco para `#botao-palacio`;
  - ligar o clique de `#botao-palacio`, o clique no botão de fechar, o clique no fundo (`evento.target === popupPalacio`) e a tecla Esc (só com o pop-up aberto).
- Em `style.css`:
  - subtítulos em destaque e menores que o título;
  - lista com um exemplo por linha e o emoji no início;
  - no desktop, caber sem rolagem; em telas pequenas, `max-height` e `overflow-y: auto` na `.popup` do palácio, para rolar só por dentro.
- Não mexer no estado do `#form-nome`: abrir e fechar o pop-up não pode mostrar nem esconder o formulário.

### Etapa 3 — README e verificação
- Atualizar a seção "Sobre o jogo" do `README.md` mencionando o card explicativo na tela inicial.
- Testar todos os critérios de aceite da especificação (ver Verificação).
- Corrigir o que aparecer nos testes.

## Verificação
- Abrir `index.html` no navegador (ou no Live Server) e conferir:
  1. O card aparece abaixo da caixa de início, só na tela inicial, em layout horizontal no desktop.
  2. O card é visualmente secundário em relação ao botão Play.
  3. Clicar na pergunta abre o pop-up com todos os textos exatamente como na especificação.
  4. O pop-up fecha pelo botão, pela tecla Esc e pelo clique no fundo.
  5. O foco vai para o pop-up ao abrir e volta para a pergunta ao fechar (testar navegando com Tab).
  6. O fluxo Play → nome → Jogar funciona com e sem o pop-up aberto antes, e o formulário mantém o estado em que estava.
  7. No desktop o pop-up cabe sem rolagem; em 375px ele rola só por dentro.
  8. `#popup-fim` e `#popup-conferir` continuam funcionando como antes, inclusive o Esc do Conferir.
  9. Nenhum erro no console.
- Testar com a largura de 375px no DevTools e numa altura de notebook (ex.: 1366×768).
- Depois do push, abrir o link do GitHub Pages numa janela anônima.
