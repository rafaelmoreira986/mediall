import { Ticket } from "../types/compliance";

export const unidades = [
  "Hospital São Lucas - São Paulo/SP",
  "Hospital Santa Maria - Rio de Janeiro/RJ",
  "Hospital São João - Belo Horizonte/MG",
  "Hospital Central - Curitiba/PR",
  "Hospital Regional - Salvador/BA",
  "UPA Norte - Recife/PE",
  "UPA Sul - Porto Alegre/RS",
  "Clínica Mediall - Brasília/DF",
];

export const tiposIncidente = [
  "Assédio Moral",
  "Assédio Sexual",
  "Fraude",
  "Corrupção",
  "Conflito de Interesses",
  "Discriminação",
  "Desvio de Conduta",
  "Irregularidade Financeira",
  "Violação de Políticas Internas",
  "Segurança do Trabalho",
  "Outros",
];

export const mockTickets: Ticket[] = [
  {
    id: "1",
    protocolo: "COMP-2025-001",
    tipo: "Assédio Moral",
    unidade: "Hospital São Lucas - São Paulo/SP",
    departamento: "Enfermagem",
    descricao:
      "Relato de comportamento abusivo por parte de supervisor direto, com ocorrências frequentes de humilhação na frente de colegas de trabalho e ameaças veladas sobre estabilidade no emprego.",
    dataAbertura: "2025-01-15",
    dataIncidente: "2025-01-10",
    status: "em-andamento",
    prioridade: "alta",
    anonimo: false,
    nome: "Maria Silva",
    email: "maria.silva@email.com",
    telefone: "(11) 99999-0001",
    respostas: [
      {
        id: "r1",
        autor: "Comitê de Ética",
        tipo: "admin",
        mensagem:
          "Recebemos sua denúncia e estamos iniciando a apuração. Um membro do comitê entrará em contato para colher mais detalhes.",
        data: "2025-01-16",
      },
      {
        id: "r2",
        autor: "Maria Silva",
        tipo: "user",
        mensagem:
          "Obrigada pela atenção. Fico no aguardo do contato.",
        data: "2025-01-17",
      },
    ],
  },
  {
    id: "2",
    protocolo: "COMP-2025-002",
    tipo: "Fraude",
    unidade: "Hospital Santa Maria - Rio de Janeiro/RJ",
    departamento: "Financeiro",
    descricao:
      "Identificação de notas fiscais duplicadas no setor de compras, com valores divergentes dos contratos aprovados.",
    dataAbertura: "2025-01-20",
    dataIncidente: "2025-01-18",
    status: "aberto",
    prioridade: "alta",
    anonimo: true,
    respostas: [],
  },
  {
    id: "3",
    protocolo: "COMP-2025-003",
    tipo: "Conflito de Interesses",
    unidade: "Hospital Central - Curitiba/PR",
    departamento: "Diretoria",
    descricao:
      "Diretor do hospital contratou empresa de consultoria pertencente a familiar sem o devido processo de licitação.",
    dataAbertura: "2025-02-01",
    dataIncidente: "2025-01-25",
    status: "aberto",
    prioridade: "media",
    anonimo: true,
    respostas: [],
  },
  {
    id: "4",
    protocolo: "COMP-2025-004",
    tipo: "Violação de Políticas Internas",
    unidade: "UPA Norte - Recife/PE",
    departamento: "Farmácia",
    descricao:
      "Descarte irregular de medicamentos vencidos, sem seguir o protocolo estabelecido pela vigilância sanitária.",
    dataAbertura: "2025-02-03",
    dataIncidente: "2025-02-01",
    status: "resolvido",
    prioridade: "media",
    anonimo: false,
    nome: "Carlos Oliveira",
    email: "carlos.oliveira@email.com",
    respostas: [
      {
        id: "r3",
        autor: "Comitê de Ética",
        tipo: "admin",
        mensagem:
          "Após investigação, confirmamos a irregularidade. O procedimento de descarte foi corrigido e os responsáveis foram notificados.",
        data: "2025-02-05",
      },
    ],
  },
  {
    id: "5",
    protocolo: "COMP-2025-005",
    tipo: "Discriminação",
    unidade: "Hospital São João - Belo Horizonte/MG",
    departamento: "Recursos Humanos",
    descricao:
      "Candidata relata ter sido preterida em processo seletivo por motivos de gênero, com comentários inapropriados durante a entrevista.",
    dataAbertura: "2025-02-05",
    dataIncidente: "2025-02-04",
    status: "aberto",
    prioridade: "alta",
    anonimo: false,
    nome: "Ana Beatriz Santos",
    email: "ana.santos@email.com",
    telefone: "(31) 99999-0005",
    respostas: [],
  },
  {
    id: "6",
    protocolo: "COMP-2025-006",
    tipo: "Segurança do Trabalho",
    unidade: "UPA Sul - Porto Alegre/RS",
    departamento: "Manutenção",
    descricao:
      "Equipamentos de proteção individual (EPIs) com validade vencida sendo distribuídos aos funcionários da manutenção.",
    dataAbertura: "2025-01-28",
    dataIncidente: "2025-01-27",
    status: "fechado",
    prioridade: "baixa",
    anonimo: false,
    nome: "Roberto Lima",
    email: "roberto.lima@email.com",
    respostas: [
      {
        id: "r4",
        autor: "Comitê de Ética",
        tipo: "admin",
        mensagem:
          "Verificação realizada. Os EPIs foram substituídos e o controle de validade foi reforçado.",
        data: "2025-01-30",
      },
      {
        id: "r5",
        autor: "Roberto Lima",
        tipo: "user",
        mensagem: "Confirmo que os equipamentos foram trocados. Obrigado pela agilidade.",
        data: "2025-01-31",
      },
    ],
  },
];
