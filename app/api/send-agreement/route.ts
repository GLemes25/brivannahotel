import { brivannaData } from "@/app/data/brivanna";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

type AgreementPayload = {
  company: string;
  cnpj: string;
  corporateEmail: string;
  monthlyStays: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (request: NextRequest) => {
  const body: AgreementPayload = await request.json();

  const { company, cnpj, corporateEmail, monthlyStays } = body;

  const html = `
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Solicitação de Convênio Empresarial</title>
        <style>
          body { font-family: Georgia, serif; background-color: #f9f9f9; margin: 0; padding: 0; }
          .container { max-width: 560px; margin: 40px auto; background: #ffffff; border: 1px solid #e5e5e5; border-radius: 8px; overflow: hidden; }
          .header { background-color: #1a1a1a; padding: 28px 32px; }
          .header h1 { color: #f5f0e8; margin: 0; font-size: 22px; letter-spacing: 0.5px; }
          .header p { color: #a0998c; margin: 4px 0 0; font-size: 13px; }
          .body { padding: 32px; }
          .field { margin-bottom: 20px; }
          .field label { display: block; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #888; margin-bottom: 4px; }
          .field span { display: block; font-size: 15px; color: #1a1a1a; font-weight: 500; }
          .divider { border: none; border-top: 1px solid #e5e5e5; margin: 24px 0; }
          .footer { padding: 16px 32px; background-color: #f5f5f5; font-size: 12px; color: #999; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>${brivannaData.name}</h1>
            <p>Nova Solicitação de Convênio Empresarial</p>
          </div>
          <div class="body">
            <div class="field">
              <label>Empresa</label>
              <span>${company}</span>
            </div>
            <hr class="divider" />
            <div class="field">
              <label>CNPJ</label>
              <span>${cnpj}</span>
            </div>
            <hr class="divider" />
            <div class="field">
              <label>E-mail do Solicitante</label>
              <span>${corporateEmail}</span>
            </div>
            <hr class="divider" />
            <div class="field">
              <label>Volume de Estadias / mês</label>
              <span>${monthlyStays}</span>
            </div>
          </div>
          <div class="footer">
            Esta mensagem foi gerada automaticamente pelo site ${brivannaData.websiteUrl}
          </div>
        </div>
      </body>
    </html>
  `;

  const { error } = await resend.emails.send({
    from: "Brivanna Hotel <onboarding@resend.dev>",
    to: brivannaData.email,
    subject: `Novo Convênio Empresarial — ${company}`,
    html,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true }, { status: 200 });
};
