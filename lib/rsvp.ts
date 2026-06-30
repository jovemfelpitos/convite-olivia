type RsvpPayload = {
  name: string;
};

const endpoint = process.env.NEXT_PUBLIC_RSVP_ENDPOINT;
const requestMode = process.env.NEXT_PUBLIC_RSVP_REQUEST_MODE === "cors" ? "cors" : "no-cors";

export async function sendRsvp(payload: RsvpPayload) {
  const body = JSON.stringify({
    ...payload,
    event: "Olivia's Birthday",
    confirmedAt: new Date().toISOString()
  });

  if (!endpoint) {
    await new Promise((resolve) => window.setTimeout(resolve, 700));
    return { ok: true, mode: "local" as const };
  }

  const response = await fetch(endpoint, {
    method: "POST",
    mode: requestMode,
    headers: {
      "Content-Type": "text/plain;charset=utf-8"
    },
    body
  });

  if (requestMode === "cors" && !response.ok) {
    throw new Error("RSVP request failed");
  }

  return { ok: true, mode: requestMode };
}
