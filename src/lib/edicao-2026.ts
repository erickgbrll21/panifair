export const EDICAO_2026 = {
  year: 2026,
  dates: "15, 16 e 17 de maio de 2026",
  city: "Belo Horizonte – MG",
  tagline: "Três dias que consolidaram a PANIFAIR como referência B2B do setor.",
} as const;

export const EDICAO_2026_STATS = [
  { value: 22, suffix: " mil+", label: "Visitantes" },
  { value: 100, suffix: "+", label: "Expositores" },
  { value: 32, suffix: "+", label: "Países representados" },
  { value: 26000, suffix: " m²", label: "Área expositiva utilizada" },
  { value: 890, suffix: "+", label: "Negócios iniciados no evento" },
  { value: 94, suffix: "%", label: "Satisfação dos expositores" },
] as const;

export const EDICAO_2026_HIGHLIGHTS = [
  {
    title: "Maior edição da história",
    description:
      "Recorde de público, área ocupada e participação internacional, superando a edição anterior em todos os indicadores principais.",
  },
  {
    title: "Fórum de Tendências 2026",
    description:
      "Mais de 40 palestras com especialistas sobre automação, ingredientes funcionais, sustentabilidade e novos modelos de negócio.",
  },
  {
    title: "Prêmio Inovação Panificação",
    description:
      "12 finalistas apresentaram soluções disruptivas; três startups fecharam rodadas de investimento ainda durante a feira.",
  },
  {
    title: "Matchmaking B2B",
    description:
      "Programa de encontros pré-agendados gerou 2.400 reuniões entre expositores e compradores corporativos qualificados.",
  },
  {
    title: "Showroom de produtos",
    description:
      "Área de degustação e demonstração ao vivo reuniu panificadores, confeiteiros e chefs convidados de todo o Brasil.",
  },
  {
    title: "Presença internacional",
    description:
      "Delegações oficiais de 32 países exploraram oportunidades de importação e parcerias com fabricantes brasileiros.",
  },
] as const;

