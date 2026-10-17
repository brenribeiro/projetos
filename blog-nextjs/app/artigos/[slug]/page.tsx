import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { artigos, buscarArtigo, formatarData } from "@/data/artigos";

type PaginaArtigoProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-static";

export function generateStaticParams() {
  return artigos.map((artigo) => ({ slug: artigo.slug }));
}

export async function generateMetadata({
  params,
}: PaginaArtigoProps): Promise<Metadata> {
  const { slug } = await params;
  const artigo = buscarArtigo(slug);

  if (!artigo) {
    return { title: "Artigo não encontrado" };
  }

  return {
    title: artigo.title,
    description: artigo.excerpt,
    openGraph: {
      title: artigo.title,
      description: artigo.excerpt,
      type: "article",
      publishedTime: new Date(`${artigo.publishedAt}T00:00:00Z`).toISOString(),
      authors: [artigo.author],
    },
  };
}

export default async function PaginaArtigo({ params }: PaginaArtigoProps) {
  const { slug } = await params;
  const artigo = buscarArtigo(slug);

  if (!artigo) {
    notFound();
  }

  return (
    <main className="article-page">
      <div className="article-page-inner">
        <Link className="back-link" href="/">
          <span aria-hidden="true">←</span> Voltar para os artigos
        </Link>
        <article>
          <header className="article-header">
            <p className="article-category">{artigo.category}</p>
            <h1>{artigo.title}</h1>
            <p className="article-deck">{artigo.excerpt}</p>
            <div className="article-byline">
              <span className="author-mark" aria-hidden="true">
                {artigo.author.charAt(0)}
              </span>
              <div>
                <span className="byline-author">{artigo.author}</span>
                <time dateTime={artigo.publishedAt}>
                  {formatarData(artigo.publishedAt)}
                </time>
              </div>
            </div>
          </header>
          <div className="article-cover" aria-hidden="true">
            <span className="cover-sun" />
            <span className="cover-horizon" />
            <span className="cover-caption">PAUSA PARA REFLETIR</span>
          </div>
          <div className="article-content">
            {artigo.content.map((paragrafo) => (
              <p key={paragrafo}>{paragrafo}</p>
            ))}
            <div className="article-endmark" aria-hidden="true">
              ✳
            </div>
          </div>
        </article>
        <div className="more-reading">
          <span>FIM DESTA LEITURA</span>
          <Link className="text-link" href="/">
            Voltar à estante <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
