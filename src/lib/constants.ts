export const EVENT_DATE = new Date("2027-08-18T09:00:00-03:00");

export const NAV_LINKS = [
  { href: "/#por-que-expor", label: "Por que expor" },
  { href: "/#visitantes", label: "Visitantes" },
  { href: "/#mercado", label: "Mercado" },
  { href: "/#beneficios", label: "Benefícios" },
  { href: "/#estandes", label: "Estandes" },
  { href: "/#depoimentos", label: "Depoimentos" },
  { href: "/#local", label: "Local" },
  { href: "/#faq", label: "FAQ" },
] as const;

export const EDICAO_2026_LINK = {
  href: "/edicao-2026",
  label: "Edição 2026",
} as const;

export const CONTACT_LINK = {
  href: "/contato",
  label: "Contato",
} as const;

export const PANIFAIR_WHATSAPP_NUMBER = "551140028922";

export const BOOTH_INTEREST_OPTIONS = [
  "Estande Standard",
  "Estande Premium",
  "Estande Ilha",
  "Ainda não sei — quero orientação",
] as const;

export const HERO_STATS = [
  { value: 25000, suffix: "+", label: "Visitantes qualificados" },
  { value: 450, suffix: "+", label: "Expositores nacionais e internacionais" },
  { value: 35, suffix: "+", label: "Países representados" },
  { value: 92, suffix: "%", label: "Taxa de satisfação dos expositores" },
] as const;

export const WHY_EXHIBIT = [
  {
    icon: "TrendingUp",
    title: "Acesso direto ao mercado",
    description:
      "Conecte-se com tomadores de decisão de indústrias, distribuidores e redes de varejo que movimentam bilhões no setor de panificação.",
  },
  {
    icon: "Users",
    title: "Networking de alto valor",
    description:
      "Encontre parceiros comerciais, distribuidores regionais e compradores corporativos em um único ambiente premium.",
  },
  {
    icon: "Target",
    title: "Geração de leads qualificados",
    description:
      "Capture contatos B2B com intenção real de compra. Cada visitante é um potencial cliente, parceiro ou investidor.",
  },
  {
    icon: "Award",
    title: "Posicionamento de marca",
    description:
      "Associe sua empresa à maior vitrine do setor. Visibilidade que impulsiona credibilidade e autoridade no mercado.",
  },
  {
    icon: "Globe",
    title: "Expansão internacional",
    description:
      "Apresente seus produtos a compradores de América Latina, Europa e Oriente Médio em busca de novos fornecedores.",
  },
  {
    icon: "Zap",
    title: "ROI comprovado",
    description:
      "Expositores reportam retorno médio de 4,2x sobre investimento em estande dentro dos primeiros 6 meses pós-feira.",
  },
] as const;

export const VISITOR_PROFILES = [
  "Indústrias de alimentos",
  "Fabricantes de panificação",
  "Distribuidores e atacadistas",
  "Equipamentos e maquinário",
  "Ingredientes e insumos",
  "Embalagens e rotulagem",
  "Softwares e automação",
  "Refrigeração comercial",
  "Food service e cafeterias",
  "Franquias e redes",
  "Confeiteiros profissionais",
  "Consultores do setor",
] as const;

export const MARKET_INDICATORS = [
  {
    value: 185,
    suffix: " bi",
    prefix: "R$ ",
    label: "Faturamento do setor de panificação no Brasil",
    growth: "+8,3% ao ano",
  },
  {
    value: 2.1,
    suffix: " mi",
    prefix: "",
    label: "Empregos diretos no setor",
    growth: "+12% em 5 anos",
    decimal: 1,
  },
  {
    value: 78,
    suffix: "%",
    prefix: "",
    label: "Decisores de compra presentes na feira",
    growth: "C-level e gerentes",
  },
  {
    value: 340,
    suffix: " mi",
    prefix: "R$ ",
    label: "Volume de negócios gerados na última edição",
    growth: "Contratos fechados na feira",
  },
] as const;

export const BENEFITS = [
  {
    title: "Catálogo digital exclusivo",
    description: "Sua marca destacada no app oficial com acesso a 25.000+ profissionais do setor.",
  },
  {
    title: "Matchmaking B2B",
    description: "Agendamento de reuniões com compradores pré-qualificados antes do evento.",
  },
  {
    title: "Assessoria comercial",
    description: "Equipe dedicada para maximizar seu fluxo de visitantes e conversões no estande.",
  },
  {
    title: "Cobertura de mídia",
    description: "Presença em canais especializados, imprensa trade e redes sociais oficiais.",
  },
  {
    title: "Programação técnica",
    description: "Palestras, demonstrações e workshops que atraem público qualificado ao pavilhão.",
  },
  {
    title: "Área VIP para negócios",
    description: "Salas privativas para fechamento de contratos com clientes estratégicos.",
  },
] as const;

