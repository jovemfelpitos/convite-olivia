# Convite de Aniversário da Olívia

Landing page interativa, responsiva e mobile first para confirmação de presença no aniversário da Olívia.

## Arquivos principais

- `index.html`: estrutura da página.
- `style.css`: visual Art Déco, animações e responsividade.
- `script.js`: configurações do convite e envio para Google Sheets.
- `assets/convite.png`: imagem principal do convite.
- `assets/foto1.jpg`, `assets/foto2.jpg`, `assets/foto3.jpg`: fotos da aniversariante.
- `google-apps-script.gs`: código para colar no Apps Script.

## Trocas rápidas

No arquivo `script.js`, altere:

```js
const GOOGLE_SCRIPT_URL = "COLE_AQUI_A_URL_DO_APPS_SCRIPT";

const SITE_CONFIG = {
  nomeAniversariante: "Olívia",
  data: "Data a confirmar",
  local: "Local a confirmar",
  imagemConvite: "assets/convite.png",
  fotos: ["assets/foto1.jpg", "assets/foto2.jpg", "assets/foto3.jpg"],
};
```

Para trocar as imagens, substitua os arquivos dentro da pasta `assets` mantendo os mesmos nomes, ou atualize os caminhos em `SITE_CONFIG`.

## Google Sheets

1. Crie uma planilha no Google Sheets.
2. Na primeira linha, crie as colunas:

```text
Nome | Data de confirmação
```

3. Acesse `Extensões > Apps Script`.
4. Apague o conteúdo inicial e cole este código:

```js
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.nome,
    new Date()
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

5. Clique em `Implantar > Nova implantação`.
6. Escolha o tipo `App da Web`.
7. Em `Executar como`, selecione você.
8. Em `Quem pode acessar`, selecione `Qualquer pessoa`.
9. Clique em `Implantar` e autorize as permissões.
10. Copie a URL do Web App.
11. Cole a URL no topo do `script.js`:

```js
const GOOGLE_SCRIPT_URL = "SUA_URL_AQUI";
```

## Subir no GitHub Pages

1. Crie um repositório no GitHub.
2. Envie estes arquivos para o repositório.
3. No GitHub, acesse `Settings > Pages`.
4. Em `Build and deployment`, selecione a branch principal e a pasta raiz.
5. Salve e aguarde a URL publicada.

O mesmo projeto também pode ser enviado para Netlify ou Vercel como site estático.
