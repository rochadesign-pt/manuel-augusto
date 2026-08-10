import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Termos de Serviço",
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <LegalPage title="Termos de Serviço">
      <p>
        Ao utilizar este website e os serviços da Manuel Augusto & Filhos, Lda.,
        aceita os termos descritos nesta página.
      </p>
      <h2>Serviços</h2>
      <p>
        Prestamos serviços de venda, aconselhamento, distribuição de material
        elétrico e assistência técnica de eletrodomésticos, nos termos acordados
        com cada cliente.
      </p>
      <h2>Garantias</h2>
      <p>
        As condições de garantia dos equipamentos são apresentadas no momento da
        compra e cumprem a legislação em vigor.
      </p>
      <p className="text-sm text-muted">
        Este é um texto de exemplo. Substitua-o pelos seus termos oficiais.
      </p>
    </LegalPage>
  );
}
