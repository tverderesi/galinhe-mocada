# galinhe-mocada

Uma transmissão estática de mensagens codificadas em Base64.

## Editando as mensagens

Cada item de `citations.json` é uma string Base64. Para codificar uma nova mensagem no navegador:

```js
btoa(unescape(encodeURIComponent('Sua mensagem aqui')))
```

O site decodifica as mensagens no navegador e as apresenta em movimento. Não há dependências nem etapa de build.
