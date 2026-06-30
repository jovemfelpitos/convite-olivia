# Convite Olivia

Landing page interativa em Next.js para o aniversário de 19 anos da Olivia.

## Rodar localmente

```bash
npm install
npm run dev
```

## RSVP com Google Sheets

Configure o Apps Script publicado como Web App em `.env.local`:

```bash
NEXT_PUBLIC_RSVP_ENDPOINT=https://script.google.com/macros/s/SEU_ID/exec
NEXT_PUBLIC_RSVP_REQUEST_MODE=no-cors
```

O payload enviado é:

```json
{
  "name": "Nome do convidado",
  "event": "Olivia's Birthday",
  "confirmedAt": "2026-06-30T00:00:00.000Z"
}
```

Para adicionar música, coloque o arquivo em `public/audio/magia.mp3`.