export const EDICAO_2026_MOMENTS = [
  {
    title: "Abertura oficial",
    description: "Cerimônia de abertura com autoridades do setor e lançamento da edição 2027.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  },
  {
    title: "Pavilhão de equipamentos",
    description: "Demonstrações de fornos, automação e linhas de produção em funcionamento.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
  },
  {
    title: "Networking B2B",
    description: "Salas de reunião e encontros entre indústrias, distribuidores e varejo.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
  },
  {
    title: "Encerramento",
    description: "Balanço positivo e anúncio das datas da próxima edição em 2027.",
    image:
      "https://images.unsplash.com/photo-1556912173-46c5c23b8a79?w=800&q=80",
  },
] as const;

export const EDICAO_2026_TIMELINE = [
  {
    day: "Dia 1 · 15 mai",
    theme: "Abertura e inovação",
    items: ["Cerimônia oficial", "Prêmio Inovação", "Lançamentos de equipamentos"],
  },
  {
    day: "Dia 2 · 16 mai",
    theme: "Ingredientes e produção",
    items: ["Fórum de tendências", "Workshops técnicos", "Matchmaking B2B"],
  },
  {
    day: "Dia 3 · 17 mai",
    theme: "Negócios e encerramento",
    items: ["Reuniões corporativas", "Premiação de expositores", "Anúncio PANIFAIR 2027"],
  },
] as const;

export const EDICAO_2026_PRESENCAS = [
  {
    name: "Martin Puricelli",
    title: "Sua próxima filial não é física: está no Mercado Livre",
    badge: "Presença internacional",
    schedule: "Palco Principal · Sexta 15/05 · 17h às 17h50",
    bio: "Referência em estratégias de crescimento no Mercado Livre e diretor do Grupo Brick Consultoria. Lidera consultoria certificada nível Silver pelo marketplace, com atuação em toda a América Latina — foco em escala digital, otimização de operações e resultados de longo prazo.",
    image: "/presencas/martin-puricelli.png",
  },
  {
    name: "Gustavo Tubarão",
    title: "Uma presença de destaque para uma experiência marcante na Panifair.",
    badge: "Palestrante confirmado",
    schedule: "Palco Principal · Sexta 15/05 · 19h às 20h30",
    bio: "",
    image: "/presencas/gustavo-tubarao.png",
  },
  {
    name: "Junior Maffille",
    title: "Conteúdo, presença e autoridade para quem vive o mercado na prática.",
    badge: "Palestrante confirmado",
    schedule: "Palco Principal · Sexta 15/05 · 18h às 18h50",
    bio: "",
    image: "/presencas/junior-maffille.png",
  },
] as const;

export const EDICAO_2026_PROGRAMACAO_DIAS = [
  {
    date: "15/05",
    day: "Sexta",
    fullTitle: "Sexta-feira, 15 de maio",
    hours: "Feira: 13h às 21h",
    fairHours: "13h às 21h",
    description:
      "Abertura da programação com conteúdo estratégico, gestão, posicionamento, liderança, inovação e tendências aplicadas à panificação.",
  },
  {
    date: "16/05",
    day: "Sábado",
    fullTitle: "Sábado, 16 de maio",
    hours: "Feira: 13h às 21h",
    fairHours: "13h às 21h",
    description:
      "Dia dedicado a cases de sucesso, reforma tributária, comunicação, produção técnica e tendências com nomes de destaque do setor.",
  },
  {
    date: "17/05",
    day: "Domingo",
    fullTitle: "Domingo, 17 de maio",
    hours: "Feira: 10h às 18h",
    fairHours: "10h às 18h",
    description:
      "Encerramento da edição com foco em negócios, legado empreendedor, produtividade e visão de futuro para a panificação.",
  },
] as const;

export const EDICAO_2026_PROGRAMACAO_FILTROS = [
  { id: "todos", label: "Todos" },
  { id: "principal", label: "Principal", stage: "Palco Principal" },
  { id: "feminino", label: "Feminino", stage: "Empreendedorismo Feminino" },
  { id: "fermento", label: "Fermento", stage: "Palco Fermento" },
] as const;

export const EDICAO_2026_PROGRAMACAO = [
  {
    stage: "Palco Principal",
    description: "Conteúdo central, nomes fortes e talks de maior visibilidade",
    talks: [
      {
        time: "14:00 às 14:50",
        speaker: "Bia Fraga",
        title: "Do Pedido ao Lucro: dominando o Delivery",
        origin: "Sebrae",
        tag: "Delivery",
        bio: "Bianca Fraga é CEO do Grupo Mindhub, um ecossistema de gestão que tem em seu guarda-chuva restaurantes próprios e uma escola para formar administradores que pensam de forma estratégica em seus negócios. Mentora de mais de 5000 alunos, Bianca é especialista em gestão financeira e eficiência no foodservice, além de fazer parte do grupo seleto de empresários do Conexão iFood, que tem relação direta com a organização, para melhorar o aplicativo e, principalmente, o desempenho dos restaurantes.",
      },
      {
        time: "15:00 às 15:50",
        speaker: "Guilherme",
        title: "O erro financeiro que toda padaria comete",
        origin: "Belo Horizonte",
        tag: "Gestão financeira",
        bio: "Currículo em breve.",
      },
      {
        time: "16:00 às 17:00",
        speaker: "Gustavo Vannucci",
        title: "As Tendências Globais do Varejo Aplicadas na Panificação",
        origin: "Sebrae",
        tag: "Tendências",
        bio: "Conselheiro de administração, mestre em inovação e comportamento do consumidor e especialista em inteligência de mercado, tendências e inovação. Com mais de 35 anos de experiência, leva ao varejo insights práticos sobre estratégias comerciais, canais de venda e decisão orientada por dados.",
      },
      {
        time: "17:00 às 17:50",
        speaker: "Martin Puricelli",
        title: "Sua próxima filial não é física: está no Mercado Livre",
        origin: "Grupo Brick Consultoria",
        tag: "Mercado Livre",
        highlight: "Presença internacional",
        bio: "Especialista em estratégias de crescimento dentro do Mercado Livre, com atuação consolidada em toda a América Latina. À frente de uma consultoria certificada nível Silver pelo próprio marketplace, Martin acumula experiência real em desenvolvimento, otimização e escala de operações digitais — sempre com foco em resultados concretos e visão estratégica de longo prazo.",
      },
      {
        time: "18:00 às 18:50",
        speaker: "Junior Maffille",
        title: "Inovação na Panificação: transformação de ideias em resultados",
        origin: "Belo Horizonte",
        tag: "Inovação",
        bio: "Criado na zona rural de Viçosa, Júnior Mafille iniciou sua trajetória empresarial ainda jovem e construiu uma carreira de destaque no setor de panificação. Com mais de 25 anos de experiência, lidera uma rede de padarias, restaurantes e negócios correlatos.",
      },
      {
        time: "19:00 às 20:30",
        speaker: "Júnior Maffille e Gustavo Tubarão",
        title: "Talk Show",
        origin: "Belo Horizonte",
        tag: "Talk show",
        bio: "Gustavo Tubarão, cujo nome verdadeiro é Gustavo Almeida Freire, é um influenciador digital e humorista mineiro nascido em 28 de julho de 2000 em Cana Verde (MG). Ele conquistou milhões de seguidores ao retratar com humor o cotidiano da roça e se tornou referência nacional, recebendo prêmios como \"Criador do Ano\" no TikTok Awards 2023.",
      },
    ],
  },
  {
    stage: "Empreendedorismo Feminino",
    description: "Posicionamento, liderança, legado e força de marca",
    talks: [
      {
        time: "15:00 às 16:00",
        speaker: "Margareth Lopes",
        title: "Quem tem medo do Batom Vermelho?",
        origin: "Belo Horizonte",
        tag: "Posicionamento",
        bio: "Especialista em desenvolvimento de equipes comerciais de alta performance, atua há mais de 25 anos com atacarejo e distribuição. É pós-graduada em Marketing e Vendas, sócia da Evoluir e referência em processos comerciais, negociação estratégica e culturas orientadas a resultado.",
      },
      {
        time: "16:00 às 16:50",
        speaker: "Andrea Japiassu",
        title: "PPP. A IA das Mulheres realmente poderosas. Mais Resultados sem Nenhuma Exaustão.",
        origin: "Brasília",
        tag: "Autoliderança",
        bio: "Estrategista de NR1 e terapeuta integrativa, especialista em reorganização sistêmica de pessoas e empresas. Lidera o Movimento das Soberanas, com foco em autoliderança, presença e poder pessoal para mulheres 40+.",
      },
      {
        time: "17:00 às 18:00",
        speaker: "Babi Durães",
        title: "O foco não é aparência, é a coerência",
        origin: "Belo Horizonte",
        tag: "Imagem e autoridade",
        bio: "Estrategista de imagem e posicionamento, especialista em comportamento humano e temperamento. Atua no desenvolvimento de líderes e empresários, conectando essência, percepção de valor e coerência entre o que se comunica e o que se sustenta.",
      },
      {
        time: "18:00 às 19:00",
        speaker: "Daniela Migliori",
        title: "Empreendedorismo Feminino: força da marca pessoal",
        origin: "Valinhos/SP",
        tag: "Marca pessoal",
        bio: "Fundadora da Amo Pani com formação na Itália e mentora de negócios, já orientou mais de mil alunos. Com mais de 15 anos de experiência, ajuda pessoas e empresas a transformar a panificação em negócios estruturados, lucrativos e bem posicionados.",
      },
    ],
  },
  {
    stage: "Palco Fermento",
    description: "Conteúdo técnico, digital e de gestão aplicado ao setor",
    talks: [
      {
        time: "14:30 às 16:00",
        speaker: "Sueli Braga, Igor Martins e Felipe Vidotte",
        title: "Tráfego pago, gestão do marketing digital e IA na panificação",
        origin: "Belo Horizonte",
        tag: "Marketing digital",
        bio: "Igor Martins é gestor de Marketing da Maffile Digital, empresa criada com o propósito de impulsionar negócios do setor de alimentação por meio de estratégias digitais eficientes. Com 8 anos de experiência, hoje coordena uma equipe de 12 profissionais entre videomaker, design, social media, story maker e editores. Destaca-se pela habilidade em gravação, fotografia e, principalmente, direção de conteúdo — área em que conduz grandes marcas a se posicionarem com clareza e autoridade no mundo digital.",
      },
      {
        time: "16:00 às 16:50",
        speaker: "Marco Toledo",
        title: "Tecnologia na panificação",
        origin: "RS",
        tag: "Tecnologia",
        bio: "Técnico em telecomunicações e projetista, com mais de 30 anos de atuação no desenvolvimento de equipamentos e soluções tecnológicas para a gastronomia profissional. Seu trabalho conecta engenharia, prática de mercado e inovação aplicada à panificação.",
      },
      {
        time: "17:00 às 17:50",
        speaker: "Fernando Silveira",
        title: "Fornadas de estratégias para melhorar as Vendas!",
        origin: "Sebrae",
        tag: "Vendas",
        bio: "Administrador e contador pela PUC Minas, com MBA em Finanças pelo IBMEC, atua há mais de 15 anos com desenvolvimento e gestão, integrando finanças, marketing, vendas e distribuição. Já realizou centenas de palestras e consultorias.",
      },
      {
        time: "18:00 às 19:50",
        speaker: "Felipe Vidotte",
        title: "Inovação na Gestão: IA como receita de sucesso",
        origin: "Belo Horizonte",
        tag: "IA e performance",
        bio: "Profissional com mais de 15 anos de experiência no mercado digital, formado em Sistemas de Informação e atuante na transformação de negócios por meio de tecnologia e inteligência artificial. Hoje lidera a área de consultoria da 3M Consultoria.",
      },
      {
        time: "19:00 às 19:50",
        speaker: "Carol Câmara",
        title:
          "A importância da formação das lideranças para a construção da lucratividade na padaria",
        origin: "Belo Horizonte",
        tag: "Liderança",
        bio: "Currículo em breve.",
      },
    ],
  },
] as const;

export const EDICAO_2026_PROGRAMACAO_SABADO = [
  {
    stage: "Palco Principal",
    description: "Conteúdo central, nomes fortes e talks de maior visibilidade",
    talks: [
      {
        time: "09:00 às 13:00",
        speaker: "ABIP — Inteligência de Mercado",
        title: "Bloco institucional ABIP",
        origin: "ABIP",
        tag: "Institucional",
        bio: "Arte de divulgação da ABIP para este bloco da programação — material visual, sem currículo de palestrante.",
      },
      {
        time: "14:40 às 15:30",
        speaker: "Patrícia Marques",
        title:
          "Comunicação que posiciona. Como Construir Autoridade e Influenciar Pessoas. Em um mercado onde falta gente e sobra concorrente",
        origin: "Belo Horizonte",
        tag: "Curadoria",
        bio: "Consultora em estruturação de processos, marketing e atendimento ao cliente, graduada em Publicidade e Propaganda, com pós em Psicologia Organizacional. Atua em todo o Brasil com treinamentos, palestras e curadoria de eventos corporativos.",
      },
      {
        time: "15:30 às 16:20",
        speaker: "Dr. Weverton Vilas Boas de Castro",
        title: "Os impactos da reforma tributária na panificação",
        origin: "Belo Horizonte",
        tag: "Reforma tributária",
        bio: "Advogado, gestor e especialista em governança e desenvolvimento institucional. Graduado em Direito e Relações Internacionais, possui mestrado em Direito Público e pós-graduação em Direito Internacional e Tributário.",
      },
      {
        time: "16:30 às 17:20",
        speaker: "Zé Felipe",
        title: "Sede de Vencer",
        origin: "Sebrae",
        tag: "Case inspirador",
        highlight: "Case de sucesso",
        bio: "Líder conhecido por revolucionar o mercado com marcas como Wäls e K-Happy, José Felipe Carneiro construiu uma carreira ligada à inovação, estratégia e transformação de negócios.",
      },
      {
        time: "17:30 às 18:20",
        speaker: "Fernando Sardinha",
        title: "A Receita do Crescimento: Comunicação, Influência e Autoridade",
        origin: "São Paulo",
        tag: "Comunicação",
        bio: "Palestrante internacional, comediante e especialista em comunicação há 14 anos, desenvolveu um método voltado a empresários e CEOs que desejam ganhar palco, presença em vídeo e autoridade com leveza e impacto.",
      },
      {
        time: "18:30 às 19:20",
        speaker: "Fernando Bebber e Patrick Catapano",
        title: "PAM: Padaria Artesanal Mineira. Todos juntos pelo pão.",
        origin: "Belo Horizonte",
        tag: "Pão artesanal",
        bio: "Fernando Bebber é um chef e padeiro especializado em fermentação natural, com mais de 30 anos de experiência em panificação e gastronomia. Ele é dono do Atelier Pão e Coração, em Nova Lima (MG), e atua como professor e consultor na área, já tendo formado mais de 5.000 alunos no Brasil. Patrick Catapano nasceu em 18 de março de 1982, na Itália, e hoje vive em São Paulo. Pizzaiolo apaixonado pelo alimento, compartilha seus aprendizados há mais de duas décadas, ministra consultorias no Brasil e pelo mundo e idealizou os projetos Pizza na Estrada e La Pizza Di Pátrick, onde incentiva e valoriza a relação com o pequeno agricultor.",
      },
    ],
  },
  {
    stage: "Empreendedorismo Feminino",
    description: "Posicionamento, liderança, legado e força de marca",
    talks: [
      {
        time: "15:30 às 16:20",
        speaker: "Carol Villaça",
        title: "Mindset de Liderança Feminina: a intuição como ingrediente na era da I.A.",
        origin: "Belo Horizonte",
        tag: "Liderança",
        bio: "Autora do livro Vendedora Raiz, é palestrante, mentora, treinadora e professora. Com 24 anos de experiência em vendas, gestão comercial e liderança, tem como propósito inspirar profissionais e equipes.",
      },
      {
        time: "16:30 às 17:20",
        speaker: "Talk Show: Rose Maffille recebe Anna Carolina Toledo e Rita Gonçalves",
        title: "A Virada de Chave da Mulher na Empresa Familiar",
        origin: "Belo Horizonte",
        tag: "Empresa familiar",
        bio: "Rose Maffille é proprietária da Padaria Maffille, vencedora do prêmio de Melhor Padaria pela Revista Panificação Brasileira, curadora da Padaria Modelo e gestora de expansão da Rede Maffille, com mais de 10 anos de experiência no setor. Anna Carolina Tholedo é especialista em equipamentos para gastronomia e confeitaria, atuando na Nathional Cook com foco em produtividade, padronização e crescimento de negócios gastronômicos. Rita Gonçalves é fundadora do Padaria de Sucesso, criadora da marca Eu amo Pão, presidente da Amip, diretora da Abip e presidente da Abip Jovem, especialista em marketing, conteúdo e branding para padarias.",
      },
      {
        time: "17:30 às 18:20",
        speaker: "Karla Rocha",
        title: "Empreendedorismo Feminino: O Legado",
        origin: "Belo Horizonte",
        tag: "Legado",
        bio: "Presidente da Abrasel em Minas Gerais e primeira mulher a ocupar o cargo no estado, é sócia-proprietária e terceira geração do tradicional Bolão Santa Tereza. Sua atuação une tradição, gastronomia e liderança institucional.",
      },
      {
        time: "18:30 às 19:00",
        speaker: "Renata Rocha",
        title: "Painel Inspiração. Projeto Levain-te",
        origin: "Belo Horizonte",
        tag: "Novo negócio",
        bio: "Arquiteta por quase vinte anos, migrou para a panificação após uma jornada de estudo sobre fermentação natural. Com formação internacional e olhar metodológico herdado da arquitetura, transformou o hobby em ofício e negócio.",
      },
    ],
  },
  {
    stage: "Palco Fermento",
    description: "Conteúdo técnico, digital e de gestão aplicado ao setor",
    talks: [
      {
        time: "14:00 às 15:00",
        speaker: "Carolina Câmara e William Mattos",
        title: "Painel Liderança na panificação",
        origin: "Belo Horizonte",
        tag: "Liderança",
        bio: "William Mattos é publicitário com mais de R$ 20 milhões em faturamento gerado em vendas e marketing, fundador da Forno Criativo, consultor comercial da Abrasel Minas e mentor focado em resultados para gastronomia e food service.",
      },
      {
        time: "15:00 às 15:50",
        speaker: "Juliana Gonçalves",
        title: "A sua Empresa Familiar tem Futuro?",
        origin: "São Paulo",
        tag: "Sucessão",
        bio: "Atua na profissionalização de famílias empresárias há 20 anos, com a estruturação da governança corporativa e familiar, Conselhos de Administração, de Família e de Herdeiros, de Sócios, Acordos de Acionistas, Protocolos de Família, planejamento sucessório, projeto de desenvolvimento da família e Mediação de Conflitos.",
      },
      {
        time: "16:00 às 16:50",
        speaker: "Claudete Pereira",
        title: "De Grão em Pão: formando profissionais para o mercado da Panificação",
        origin: "Sebrae",
        tag: "Formação",
        bio: "Coordenadora de programas sociais da Fundação Bunge. Formada em Comunicação Social, com pós-graduação em Comunicação Organizacional e especialização em Marketing Digital, atua na coordenação de projetos sociais voltados à formação.",
      },
      {
        time: "17:00 às 18:50",
        speaker: "Rose Ávila",
        title: "O poder feminino que transforma segurança em lucro!",
        origin: "Belo Horizonte",
        tag: "Segurança de alimentos",
        bio: "Bióloga, auditora líder em FSSC 22000 e especialista em Vigilância Sanitária e epidemiologia, atua com gestão da segurança de alimentos, assuntos regulatórios, controle de qualidade e consultoria para entidades do setor alimentício.",
      },
      {
        time: "19:00 às 20:00",
        speaker: "Marilda Fajardo e Silvia Lage",
        title: "Padaria do Futuro",
        origin: "Belo Horizonte",
        tag: "Futuro",
        bio: "Engenheiras de Alimentos e sócias da Invista Foods, unem experiência técnica e visão estratégica para transformar negócios do setor alimentício. Marilda é especialista em panificação e desenvolvimento de produtos, liderando projetos e treinamentos práticos. Silvia é especialista em layout industrial, estruturação física e processos produtivos. A Invista Foods soma mais de 700 projetos atendidos, e o Invista Ensina oferece cursos de panificação, confeitaria e gestão.",
      },
    ],
  },
] as const;

export const EDICAO_2026_PROGRAMACAO_DOMINGO = [
  {
    stage: "Palco Principal",
    description: "Conteúdo central, nomes fortes e talks de maior visibilidade",
    talks: [
      {
        time: "13:00 às 13:50",
        speaker: "Dr. Fernando Quadros",
        title: "O Direito do Trabalho e Futuro das relações trabalhistas.",
        origin: "Belo Horizonte",
        tag: "Trabalho e gestão",
        bio: "Fernando Quadros, natural de Belo Horizonte, Graduado em Direito pela FUMEC, Mestre em Direito pela Universidade Gama Filho/RJ, Advogado na área empresarial com experiência de atuação para redes de panificação, Professor Universitário desde 2001, foi Conselheiro e Diretor da OAB/MG, ex-Presidente da Associação dos Advogados de Minas Gerais.",
      },
      {
        time: "14:00 às 14:50",
        speaker: "Paulo Dourado",
        title: "Padaria sem segredo.",
        origin: "São Paulo",
        tag: "Em atualização",
        bio: "Paulo Dourado é um padeiro e empresário com mais de 15 anos de experiência no ramo da panificação. Ele é o fundador do Padaria Sem Segredos, o maior canal de panificação do Brasil, que impacta milhões de pessoas diariamente através das redes sociais. Sua trajetória começou de forma simples, com poucos recursos, e hoje ele lidera um negócio com múltiplas unidades. Ao longo dos anos, Paulo se tornou uma referência nacional ao ensinar, de forma prática e acessível, receitas, técnicas de produção e gestão para padarias.",
      },
      {
        time: "15:00 às 16:00",
        speaker: "Júnior Mafille e Fernando Sardinha",
        title: "O Posicionamento que vende",
        origin: "Belo Horizonte",
        tag: "Posicionamento",
        bio: "Criado na zona rural de Viçosa, Júnior Mafille iniciou sua trajetória empresarial ainda jovem e construiu uma carreira de destaque no setor de panificação. Com mais de 25 anos de experiência, lidera uma rede de padarias, restaurantes e negócios correlatos.",
      },
      {
        time: "16:00 às 17:00",
        speaker: "Júnior Mafille recebe: Tarcísio Andrade e Vinícius Dantas",
        title: "A história atrás da panificação",
        origin: "Belo Horizonte",
        tag: "Histórias",
        bio: "Criado na zona rural de Viçosa, Júnior Mafille iniciou sua trajetória empresarial ainda jovem e construiu uma carreira de destaque no setor de panificação. Com mais de 25 anos de experiência, lidera uma rede de padarias, restaurantes e negócios correlatos.",
      },
      {
        time: "A confirmar",
        speaker: "Tião",
        title: "Circular nos stands",
        origin: "Ativação especial",
        tag: "Atração especial",
        bio: "Currículo em breve.",
      },
    ],
  },
  {
    stage: "Empreendedorismo Feminino",
    description: "Posicionamento, liderança, legado e força de marca",
    talks: [
      {
        time: "11:00 às 12:00",
        speaker: "Sueli Braga",
        title: "Padaria lotada todos os dias",
        origin: "Belo Horizonte",
        tag: "Marketing",
        bio: "Especialista em tráfego pago desde 2019, ajuda empresários a atrair mais clientes pela internet. É fundadora do projeto Insta Padaria, dedicado a posicionamento digital, presença online e anúncios pagos para panificadores.",
      },
      {
        time: "14:30 às 16:00",
        speaker: "Andrea Japiassu",
        title:
          "Uma vivência sensorial e disruptiva para mulheres empreendedoras: sinta seu corpo, se divirta e saia com soluções aplicáveis.",
        origin: "Brasília",
        tag: "Empreendedorismo feminino",
        bio: "Estrategista de NR1 e terapeuta integrativa, especialista em reorganização sistêmica de pessoas e empresas. Lidera o Movimento das Soberanas, com foco em autoliderança, presença e poder pessoal para mulheres 40+.",
      },
    ],
  },
  {
    stage: "Palco Fermento",
    description: "Conteúdo técnico, digital e de gestão aplicado ao setor",
    talks: [
      {
        time: "11:00 às 12:00",
        speaker: "Leonardo Souza",
        title: "Superando as dificuldades do Empreendedorismo",
        origin: "Belo Horizonte",
        tag: "Empreendedorismo",
        bio: "É empreendedor, advogado, palestrante e escritor. Atua ajudando pessoas e empresas a crescerem com propósito, superando desafios com princípios sólidos e visão estratégica. Leva mensagens de fé, disciplina e transformação, conectando valores bíblicos à prática do dia a dia e ao mundo dos negócios.",
      },
      {
        time: "14:00 às 14:50",
        speaker: "Marcos Resende",
        title: "Como agregar valor com o cafezinho na padaria",
        origin: "Belo Horizonte",
        tag: "Café",
        bio: "Diretor da Agro Cegê Participações, construiu trajetória ligada a negócios, tecnologia, educação a distância e sucessão no mercado de cafés especiais. Une visão empresarial, inovação e experiência em formação de mercado.",
      },
      {
        time: "16:00 às 16:50",
        speaker: "Felipe Perna",
        title: "Crescimento inteligente para padarias: faça seu dinheiro trabalhar para você",
        origin: "Belo Horizonte",
        tag: "Investimentos",
        bio: "Empresário, palestrante e investidor, atua como diretor executivo da Way Capital. Passou por empresas como RD Station e Sympla, e hoje ajuda empresários em estratégias de alavancagem, aquisição de ativos e investimentos.",
      },
    ],
  },
] as const;

export const EDICAO_2026_PROGRAMACAO_POR_DIA = {
  "15/05": EDICAO_2026_PROGRAMACAO,
  "16/05": EDICAO_2026_PROGRAMACAO_SABADO,
  "17/05": EDICAO_2026_PROGRAMACAO_DOMINGO,
} as const;

export const EDICAO_2026_QUOTES = [
  {
    quote:
      "A edição de 2026 superou todas as expectativas. Voltamos com a maior carteira de pedidos da história da empresa.",
    author: "Mariana Costa",
    role: "Diretora Comercial",
    company: "Fornos Industrial Brasil",
  },
  {
    quote:
      "O matchmaking B2B foi decisivo. Em dois dias fechamos acordos com redes que buscávamos há mais de um ano.",
    author: "Eduardo Nunes",
    role: "CEO",
    company: "Grano & Arte Ingredientes",
  },
] as const;
