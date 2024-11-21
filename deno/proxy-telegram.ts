const TELEGRAM_API_HOST = "https://api.telegram.org"

Deno.serve(async (request) => {
  const url = new URL(request.url)
  url.host = TELEGRAM_API_HOST

  const newRequest = new Request(url.toString(), {
    headers: request.headers,
    method: request.method,
    body: request.body,
    redirect: "follow",
  })
  return await fetch(newRequest)
})
