import Link from "next/link";
import { artigos, formatarData } from "@/data/artigos";

export const dynamic = "force-static";

export default function HomePage() {
  const [destaque, ...demaisArtigos] = artigos;

  return (
    <main>
      <section className="hero">
        <div className="hero-inner">
          <p className="eyebrow">UM BLOG PARA DESACELERAR</p>
          <h1>
            Boas ideias
            <br />
            pedem <em>tempo.</em>
          </h1>
          <p className="hero-description">
            Leituras sobre criatividade, aprendizado e os pequenos detalhes do
            dia a dia. Sirva-se de um café e fique à vontade.
          </p>
          <a className="text-link" href="#artigos">
            Explore os artigos <span aria-hidden="true">↓</span>
          </a>
          <div className="hero-stamp" aria-hidden="true">
            <span>LEIA</span>
            <span>COM</span>
            <span>CALMA</span>
          </div>
        </div>
      </section>

      <section className="articles-section" id="artigos">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A ESTANTE</p>
            <h2>Histórias recentes</h2>
          </div>
          <span className="article-count">
            {String(artigos.length).padStart(2, "0")} ARTIGOS
          </span>
        </div>

        {destaque && (
          <article className="featured-card">
            <div className="featured-art" aria-hidden="true">
              <span className="art-orbit orbit-one" />
              <span className="art-orbit orbit-two" />
              <span className="art-sun" />
              <span className="art-label">uma pausa<br />para pensar</span>
            </div>
            <div className="featured-copy">
              <p className="article-category">{destaque.category}</p>
              <h3>
                <Link href={`/artigos/${destaque.slug}`}>{destaque.title}</Link>
              </h3>
              <p className="article-excerpt">{destaque.excerpt}</p>
              <div className="article-meta">
                <span>{destaque.author}</span>
                <span aria-hidden="true">·</span>
                <time dateTime={destaque.publishedAt}>
                  {formatarData(destaque.publishedAt)}
                </time>
              </div>
              <Link className="text-link" href={`/artigos/${destaque.slug}`}>
                Leia o artigo <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        )}

        <div className="article-grid">
          {demaisArtigos.map((artigo, index) => (
            <article className="article-card" key={artigo.slug}>
              <div className={`card-art card-art-${index + 1}`} aria-hidden="true">
                <span>{String(index + 2).padStart(2, "0")}</span>
              </div>
              <div className="card-copy">
                <p className="article-category">{artigo.category}</p>
                <h3>
                  <Link href={`/artigos/${artigo.slug}`}>{artigo.title}</Link>
                </h3>
                <p className="article-excerpt">{artigo.excerpt}</p>
                <div className="article-meta">
                  <span>{artigo.author}</span>
                  <span aria-hidden="true">·</span>
                  <time dateTime={artigo.publishedAt}>
                    {formatarData(artigo.publishedAt)}
                  </time>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
