# AGENTS.md — Viagem Computacional

Instruções para agentes de código que trabalham neste projeto.

## Fonte da verdade

- Os requisitos do jogo estão em `especificacao.md`. Leia esse arquivo antes de qualquer tarefa.
- Se este arquivo e a especificação divergirem, siga a especificação.
- Não altere `especificacao.md`. Se encontrar algo ambíguo, incompleto ou contraditório, pare e pergunte antes de implementar.

## Visão geral

Jogo da memória web, solo e contra o relógio, para aprender 16 termos de arquitetura computacional por analogias com viagens (método loci). Tudo roda no navegador, sem backend, publicado no GitHub Pages.

## Stack

- HTML, CSS e JavaScript puros (sem framework, sem bibliotecas de JS e sem etapa de build).
- Ícones: Font Awesome via CDN.
- Fontes: no máximo 3, estilo 16-bit, carregadas via CDN (ex.: Google Fonts).
- Persistência: apenas `localStorage` (recorde e ranking).

## Estrutura de pastas

```
/
├── index.html        # obrigatório na raiz
├── style.css
├── script.js
├── README.md
├── especificacao.md
├── AGENTS.md
└── assets/
    ├── logo/         # logo do jogo
    ├── cards/        # imagens das 16 analogias
    ├── emojis/       # emoji de fogo (acerto) e emoji chorando (erro/tempo esgotado)
    └── backgrounds/  # 3 backgrounds 16-bit
```

- Mantenha todo o CSS em `style.css` e todo o JavaScript em `script.js`.
- No início de `script.js`, deixe os dados dos 16 termos (termo, analogia, porquê, pista, imagem) e as constantes do jogo (pontos por acerto, tempo por questão, chances, total de questões).

## Como rodar

Abra `index.html` no navegador ou use uma extensão como Live Server. Não há dependências para instalar.

## Convenções de código

- Toda a interface em português (PT-BR). Variáveis e comentários também em português.
- Os textos dos cards, das pistas e das mensagens vêm da especificação. Não reescreva esses textos.
- Logo, emojis e imagens dos cards devem estar em tags `<img>` com caminho para `assets/`, para que possam ser trocados.
- A paleta de cores fica em variáveis CSS no `:root` de `style.css`, com os nomes da especificação (ex.: `--morning-sky: #A9D5F2`).
- Chaves do `localStorage` com prefixo `viagemComputacional_`.
- Use animações CSS (transições e keyframes) para zoom out, fade out e feedback de clique.

## Compatibilidade com GitHub Pages

- Use apenas caminhos relativos (ex.: `assets/cards/piloto.png`), nunca caminhos que começam com `/` nem caminhos do computador local.
- O GitHub Pages diferencia maiúsculas de minúsculas: o nome do arquivo no código deve ser idêntico ao nome real. Use nomes em minúsculas, sem espaços e sem acentos.

## Git e commits

- Repositório público no GitHub. Faça commits pequenos, um por funcionalidade ou correção. Nunca um único commit com tudo pronto.
- O projeto precisa ter no mínimo 6 commits, feitos em pelo menos 2 dias diferentes. Não reescreva o histórico (sem `rebase`, `squash` ou `push --force`).
- Mensagens no padrão `tipo: descrição curta`, em português, com o verbo no presente. Tipos permitidos:
  - `feat`: nova funcionalidade
  - `fix`: correção
  - `style`: visual
  - `docs`: documentação
- Exemplos:
  - `feat: adiciona tabuleiro 4x4 com os 16 termos`
  - `feat: implementa timer de 15 segundos`
  - `fix: corrige pontuação ao esgotar as chances`
  - `style: ajusta cores dos cards certos e errados`
  - `docs: cria README com regras do jogo`

## README.md

O `README.md` deve conter:

1. Nome do jogo.
2. Como jogar.
3. A lista dos 16 termos com as pistas.
4. O link do site publicado no GitHub Pages.

## Dados pessoais

O repositório é público. Nunca coloque RA, e-mail, telefone ou outros dados pessoais em nenhum arquivo, comentário ou mensagem de commit.

## Restrições

- Não gere imagens em SVG. Se o background precisar de SVG, avise e peça permissão antes.
- Não adicione sons, música, login, multiplayer, backend ou seletor de dificuldade.
- Não adicione bibliotecas além do Font Awesome e das fontes sem perguntar.

## Verificação

Antes de considerar uma tarefa concluída, confira os critérios de aceitação da seção 7 da especificação, testando no navegador:

1. Play, nome e botão "Jogar" iniciam a partida.
2. Acerto soma 10 pontos, avança a questão e reinicia o timer em 15s.
3. Há 3 chances por questão.
4. Pontos acumulam e aparecem no placar final.
5. Card correto some com zoom out.
6. O jogo termina conforme a seção 5.
7. Placar, recorde e ranking aparecem e persistem após recarregar a página.
8. "Reiniciar" inicia uma nova partida.

Teste também numa largura de celular (ex.: 375px), pois a aplicação deve ser responsiva. Depois de publicar, teste o link do GitHub Pages numa janela anônima.
