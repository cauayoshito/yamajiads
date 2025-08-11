# Yamaji Studio – Portfólio Premium

Este repositório contém um projeto Next.js configurado com TypeScript, Tailwind CSS, Framer Motion e Next SEO para construir um site institucional one‑page em estilo dark com acentos amarelo/dourado. A página replica o layout de referência fornecido de forma responsiva e acessível, com animações suaves e foco em performance.

## 🏗 Estrutura do Projeto

```
nextjs-marshall/
├── package.json          # dependências e scripts de npm
├── next.config.js        # configurações do Next.js (App Router)
├── tailwind.config.js    # tokens de design e cores personalizadas
├── postcss.config.js     # pipeline do Tailwind
├── tsconfig.json         # configuração do TypeScript
├── public/
│   └── images/
│       ├── hero_bg.png   # fundo abstrato do hero
│       ├── feature_app.png   # arte abstrata do app
│       ├── gallery{1,2,3}.png # imagens da galeria
│       └── og-default.png    # imagem padrão para Open Graph
├── src/
│   ├── app/
│   │   ├── (site)/page.tsx  # página principal com todas as seções
│   │   ├── layout.tsx      # layout global com fontes e SEO
│   │   └── globals.css     # estilos globais
│   ├── components/
│   │   ├── header.tsx               # cabeçalho fixo com blur
│   │   ├── lib/utils.ts             # helper para classes
│   │   ├── ui/
│   │   │   ├── container.tsx        # wrapper responsivo
│   │   │   ├── button.tsx           # botão com animação
│   │   │   ├── badge.tsx            # selos simples
│   │   │   └── section-title.tsx    # título de seção
│   │   └── sections/
│   │       ├── hero.tsx             # seção hero
│   │       ├── benefits.tsx         # seção benefícios
│   │       ├── highlight.tsx        # quote/destaque
│   │       ├── feature-app.tsx      # descrição de aplicativo
│   │       ├── gallery.tsx          # portfólio/galeria
│   │       ├── team.tsx             # equipe
│   │       ├── offers.tsx           # planos/ofertas
│   │       ├── cta-final.tsx        # chamada final
│   │       └── footer.tsx           # rodapé
│   ├── config/
│   │   └── seo.ts                   # configuração padrão do Next SEO
│   └── data/
│       ├── benefits.ts              # dados dos cards de benefícios
│       ├── gallery.ts               # dados da galeria
│       ├── team.ts                  # lista da equipe
│       └── offers.ts                # planos e ofertas
└── README.md
```

### 📦 Scripts Importantes

Use os seguintes comandos no diretório raiz do projeto:

| Script              | Descrição                                                                                       |
|---------------------|--------------------------------------------------------------------------------------------------|
| `npm install`       | Instala todas as dependências listadas no `package.json`.                                         |
| `npm run dev`       | Inicia o servidor de desenvolvimento do Next.js (`next dev`) em modo hot reload.                |
| `npm run build`     | Gera a build de produção otimizada.                                                              |
| `npm run start`     | Serve a build de produção gerada com `npm run build`.                                            |
| `npm run lint`      | Executa o ESLint conforme as regras padrão do Next.js.                                           |

### ✏️ Como editar o conteúdo

Todo o conteúdo textual e a maioria das configurações visuais são desacoplados em arquivos de dados ou configuração:

- **Textos e ícones dos benefícios**: edite `src/data/benefits.ts`.
- **Itens da galeria**: inclua novas imagens em `public/images` e adicione entradas em `src/data/gallery.ts`.
- **Equipe**: modifique `src/data/team.ts` para atualizar nomes, cargos e descrições. Cada membro usa um ícone do `react-icons` para representar seu papel.
- **Planos e ofertas**: preços, descrições, recursos e rótulos (“Mais vendido”, “Novo”) estão em `src/data/offers.ts`.
- **SEO**: Ajuste títulos, descrições, URLs e schema.org em `src/config/seo.ts`.

### 🎨 Personalização de estilo

As cores, fontes e sombras principais são definidas em `tailwind.config.js` e expostas via CSS custom properties. A tipografia usa **Bebas Neue** para títulos e **Inter** para textos corridos, importadas com `next/font`. É possível alterar a paleta ou adicionar novas utilidades via Tailwind.

### 🚀 Otimizações e boas práticas

- **Performance**: imagens são servidas com o componente `next/image`, gerando tamanhos responsivos e lazy loading automático. Fontes são pré‑carregadas via `next/font`. O uso de Framer Motion nas animações foi equilibrado para não prejudicar a renderização.
- **Acessibilidade**: cores foram escolhidas para atingir contraste de nível AA, botões possuem `aria-label` e todo ícone decorativo inclui `aria-hidden` para leitores de tela. A navegação por teclado é suportada nos links e botões.
- **Responsividade**: as seções utilizam classes do Tailwind para se adaptar aos breakpoints (`sm`, `md`, `lg`, `xl`). Teste o site em diversos tamanhos de tela.
- **SEO**: `next-seo` injeta metatags, Open Graph e JSON‑LD de organização. Atualize os links e imagens para refletir seu domínio real antes de publicar.

### 🧪 Variações de Hero e CTA para testes A/B

No arquivo de dados não há variações pré‑carregadas, mas você pode modificar o título, subtítulo e CTA do Hero diretamente no componente `src/components/sections/hero.tsx` para realizar experimentos A/B. Sugestões de variações:

#### Cópias alternativas do Hero

1. **"Impulsione seu negócio com tecnologia de ponta"** – Enfatiza a inovação tecnológica como motor de crescimento.
2. **"Conecte‑se ao futuro do digital"** – Invoca a ideia de pertencimento a uma vanguarda digital.
3. **"Transforme ideias em experiências inesquecíveis"** – Realça a materialização de conceitos em produtos impactantes.

#### Frases alternativas de CTA

1. **"Solicite uma proposta"** – Indicado para leads mais quentes que desejam valores imediatamente.
2. **"Agende uma consultoria gratuita"** – Ideal para atrair interessados em entender melhor o escopo do trabalho.
3. **"Vamos começar seu projeto"** – Simples e direto, convidando o visitante à ação imediata.

Basta substituir as strings no componente do Hero e no botão final pela opção desejada para realizar testes e medir conversões.

## 🧰 Observações finais

Este projeto foi criado para demonstrar a configuração de um site institucional premium utilizando o ecossistema Next.js moderno. Sinta‑se livre para adaptá‑lo à sua marca, substituir imagens por artes próprias e ampliar ou reduzir as seções conforme a necessidade. Ao publicar, lembre‑se de apontar `canonical`, URLs e redes sociais para os endereços corretos.

Bom desenvolvimento!