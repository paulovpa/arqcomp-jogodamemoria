# Feature: Card informativo "Palácio da memória"

## Contexto
O jogo **Viagem Computacional** usa a técnica do palácio da memória (método de loci): cada termo de arquitetura computacional é associado a uma cena de viagem. Hoje a tela inicial não explica isso ao jogador. Esta feature adiciona um card informativo na tela inicial e um pop-up com uma explicação curta da técnica e de como ela aparece no jogo.

Antes de implementar, leia `docs/AGENTS.md` e a especificação do projeto e siga os padrões já existentes de nomes (classes e IDs em português), estilo (paleta, fontes, visual 16-bit) e estrutura.

## Objetivo
Explicar a técnica ao jogador sem atrapalhar o fluxo principal (Play → nome → Jogar). A leitura deve ser opcional e rápida.

## Escopo
- **Inclui:** card na tela inicial, pop-up explicativo, lógica de abrir e fechar, estilos e atualização do README.
- **Não inclui:** mudanças na lógica do jogo, nas regras, no placar ou nas outras telas.

## Requisitos funcionais

### RF01 — Card informativo
- Fica dentro de `#tela-inicio`, logo **abaixo** da `.caixa-inicio`.
- Elemento: `div.card-palacio`.
- Contém: frase em destaque, descrição curta e um botão-pergunta (`button#botao-palacio`).
- Aparece somente na tela inicial.

### RF02 — Abrir o pop-up
- Clicar em `#botao-palacio` abre `#popup-palacio`.
- Ao abrir, o foco vai para o pop-up (título ou botão de fechar).

### RF03 — Fechar o pop-up
- Fecha por três caminhos: o botão "Entendi, bora viajar!", a tecla **Esc** e um clique no fundo escuro (fora da `.popup`).
- Ao fechar, o foco volta para `#botao-palacio`.

### RF04 — Independência do fluxo
- Abrir ou fechar o pop-up não altera o estado da tela inicial (o formulário de nome continua como estava, aberto ou fechado).

## Requisitos de interface

### Card
- Layout **horizontal**: ícone à esquerda (ex.: Font Awesome `fa-landmark` ou equivalente já disponível) e textos à direita.
- Mesma largura da `.caixa-inicio`, porém mais baixo e visualmente **secundário**: não pode competir com o botão Play.
- Mesma linguagem visual do jogo (bordas e sombras em estilo pixel, paleta do `style.css`).
- Botão-pergunta estilizado como link ou botão secundário, com estado de hover e foco visível.
- **Mobile:** o card pode empilhar na vertical (ícone em cima, texto embaixo).

### Pop-up
- Reaproveitar exatamente o padrão de `#popup-fim` e `#popup-conferir`:
  `div.popup-fundo#popup-palacio > div.popup[role="dialog"][aria-modal="true"][aria-labelledby="titulo-palacio"]`
- Começa oculto, como os demais popups.
- Título em `h2#titulo-palacio`.
- Subtítulos dos blocos ("O que é?", "Por que funciona?", "Como aparece no jogo?") em destaque, menores que o título.
- Os três exemplos em lista (`ul`), um por linha, com o emoji no início.
- Botão de fechar `button#botao-fechar-palacio`, no mesmo estilo dos botões dos outros popups.
- No desktop, deve caber na tela sem rolagem. Em telas pequenas, o conteúdo rola **dentro** da `.popup`, nunca a página inteira.

## Textos (usar exatamente como abaixo)

### Card
- **Frase:** Durante a viagem você vai usar a técnica do palácio da memória.
- **Descrição:** Nessa técnica cada conceito de arquitetura computacional vira uma cena da sua viagem, e lembrar da cena na sua mente ajuda a lembrar do conceito.
- **Botão-pergunta:** Como funciona o palácio da memória?

### Pop-up
- **Título:** 🏛️ O palácio da memória

**O que é?**
É uma técnica de memorização muito antiga, também chamada de método de loci ("lugares", em latim). Você imagina um caminho que conhece e coloca em cada ponto dele uma imagem ligada ao que quer lembrar. Para recordar, basta "andar" de novo por esse caminho.

**Por que funciona?**
O cérebro guarda cenas e lugares muito mais fácil do que definições soltas. A imagem vira um gancho para o conceito.

**Como aparece no jogo?**
Aqui o caminho é uma viagem, e cada um dos 16 termos virou um personagem ou objeto dela:
- ✈️ **CPU** é o piloto do avião, que comanda e executa as instruções.
- 🎒 **RAM** é a mala de mão: rápida de acessar, mas guarda só o que está em uso.
- 🛄 **DMA** é a esteira de bagagem, que leva os dados sem ocupar o piloto.

A cada questão aparece uma pista. Imagine a cena e encontre o card que combina com ela.

- **Botão de fechar:** Entendi, bora viajar!

## Requisitos técnicos
- Apenas HTML, CSS e JS puros; nenhuma biblioteca nova.
- **index.html:** adicionar o card dentro de `#tela-inicio` e o pop-up junto dos outros popups.
- **style.css:** estilos de `.card-palacio` e ajustes do pop-up, reaproveitando as classes `.popup-fundo` e `.popup` já existentes.
- **script.js:** funções `abrirPopupPalacio()` e `fecharPopupPalacio()`, mostrando e escondendo o pop-up do mesmo jeito que os popups existentes. O listener de Esc só deve agir quando `#popup-palacio` estiver aberto.
- Não alterar a lógica do jogo nem o comportamento dos outros popups.

## Acessibilidade
- O botão-pergunta é um `<button>`, não um `<a>` ou `<div>`.
- Foco visível em todos os elementos interativos.
- O pop-up recebe o foco ao abrir e o devolve ao fechar.
- Contraste do texto do card legível sobre o fundo da tela inicial.

## Critérios de aceite
- [ ] O card aparece abaixo da caixa de início, só na tela inicial, em layout horizontal no desktop.
- [ ] O card é visualmente secundário em relação ao botão Play.
- [ ] Clicar na pergunta abre o pop-up com todos os textos exatamente como especificados.
- [ ] O pop-up fecha pelo botão, pela tecla Esc e pelo clique no fundo.
- [ ] O foco vai para o pop-up ao abrir e volta para a pergunta ao fechar.
- [ ] O fluxo Play → nome → Jogar continua funcionando normalmente, com ou sem o pop-up aberto antes.
- [ ] No desktop o pop-up cabe sem rolagem; no mobile, rola só por dentro.
- [ ] Os popups `#popup-fim` e `#popup-conferir` continuam funcionando como antes.
- [ ] Nenhum erro no console.

## Entrega
1. Implementar a feature seguindo esta especificação.
2. Atualizar o README (seção "Sobre o jogo") mencionando o card explicativo na tela inicial.
3. Ao final, listar os arquivos alterados e um resumo do que mudou em cada um.
