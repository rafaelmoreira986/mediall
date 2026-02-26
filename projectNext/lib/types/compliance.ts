export interface Resposta {
  id: string;
  autor: string;
  tipo: "admin" | "user";
  mensagem: string;
  data: string;
}

export interface Ticket {
  id: string;
  protocolo: string;
  tipo: string;
  unidade: string;
  departamento: string;
  descricao: string;
  dataAbertura: string;
  dataIncidente: string;
  status: "aberto" | "em-andamento" | "resolvido" | "fechado";
  prioridade: "alta" | "media" | "baixa";
  anonimo: boolean;
  nome?: string;
  email?: string;
  telefone?: string;
  arquivos?: string[];
  respostas: Resposta[];
}