export const BOOTH_TYPES = [
  {
    name: "Estande Standard",
    size: "9m² a 18m²",
    price: "A partir de R$ 12.800",
    features: [
      "Piso carpete cinza",
      "Parede divisória branca",
      "Identificação com fachada",
      "1 ponto de energia",
      "Listagem no catálogo oficial",
    ],
    highlight: false,
  },
  {
    name: "Estande Premium",
    size: "24m² a 48m²",
    price: "A partir de R$ 28.500",
    features: [
      "Montagem personalizada",
      "Mobiliário executivo",
      "Wi-Fi dedicado",
      "Destaque no app oficial",
      "5 convites VIP",
      "Assessoria comercial",
    ],
    highlight: true,
  },
  {
    name: "Estande Ilha",
    size: "54m² a 200m²",
    price: "Sob consulta",
    features: [
      "Projeto arquitetônico exclusivo",
      "Visibilidade 360°",
      "Palco para demonstrações",
      "Sala de reuniões privativa",
      "Branding em todo o evento",
      "Pacote de mídia ampliado",
    ],
    highlight: false,
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Fechamos contratos que representam 40% da nossa meta anual em apenas três dias. A PANIFAIR é o evento mais estratégico do nosso calendário comercial.",
    author: "Carlos Mendes",
    role: "Diretor Comercial",
    company: "TechBake Equipamentos",
  },
  {
    quote:
      "Conseguimos 847 leads qualificados e 23 distribuidores interessados. O ROI superou qualquer ação de marketing B2B que já realizamos.",
    author: "Ana Paula Ribeiro",
    role: "CEO",
    company: "Ingredientes Premium SA",
  },
  {
    quote:
      "Nossa marca ganhou visibilidade internacional. Recebemos propostas de exportação para 8 países que jamais teríamos alcançado sozinhos.",
    author: "Roberto Silva",
    role: "Gerente de Exportação",
    company: "Embalagens Gourmet",
  },
] as const;

export const PARTICIPATING_COMPANIES = [
  "Bimbo",
  "Wickbold",
  "Puratos",
  "Lesaffre",
  "Bunge",
  "Kerry",
  "Rational",
  "Unox",
  "Metos",
  "Sottoriva",
  "Revent",
  "Frigomat",
  "Daub",
  "Bralyx",
  "Angefort",
  "Polinox",
] as const;

export const FAQ_ITEMS = [
  {
    question: "Quem deve expor na PANIFAIR 2027?",
    answer:
      "Indústrias, fabricantes, distribuidores, fornecedores de equipamentos, ingredientes, embalagens, softwares, automação, refrigeração, food service, franquias e qualquer empresa que atue no ecossistema da panificação e confeitaria profissional.",
  },
  {
    question: "Qual o retorno sobre investimento esperado?",
    answer:
      "Expositores da última edição reportaram ROI médio de 4,2x. Com matchmaking B2B, leads qualificados e networking de alto valor, a feira se paga em oportunidades de negócios geradas durante e após o evento.",
  },
  {
    question: "Como funciona a reserva de estande?",
    answer:
      "Entre em contato com nossa equipe comercial, escolha o tipo e tamanho de estande, receba uma proposta personalizada e garanta sua posição estratégica no pavilhão. Vagas premium são limitadas.",
  },
  {
    question: "A feira atrai compradores internacionais?",
    answer:
      "Sim. A PANIFAIR reúne delegações de mais de 35 países, incluindo compradores de América Latina, Europa e Oriente Médio em busca de novos fornecedores e parceiros comerciais.",
  },
  {
    question: "Quais serviços estão inclusos no pacote de expositor?",
    answer:
      "Dependendo do tipo de estande: montagem, mobiliário, energia, internet, listagem no catálogo digital, convites VIP, assessoria comercial e participação no programa de matchmaking B2B.",
  },
  {
    question: "Existe prazo para garantir desconto antecipado?",
    answer:
      "Sim. Expositores que confirmarem participação até 31 de dezembro de 2026 recebem condições especiais de early bird com desconto e posicionamento prioritário no mapa do evento.",
  },
] as const;
