# proxy api

This project is for proxy some api that is not available in China.

## Features

- [openai api](https://platform.openai.com/docs/api-reference/introduction).
- [telegram bot api](https://core.telegram.org/bots/api).

## Deployment

### Deno

- [Deno](https://dash.deno.com/)

```bash
deployctl deploy deno/proxy-openai.ts --project=deno-proxy-openai
deployctl deploy deno/proxy-telegram.ts --project=proxy-telegram
```

<!-- 
- [Vercel](https://vercel.com)
- Self host
-->
