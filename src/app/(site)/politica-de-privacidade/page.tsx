import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Política de Privacidade">
      <p>
        A Manuel Augusto & Filhos, Lda. respeita a sua privacidade e está
        empenhada em proteger os dados pessoais que nos confia. Esta página
        descreve, de forma resumida, como tratamos essa informação.
      </p>
      <h2>Dados que recolhemos</h2>
      <p>
        Recolhemos apenas os dados necessários para responder a pedidos de
        contacto, orçamentos e assistência — como nome, telefone e email.
      </p>
      <h2>Como usamos os dados</h2>
      <p>
        Os dados são utilizados exclusivamente para dar seguimento ao seu pedido
        e nunca são vendidos ou cedidos a terceiros para fins comerciais.
      </p>
      <h2>Os seus direitos</h2>
      <p>
        Pode solicitar o acesso, correção ou eliminação dos seus dados a qualquer
        momento, através dos nossos contactos.
      </p>
      <p className="text-sm text-muted">
        Este é um texto de exemplo. Substitua-o pela sua política oficial.
      </p>
    </LegalPage>
  );
}
