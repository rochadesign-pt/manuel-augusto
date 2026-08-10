import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Definições de Cookies",
  robots: { index: false },
};

export default function CookiesPage() {
  return (
    <LegalPage title="Definições de Cookies">
      <p>
        Este website utiliza apenas cookies essenciais ao seu funcionamento. Não
        são utilizados cookies de rastreamento ou publicidade sem o seu
        consentimento.
      </p>
      <h2>Cookies essenciais</h2>
      <p>
        Necessários para a navegação e para garantir o funcionamento correto das
        páginas.
      </p>
      <h2>Gestão de preferências</h2>
      <p>
        Pode gerir ou eliminar cookies nas definições do seu navegador a qualquer
        momento.
      </p>
      <p className="text-sm text-muted">
        Este é um texto de exemplo. Substitua-o pela sua política de cookies.
      </p>
    </LegalPage>
  );
}
