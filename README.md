# Manuel Augusto & Filhos, Lda. — Website

Site institucional da **Manuel Augusto & Filhos, Lda.** (eletrodomésticos e
material elétrico, Ílhavo — desde 1960), construído em **Next.js** com um CMS
**Sanity** para o cliente editar conteúdos sem tocar em código.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (design tokens em `src/app/globals.css`)
- **Sanity** (CMS headless, Studio embutido em `/studio`)
- **Framer Motion · GSAP · Lenis** (animações e scroll suave)

## Arranque local

```bash
npm install
cp .env.example .env.local   # opcional (ver secção Sanity)
npm run dev                  # http://localhost:3000
```

O site **funciona imediatamente** com conteúdo de exemplo (`src/lib/content.ts`),
mesmo sem Sanity configurado.

## Páginas

| Rota | Página |
|------|--------|
| `/` | Início |
| `/sobre` | Sobre nós / História |
| `/servicos` | Serviços (+ voucher E-Lar) |
| `/eletrodomesticos` | Eletrodomésticos (+ catálogos) |
| `/material-eletrico` | Distribuição de Material Elétrico |
| `/apoio-tecnico` | Assistência Técnica |
| `/contactos` | Contactos (formulário + localização) |
| `/noticias` · `/noticias/[slug]` | Notícias (blog) |
| `/studio` | Painel de edição Sanity |

## Formulário de contacto

O formulário em `/contactos` funciona logo (valida e confirma o envio). Para
**receber os emails**, defina no Vercel:

```
RESEND_API_KEY=...            # https://resend.com
CONTACT_TO_EMAIL=geral@...    # destinatário
CONTACT_FROM_EMAIL=site@...   # remetente de um domínio verificado no Resend
```

Sem estas variáveis, o envio é aceite na mesma (registado no log) — nada quebra.

## CMS — o que o cliente pode editar

No `/studio`, sem código:

- **Definições do site** — contactos, morada, horário, NIF, redes sociais
- **Serviços** — os 4 cartões da homepage
- **Marcas** — logótipos da faixa de confiança
- **Catálogos** — cartões coloridos (Bosch, Siemens, Balay…)
- **Números** — estatísticas (60+, 95%, 1000+)
- **Testemunhos** — avaliações de clientes
- **Perguntas frequentes** — acordeão "Dúvidas"
- **Notícias** — artigos do blog

### Ligar o Sanity (uma vez)

1. Criar projeto grátis em <https://www.sanity.io/manage>
2. Preencher em `.env.local` (e nas variáveis de ambiente do Vercel):

   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxxx
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

3. Em `sanity.io/manage → API → CORS origins`, adicionar o domínio do site
   (e `http://localhost:3000`).
4. Abrir `/studio`, fazer login e publicar conteúdos — passam a substituir
   automaticamente o conteúdo de exemplo.

> Enquanto as variáveis estiverem vazias, o site usa o conteúdo de exemplo e
> nunca faz pedidos de rede — nada quebra.

## Imagens

Todos os espaços de imagem usam o componente `Media`, que mostra um placeholder
de marca elegante enquanto não houver fotografia. Ao adicionar imagens nos
respetivos campos do Studio (ou nos schemas com `image`), aparecem
automaticamente.

## Deploy (Vercel)

O projeto está pronto para Vercel. Definir as variáveis de ambiente do Sanity
(opcional) e fazer deploy — `npm run build` gera as páginas estáticas.
