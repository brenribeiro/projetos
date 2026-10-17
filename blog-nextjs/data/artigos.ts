import slugify from "slugify";

export type Artigo = {
  title: string;
  author: string;
  publishedAt: string;
  category: string;
  excerpt: string;
  content: string[];
};

const artigosBase: Artigo[] = [
  {
    title: "O poder de começar pequeno",
    author: "Marina Costa",
    publishedAt: "2026-09-18",
    category: "Criatividade",
    excerpt:
      "Grandes mudanças raramente começam com grandes gestos. Descubra como passos pequenos e consistentes podem transformar uma ideia em realidade.",
    content: [
      "Existe uma ideia persistente de que projetos importantes precisam começar de maneira grandiosa. Na prática, quase tudo o que vale a pena nasce de um primeiro passo simples: uma página escrita, uma conversa iniciada ou quinze minutos de atenção verdadeira.",
      "Começar pequeno reduz a distância entre intenção e ação. Em vez de esperar pelas condições perfeitas, você cria algo concreto que pode observar, testar e melhorar. Esse movimento também ensina mais do que semanas imaginando todos os cenários possíveis.",
      "A consistência transforma esses passos em progresso. Escolha uma ação que caiba na sua rotina, repita-a e deixe que os resultados orientem o próximo passo. O começo não precisa impressionar ninguém — só precisa acontecer.",
    ],
  },
  {
    title: "Uma rotina com espaço para respirar",
    author: "Rafael Nunes",
    publishedAt: "2026-09-12",
    category: "Bem-estar",
    excerpt:
      "Uma rotina boa não é aquela que ocupa cada minuto. É aquela que deixa espaço para o que importa, inclusive para uma pausa.",
    content: [
      "Planejar o dia pode trazer clareza, mas preencher cada espaço da agenda costuma produzir o efeito contrário. Uma rotina sustentável considera não apenas o que precisa ser feito, mas também o tempo e a energia necessários para fazer bem.",
      "Experimente escolher três prioridades para o dia e reservar intervalos entre elas. Esses espaços absorvem imprevistos, permitem uma pausa e ajudam a encerrar uma tarefa antes de saltar para a próxima.",
      "Rotinas são ferramentas, não provas de produtividade. Ajuste-as conforme a semana muda e preserve o que funciona para você. Às vezes, a melhor decisão é deixar um pouco de espaço em branco.",
    ],
  },
  {
    title: "Aprender também é fazer perguntas",
    author: "Lia Martins",
    publishedAt: "2026-09-05",
    category: "Aprendizado",
    excerpt:
      "A curiosidade abre caminhos que a pressa por respostas prontas pode esconder. Veja como perguntas melhores ajudam a aprender.",
    content: [
      "Quando estamos aprendendo algo novo, é tentador procurar logo a resposta certa. Mas uma boa pergunta pode revelar o que ainda não entendemos e tornar o próximo passo muito mais claro.",
      "Em vez de perguntar apenas “como faço isso?”, experimente investigar por que uma solução funciona, quais alternativas existem e como reconhecer um erro. Essas perguntas conectam procedimentos a conceitos, facilitando o uso do conhecimento em situações diferentes.",
      "Anote as dúvidas que surgem durante a prática. Algumas serão respondidas com experimentos simples; outras vão indicar o que estudar em seguida. Aprender não é eliminar toda incerteza, e sim desenvolver maneiras melhores de explorá-la.",
    ],
  },
  {
    title: "A cidade vista a pé",
    author: "João Pedro Alves",
    publishedAt: "2026-08-27",
    category: "Cotidiano",
    excerpt:
      "Caminhar sem pressa muda a escala da cidade e revela detalhes que passam despercebidos quando estamos sempre com o próximo destino em mente.",
    content: [
      "A pé, a cidade acontece em outra velocidade. Uma fachada antiga, a sombra de uma árvore ou a conversa na porta de uma padaria deixam de ser parte do cenário e viram pequenas descobertas.",
      "Não é preciso planejar uma grande expedição. Escolher uma rua diferente no caminho de volta já oferece outra perspectiva sobre lugares conhecidos. Com o tempo, esses desvios ajudam a criar uma relação mais próxima com o bairro.",
      "Caminhar também ensina a prestar atenção. Deixe o celular guardado por alguns minutos e observe o que muda de uma quadra para a outra. Às vezes, conhecer melhor um lugar começa apenas por estar nele.",
    ],
  },
];

export const artigos = artigosBase.map((artigo) => ({
  ...artigo,
  slug: slugify(artigo.title, { lower: true, strict: true }),
}));

export function buscarArtigo(slug: string) {
  return artigos.find((artigo) => artigo.slug === slug);
}

export function formatarData(data: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${data}T00:00:00Z`));
}
