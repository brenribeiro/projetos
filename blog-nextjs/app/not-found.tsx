import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">ESTA PÁGINA NÃO ESTÁ NA ESTANTE</p>
      <h1>Artigo não encontrado.</h1>
      <p>Talvez ele tenha seguido outro caminho. Volte e escolha uma nova leitura.</p>
      <Link className="text-link" href="/">
        Ir para a página inicial <span aria-hidden="true">↗</span>
      </Link>
    </main>
  );
}
