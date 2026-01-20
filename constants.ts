export const CLIENT_CONFIG = {
  name: "Cristal Glass",
  city: "São Paulo e Região",
  neighborhoods: "Atendimento imediato em toda a Grande SP",
  whatsapp: "5511999999999",
  phoneDisplay: "(11) 99999-9999",
  email: "contato@cristalglass.com.br",
  address: "Showroom Central: Consultar via WhatsApp",
  openingHours: "Seg-Sex: 08:00 às 18:00 | Sáb: 08:00 às 13:00",
  message: "Olá! Gostaria de pedir um orçamento pelo WhatsApp."
};

export const WHATSAPP_LINK = `https://wa.me/${CLIENT_CONFIG.whatsapp}?text=${encodeURIComponent(CLIENT_CONFIG.message)}`;

export const getServiceWhatsAppLink = (serviceName: string) => {
  const msg = `Olá! Gostaria de um orçamento para ${serviceName}.`;
  return `https://wa.me/${CLIENT_CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
};

const DEFAULT_SERVICE_CTA = "Peça seu orçamento no WhatsApp";

export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tag?: string;
  cta: string;
}

/** 
 * Caminho da imagem local fornecido pelo usuário.
 */
export const USER_BOX_IMAGE = "public/images/Box do banheiro.jpg";

export const FEATURED_SERVICES: Service[] = [
  {
    id: 'box-de-banheiro',
    title: "Box de Banheiro",
    description: "Design minimalista com ferragens discretas e vidro temperado de alta segurança. O acabamento de alto padrão que seu banheiro merece.",
    imageUrl: USER_BOX_IMAGE,
    tag: "Luxo e Segurança",
    cta: DEFAULT_SERVICE_CTA
  },
  {
    id: 'espelhos-sob-medida',
    title: "Espelhos sob Medida",
    description: "Espelhos de cristal prata com nitidez absoluta e tratamento anti-oxidação. Acabamentos bisotê e lapidado.",
    imageUrl: "https://images.unsplash.com/photo-1620626011761-9963d7521476?auto=format&fit=crop&q=80&w=800",
    tag: "Corte Preciso",
    cta: DEFAULT_SERVICE_CTA
  },
  {
    id: 'janelas-de-vidro',
    title: "Janelas de Vidro",
    description: "Conforto acústico e térmico superior. Sistemas de correr ou integrados com esquadrias de alta performance.",
    imageUrl: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?auto=format&fit=crop&q=80&w=800",
    tag: "Conforto Acústico",
    cta: DEFAULT_SERVICE_CTA
  },
  {
    id: 'troca-de-vidro-quebrado',
    title: "Troca de Vidro Quebrado",
    description: "Atendimento imediato para substituição de vidros. Equipe treinada para remoção segura e instalação rápida.",
    imageUrl: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&q=80&w=800",
    tag: "Plantão Urgente",
    cta: DEFAULT_SERVICE_CTA
  }
];

export const ALL_SERVICES: Service[] = [
  ...FEATURED_SERVICES,
  {
    id: 'portas-de-vidro',
    title: "Portas de Vidro",
    description: "Sistemas pivotantes ou de correr com ferragens em aço inox. Design moderno que integra ambientes.",
    imageUrl: "https://images.unsplash.com/photo-1534349762230-e0caaff47941?auto=format&fit=crop&q=80&w=600",
    cta: DEFAULT_SERVICE_CTA
  },
  {
    id: 'vidro-temperado',
    title: "Vidro Temperado",
    description: "Vidros de alta resistência para aplicações estruturais, divisórias e portas de 10mm com selo ABNT.",
    imageUrl: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=600",
    cta: DEFAULT_SERVICE_CTA
  },
  {
    id: 'vidro-comum',
    title: "Vidro Comum",
    description: "Vidros float de diversas espessuras para janelas simples, molduras e aplicações tradicionais.",
    imageUrl: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=600",
    cta: DEFAULT_SERVICE_CTA
  },
  {
    id: 'manutencao-portas-janelas',
    title: "Manutenção de Portas e Janelas",
    description: "Troca de roldanas, dobradiças, escovas de vedação e regulagem de prumo para funcionamento perfeito.",
    imageUrl: "https://images.unsplash.com/photo-1581094288338-2314dddb7ee4?auto=format&fit=crop&q=80&w=600",
    cta: DEFAULT_SERVICE_CTA
  },
  {
    id: 'fechamento-sacada-varanda',
    title: "Fechamento de Sacada / Varanda",
    description: "Sistema retrátil panorâmico para apartamentos. Ganhe conforto e proteção contra chuva e ventos.",
    imageUrl: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&q=80&w=600",
    cta: DEFAULT_SERVICE_CTA
  },
  {
    id: 'vitrines-comerciais',
    title: "Vitrines Comerciais",
    description: "Vidros laminados de segurança para lojas. Máxima transparência para exposição de produtos.",
    imageUrl: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=600",
    cta: DEFAULT_SERVICE_CTA
  },
  {
    id: 'guarda-corpo-vidro',
    title: "Guarda-Corpo de Vidro",
    description: "Segurança técnica NBR 14718 para escadas e sacadas. Fixação estrutural com alta resistência.",
    imageUrl: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80&w=600",
    cta: DEFAULT_SERVICE_CTA
  },
  {
    id: 'tampos-mesa-vidro',
    title: "Tampos de Mesa de Vidro",
    description: "Vidros de 8mm a 19mm com lapidação de excelência para mesas de jantar, centro e escritório.",
    imageUrl: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80&w=600",
    cta: DEFAULT_SERVICE_CTA
  },
  {
    id: 'prateleiras-vidro',
    title: "Prateleiras de Vidro",
    description: "Organização leve para closets e banheiros com suportes técnicos de alta resistência.",
    imageUrl: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=600",
    cta: DEFAULT_SERVICE_CTA
  },
  {
    id: 'vidros-especiais-cores',
    title: "Vidros Fumê, Bronze e Refletivo",
    description: "Estética e privacidade. Vidros com controle solar que reduzem o calor e valorizam o design.",
    imageUrl: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=600",
    cta: DEFAULT_SERVICE_CTA
  },
  {
    id: 'fachadas-de-vidro',
    title: "Fachadas de Vidro",
    description: "Engenharia de fachadas residenciais e comerciais (Pele de vidro/Glazing) com alto padrão.",
    imageUrl: "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=75&w=600",
    cta: DEFAULT_SERVICE_CTA
  }
];

export const TESTIMONIALS = [
  {
    name: "Carlos Alberto - Vila Mariana",
    text: "Atendimento técnico impecável. O profissional percebeu detalhes na viga que outras vidraçarias ignoraram. O resultado foi um box extremamente firme e seguro.",
    role: "Proprietário Residencial",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    stars: 5,
    date: "há 1 semana"
  },
  {
    name: "Patrícia Almeida - Morumbi",
    text: "Contratei para o fechamento da sacada e a qualidade superou as expectativas. A instalação é milimétrica e o acabamento impecável. Profissionais de elite.",
    role: "Arquiteta",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    stars: 5,
    date: "há 3 semanas"
  },
  {
    name: "Ricardo Mendes - Tatuapé",
    text: "Precisei de vitrines para minha rede de lojas. O suporte técnico foi fundamental para escolhermos vidros que suportam o impacto e mantêm a estética.",
    role: "Empresário",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    stars: 5,
    date: "há 1 mês"
  },
  {
    name: "Fernando Silva - Itaim Bibi",
    text: "Manutenção de roldanas e vidros de fachada é com eles. Sabem resolver o problema na primeira visita. Recomendo fortemente o atendimento pelo WhatsApp.",
    role: "Gestor de Facilities",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    stars: 5,
    date: "há 2 semanas"
  }
];

export const FAQ_ITEMS = [
  {
    question: "Como funciona a sua consultoria técnica?",
    answer: "Você fala direto com um especialista. Analisamos fotos, medidas e o tipo de estrutura para indicar o vidro correto segundo as normas da ABNT, evitando riscos estruturais."
  },
  {
    question: "Qual o prazo de entrega?",
    answer: "Trabalhamos com prazos ágeis, variando conforme a complexidade do projeto. Box e espelhos residenciais costumam ser instalados em poucos dias úteis."
  },
  {
    question: "Vocês atendem emergências?",
    answer: "Sim! Temos uma equipe dedicada para troca de vidros quebrados e reparos urgentes em portas e janelas."
  }
];