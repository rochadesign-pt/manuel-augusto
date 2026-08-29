import { NextResponse } from "next/server";

interface ContactPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  consent?: boolean;
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

/** Escape user input before interpolating into the notification email HTML. */
function esc(value: string | undefined) {
  return (value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Pedido inválido." }, { status: 400 });
  }

  const { firstName, email, message, consent } = data;

  if (!firstName?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Preencha os campos obrigatórios." },
      { status: 422 },
    );
  }
  if (!isEmail(email)) {
    return NextResponse.json({ error: "E-mail inválido." }, { status: 422 });
  }
  if (!consent) {
    return NextResponse.json(
      { error: "É necessário aceitar os termos." },
      { status: 422 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  // When email is configured, deliver via Resend. Otherwise accept gracefully
  // so the form works end-to-end in every environment.
  if (apiKey && to && from) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to,
          reply_to: email,
          subject: `Novo contacto — ${(data.subject || "Website").slice(0, 120)}`,
          html: `
            <h2>Novo pedido de contacto</h2>
            <p><strong>Nome:</strong> ${esc(firstName)} ${esc(data.lastName)}</p>
            <p><strong>E-mail:</strong> ${esc(email)}</p>
            <p><strong>Telemóvel:</strong> ${esc(data.phone) || "—"}</p>
            <p><strong>Assunto:</strong> ${esc(data.subject) || "—"}</p>
            <p><strong>Mensagem:</strong></p>
            <p>${esc(message).replace(/\n/g, "<br/>")}</p>
          `,
        }),
      });
      if (!res.ok) throw new Error(`Resend ${res.status}`);
    } catch {
      return NextResponse.json(
        { error: "Não foi possível enviar. Tente por telefone." },
        { status: 502 },
      );
    }
  } else {
    console.info("[contact] message received (email not configured):", {
      firstName,
      email,
      subject: data.subject,
    });
  }

  return NextResponse.json({ ok: true });
}
