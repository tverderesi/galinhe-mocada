# galinhe-mocada

Uma transmissão estática de mensagens codificadas em Base64.

## Editando as mensagens

Cada item de `citations.json` é uma string Base64. Para codificar uma nova mensagem no navegador:

```js
btoa(unescape(encodeURIComponent('Sua mensagem aqui')))
```

O site decodifica as mensagens no navegador e as apresenta em movimento. Não há dependências nem etapa de build.

## Deploy no GitHub Pages

O repositório inclui o workflow `.github/workflows/deploy-pages.yml`, que publica o conteúdo estático automaticamente no GitHub Pages quando há push na branch `main`.

Para ativar:

1. Vá em **Settings → Pages** no repositório.
2. Em **Build and deployment**, selecione **Source: GitHub Actions**.
3. Faça push na `main` (ou execute o workflow manualmente em **Actions**).
