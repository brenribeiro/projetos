import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Pausa — ideias para ler com calma",
    template: "%s | Pausa",
  },
  description:
    "Um espaço para boas ideias, aprendizados e histórias do cotidiano. Leia com calma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <header className="site-header">
          <div className="header-inner">
            <Link className="brand" href="/" aria-label="Pausa, página inicial">
              pausa<span>.</span>
            </Link>
            <span className="header-note">ideias para ler com calma</span>
          </div>
        </header>
        {children}
        <footer className="site-footer">
          <div className="footer-inner">
            <Link className="footer-brand" href="/">
              pausa.
            </Link>
            <p>Um intervalo para boas ideias.</p>
            <span>Feito para ler sem pressa.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
