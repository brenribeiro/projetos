# Pausa — blog Next.js

Blog em português desenvolvido com App Router, artigos armazenados localmente e páginas de artigo pré-renderizadas.

## Requisitos

- Node.js 20.9 ou superior
- npm

## Executar localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Estratégia de renderização e SEO

- `app/page.tsx` e `app/artigos/[slug]/page.tsx` são Server Components; não há `useEffect` para carregar os artigos.
- `data/artigos.ts` mantém os artigos e cria os slugs com `slugify`.
- A página dinâmica exporta `generateStaticParams` e `dynamic = "force-static"`, para gerar uma página estática por artigo durante o build. Slugs desconhecidos retornam 404.
- `generateMetadata` define título, descrição e metadados Open Graph a partir de cada artigo.
- Depois de adicionar um artigo, inclua seus dados em `artigosBase`; a rota estática e seus metadados serão gerados automaticamente no próximo build.

## Build de produção

```bash
npm run build
npm run start
```

## Publicar no Vercel

1. Envie este projeto para um repositório GitHub público.
2. Importe o repositório em [vercel.com/new](https://vercel.com/new).
3. Mantenha o framework Next.js e o comando de build padrão (`npm run build`) e publique.
4. Após o deploy, verifique a página inicial e algumas URLs em `/artigos/<slug>`.

O deploy e a criação/publicação do repositório dependem de acesso às contas GitHub e Vercel do responsável pelo projeto.
