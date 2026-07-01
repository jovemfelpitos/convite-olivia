# Convite Olivia

Landing page interativa em Next.js para o aniversário de 19 anos da Olivia.

## Rodar localmente

```bash
npm install
npm run dev
```

## RSVP com Google Sheets

Planilha criada para receber as confirmacoes:

[Confirmacoes - Olivia Birthday](https://docs.google.com/spreadsheets/d/1FBQwE8UUHYtY2ogbz3bSOpqaHHQAKSfiXa813jebu30/edit)

Para ligar o formulario do site na planilha:

1. Abra [script.google.com](https://script.google.com/) e crie um novo projeto.
2. Cole o conteudo de `google-apps-script/rsvp-web-app.gs`.
3. Clique em **Deploy > New deployment > Web app**.
4. Configure **Execute as: Me** e **Who has access: Anyone**.
5. Copie a URL final terminada em `/exec`.
6. No Netlify, adicione as variaveis:

```bash
NEXT_PUBLIC_RSVP_ENDPOINT=https://script.google.com/macros/s/SEU_ID/exec
NEXT_PUBLIC_RSVP_REQUEST_MODE=no-cors
```

Depois de salvar as variaveis, rode um novo deploy no Netlify.

O payload enviado é:

```json
{
  "name": "Nome do convidado",
  "event": "Olivia's Birthday",
  "confirmedAt": "2026-06-30T00:00:00.000Z",
  "source": "site",
  "userAgent": "Mozilla/5.0..."
}
```

Para adicionar música, coloque o arquivo em `public/audio/magia.mp3`.
