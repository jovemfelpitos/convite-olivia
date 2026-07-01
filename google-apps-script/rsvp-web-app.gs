const SPREADSHEET_ID = "1FBQwE8UUHYtY2ogbz3bSOpqaHHQAKSfiXa813jebu30";
const SHEET_NAME = "Confirmacoes";
const EVENT_NAME = "Olivia's Birthday";

function doPost(event) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);

  try {
    const payload = parsePayload_(event);
    const name = String(payload.name || "").trim();

    if (!name) {
      return json_({ ok: false, error: "Nome vazio." });
    }

    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
      throw new Error("Aba nao encontrada: " + SHEET_NAME);
    }

    const receivedAt = new Date();
    const confirmedAt = payload.confirmedAt ? new Date(payload.confirmedAt) : receivedAt;

    sheet.appendRow([
      receivedAt,
      name,
      payload.event || EVENT_NAME,
      confirmedAt,
      payload.source || "site",
      payload.userAgent || "",
      payload.notes || ""
    ]);

    return json_({ ok: true });
  } catch (error) {
    return json_({
      ok: false,
      error: error && error.message ? error.message : String(error)
    });
  } finally {
    lock.releaseLock();
  }
}

function doGet() {
  return json_({
    ok: true,
    event: EVENT_NAME,
    sheet: SHEET_NAME
  });
}

function parsePayload_(event) {
  const raw = event && event.postData && event.postData.contents
    ? event.postData.contents
    : "{}";

  try {
    return JSON.parse(raw);
  } catch (error) {
    return event && event.parameter ? event.parameter : {};
  }
}

function json_(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
