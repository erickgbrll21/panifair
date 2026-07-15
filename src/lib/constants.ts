export const EVENT_DATE = new Date("2027-04-15T09:00:00-03:00");
export const EVENT_DATE_END = new Date("2027-04-17T20:00:00-03:00");
export const EVENT_DATES_LABEL = "15 a 17 de Abril de 2027";

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

export const PANIFAIR_WHATSAPP_NUMBER = "5531991753330";

export const PANIFAIR_PHONE_DISPLAY = "+55 (31) 99175-3330";
export const PANIFAIR_PHONE_TEL = "+5531991753330";
export const PANIFAIR_EMAIL = "expositores@panifair.com.br";

export const PANIFAIR_ADDRESS = {
  street: "Av. Pastor Anselmo Silvestre, nº 1495 – 4º andar",
  neighborhood: "União",
  city: "Belo Horizonte",
  state: "MG",
  postalCode: "31170-678",
  cep: "31.170.678",
  line: "Av. Pastor Anselmo Silvestre, nº 1495 – 4º andar | União | Belo Horizonte – MG",
  lineWithCep:
    "Av. Pastor Anselmo Silvestre, nº 1495 – 4º andar | União | Belo Horizonte – MG · CEP 31.170.678",
  cityState: "Belo Horizonte – MG",
  mapsQuery: "Av. Pastor Anselmo Silvestre, 1495, União, Belo Horizonte, MG",
} as const;

export const VENUE_STATS = [
  { value: 57, suffix: " mil m²", label: "Área total do evento" },
  { value: 14, suffix: " metros", label: "Pé-direito máximo" },
  { value: 210, suffix: " m²", label: "Padaria modelo" },
] as const;

export const BOOTH_INTEREST_OPTIONS = [
  "Estande Standard",
  "Estande Premium",
  "Estande Ilha",
  "Ainda não sei — quero orientação",
] as const;

export const HERO_STATS = [
  { value: 22000, suffix: "+", label: "Visitantes qualificados" },
  { value: 150, suffix: "+", label: "Expositores nacionais e internacionais" },
  { value: 35, suffix: "+", label: "Países representados" },
  { value: 92, suffix: "%", label: "Taxa de satisfação dos expositores" },
] as const;

export const WHY_EXHIBIT = [
  {
    icon: "TrendingUp",
    title: "Acesso direto ao mercado",
    description: "Tomadores de decisão de indústrias, distribuidores e redes em um só lugar.",
  },
  {
    icon: "Users",
    title: "Networking de alto valor",
    description: "Parceiros comerciais e compradores corporativos frente a frente.",
  },
  {
    icon: "Target",
    title: "Leads qualificados",
    description: "Contatos B2B com intenção real de compra.",
  },
  {
    icon: "Award",
    title: "Posicionamento de marca",
    description: "Sua empresa em destaque na maior vitrine do setor.",
  },
  {
    icon: "Globe",
    title: "Expansão internacional",
    description: "Compradores da América Latina, Europa e Oriente Médio.",
  },
] as const;

export const VISITOR_GROUPS = [
  {
    title: "Indústria e fabricação",
    icon: "Factory",
    profiles: ["Indústrias de alimentos", "Fabricantes de panificação", "Equipamentos e maquinário"],
  },
  {
    title: "Insumos e distribuição",
    icon: "Wheat",
    profiles: ["Ingredientes e insumos", "Embalagens e rotulagem", "Distribuidores e atacadistas"],
  },
  {
    title: "Tecnologia e operação",
    icon: "Cpu",
    profiles: ["Softwares e automação", "Refrigeração comercial", "Consultores do setor"],
  },
  {
    title: "Varejo e food service",
    icon: "Store",
    profiles: ["Cafeterias e food service", "Franquias e redes", "Confeiteiros profissionais"],
  },
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
    description: "Marca em destaque no app oficial, visto por 25.000+ profissionais.",
  },
  {
    title: "Matchmaking B2B",
    description: "Reuniões agendadas com compradores pré-qualificados.",
  },
  {
    title: "Assessoria comercial",
    description: "Equipe dedicada a aumentar fluxo e conversões no estande.",
  },
  {
    title: "Cobertura de mídia",
    description: "Imprensa trade, canais especializados e redes oficiais.",
  },
  {
    title: "Programação técnica",
    description: "Palestras e workshops que atraem público qualificado.",
  },
  {
    title: "Área VIP para negócios",
    description: "Salas privativas para fechar contratos estratégicos.",
  },
] as const;

export const BOOTH_TYPES = [
  {
    name: "ESPAÇO LARANJA",
    color: "#f39100",
    inclusions: [
      "Montagem completa com acabamento premium Panifair",
      "Participação e exposição na Padaria Modelo",
      "Inserção de equipamentos/produtos na Padaria Modelo sem necessidade de doação",
    ],
  },
  {
    name: "ESPAÇO AMARELO",
    color: "#e8b800",
    inclusions: ["Área de exposição conforme localização indicada no mapa oficial da feira"],
  },
  {
    name: "ESPAÇO VERDE",
    color: "#1f9d4d",
    inclusions: ["Área de exposição conforme localização indicada no mapa oficial da feira"],
  },
  {
    name: "ESPAÇO CINZA",
    color: "#b8b8b8",
    inclusions: ["Área de exposição conforme localização indicada no mapa oficial da feira"],
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Fechamos contratos que representam 40% da nossa meta anual em apenas três dias. A PANIFAIR é o evento mais estratégico do nosso calendário comercial.",
    author: "Dr. Márcio Botelho",
    role: "CEO e Fundador",
    company: "Botelho e Castro Advogados",
  },
  {
    quote:
      "Conseguimos 847 leads qualificados e 23 distribuidores interessados. O ROI superou qualquer ação de marketing B2B que já realizamos.",
    author: "Ygor Alouan",
    role: "CEO e Co-Fundador",
    company: "Grupo Alouan Business Solutions",
  },
  {
    quote:
      "Nossa marca ganhou visibilidade internacional. Recebemos propostas de exportação para 8 países que jamais teríamos alcançado sozinhos.",
    author: "Willam Sferra",
    role: "CEO e Fundador",
    company: "KTG Group",
  },
  {
    quote:
      "A PANIFAIR conectou nossa marca a parceiros estratégicos e fortaleceu nossa presença no mercado com resultados concretos de negócios.",
    author: "Priscila Infanger",
    role: "CHRO",
    company: "Cinépolis",
  },
] as const;

export const APOIADORES = [
  {
    name: "Maffille Consultoria e Assessoria",
    logo: "/apoiadores/maffille-consultoria.png",
  },
  {
    name: "Maffille",
    logo: "/apoiadores/maffille-2.svg",
  },
  {
    name: "Maffille Digital",
    logo: "/apoiadores/maffille-digital.svg",
  },
  {
    name: "Tributalize",
    logo: "/apoiadores/tributalize.svg",
  },
  {
    name: "Dimensão Montagens",
    logo: "/apoiadores/dimensao-montagens.svg",
  },
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
