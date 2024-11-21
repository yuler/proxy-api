# Telegram Bot API

```bash
TELEGRAM_API_HOST=https://api.telegram.org
TELEGRAM_BOT_TOKEN=<token>
TELEGRAM_API_HOST_PROXY=https://proxy-telegram.deno.dev
```

## get me

```bash
curl -X GET "$TELEGRAM_API_HOST/bot$TELEGRAM_BOT_TOKEN/getMe"
```

## get updates

Send a message with `/start @your_bot_username` to get the chat id.

```bash
curl -X GET "$TELEGRAM_API_HOST/bot$TELEGRAM_BOT_TOKEN/getUpdates"
```

## send message

```bash
curl -X POST "$TELEGRAM_API_HOST/bot$TELEGRAM_BOT_TOKEN/sendMessage" \
  -H "Content-Type: application/json" \
  -d '{"chat_id": "-1002423430980", "message_thread_id": 2, "text": "this is message from curl"}'
```

## proxy

```bash
curl -X POST "$TELEGRAM_API_HOST_PROXY/bot$TELEGRAM_BOT_TOKEN/sendMessage" \
  -H "Content-Type: application/json" \
  -d '{"chat_id": "-1002423430980", "message_thread_id": 2, "text": "this is message from curl"}'
```
