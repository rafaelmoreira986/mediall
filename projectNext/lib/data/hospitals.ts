import { StateData } from "../types/hospitals";

export const regionColors: Record<string, string> = {
  Norte: "#0e7fc0",
  "Centro-Oeste": "#0a6b9e",
  Sudeste: "#0e7fc0",
  Sul: "#0a6b9e",
  Nordeste: "#0e7fc0",
};

export const statesData: StateData[] = [
  {
    state: "Acre",
    abbr: "AC",
    region: "Norte",
    hospitals: [
      { name: "Instituto Nacional de Traumatologia e Ortopedia", acronym: "INTO - ACRE (HCAMP-RIO BRANCO)", city: "Rio Branco" },
      { name: "Fundação Hospital Estadual do Acre", acronym: "FUNDAHCRE", city: "Rio Branco" },
    ],
  },
  {
    state: "Amapá",
    abbr: "AP",
    region: "Norte",
    hospitals: [
      { name: "Unidade Hospitalar de Porto Grande", acronym: "UHPG", city: "Porto Grande", active: true },
      { name: "Unidade de Pronto Atendimento Zona Sul", acronym: "UPA - MACAPÁ", city: "Macapá", active: true },
      { name: "Unidade Estadual de Internação", acronym: "UEI", city: "Macapá", active: true },
      { name: "Hospital de Campanha de Macapá", acronym: "HCAMP - MACAPÁ", city: "Macapá" },
    ],
  },
  {
    state: "Amazonas",
    abbr: "AM",
    region: "Norte",
    hospitals: [
      { name: "Unidade Hospitalar de Tabatinga", acronym: "HOSPITAL DE TABATINGA", city: "Tabatinga", active: true },
      { name: "Hospital Regional de Tefé", acronym: "HOSPITAL DE TEFÉ", city: "Tefé", active: true },
      { name: "Unidade Hospitalar de Humaitá", acronym: "HOSPITAL DE HUMAITÁ", city: "Humaitá", active: true },
      { name: "Hospital Universitário Getulio Vargas", acronym: "HUVG", city: "Manaus" },
    ],
  },
  {
    state: "Distrito Federal",
    abbr: "DF",
    region: "Centro-Oeste",
    hospitals: [
      { name: "Hospital Militar de Área de Brasília", acronym: "HMAB", city: "Brasília", active: true },
      { name: "Hospital das Forças Armadas", acronym: "HFA", city: "Brasília" },
      { name: "Hospital de Campanha da Região Sul - Gama", acronym: "HCAMP - GAMA", city: "Brasília" },
      { name: "Hospital de Campanha da Região Oeste - Ceilândia", acronym: "HCAMP - CEILÂNDIA", city: "Brasília" },
      { name: "Hospital de Campanha da Região Central - Autódromo", acronym: "HCAMP - AUTÓDROMO", city: "Brasília" },
      { name: "Departamento Penitenciário Nacional", acronym: "DEPEN", city: "Brasília" },
    ],
  },
  {
    state: "Goiás",
    abbr: "GO",
    region: "Centro-Oeste",
    hospitals: [
      { name: "Hospital Estadual de Aparecida de Goiânia", acronym: "HEAPA", city: "Aparecida de Goiânia", active: true },
      { name: "Hospital Estadual Sandino de Amorim", acronym: "HEJA", city: "Jaraguá" },
      { name: "Hospital e Maternidade Nossa Senhora de Lourdes", acronym: "HMNSL", city: "Goiânia" },
      { name: "Hospital Estadual Ernestina Lopes Jaime", acronym: "HEELJ", city: "Pirenópolis" },
      { name: "Hospital Estadual da Região Sudoeste Drº Albanir Faleiros", acronym: "HURSO", city: "Santa Helena" },
      { name: "Hospital Municipal de Aparecida de Goiânia", acronym: "HMAP", city: "Aparecida de Goiânia" },
      { name: "Hospital de Doenças Tropicais", acronym: "HDT", city: "Goiânia" },
      { name: "Hospital Estadual de Urgências da Região Noroeste de Goiânia Drº Otávio Lage de Siqueira", acronym: "HUGOL", city: "Goiânia" },
      { name: "Santa Casa de Misericórdia de Anápolis", acronym: "SANTA CASA DE ANÁPOLIS", city: "Anápolis" },
      { name: "Hospital de Campanha de Enfrentamento do Corona Vírus", acronym: "HCAMP - GOIÂNIA", city: "Goiânia" },
      { name: "Hospital de Campanha de Itumbiara (São Marcos)", acronym: "HCAMP - ITUMBIARA", city: "Itumbiara" },
      { name: "Hospital Estadual de Urgências de Goiânia Drº Valdemir Cruz", acronym: "HUGO", city: "Goiânia" },
      { name: "Hospital para Enfrentamento da Covid-19 - CentroNorte Goiano", acronym: "HCN", city: "Uruaçú" },
      { name: "Hospital Estadual da Mulher", acronym: "HEMU", city: "Goiânia" },
      { name: "Maternidade - Nascer Cidadão", acronym: "MNC", city: "Goiânia" },
      { name: "Hospital Estadual da Criança e do Adolescente", acronym: "HECAD", city: "Goiânia" },
      { name: "Centro de Atendimento Médico Drº Antônio Abasio da Silva", acronym: "CAM", city: "Catalão" },
    ],
  },
  {
    state: "Mato Grosso",
    abbr: "MT",
    region: "Centro-Oeste",
    hospitals: [
      { name: "Hospital Estadual Santa Casa", acronym: "SANTA CASA - CUIABÁ", city: "Cuiabá" },
      { name: "Hospital Metropolitano de Várzea Grande", acronym: "HMVG", city: "Várzea Grande" },
      { name: "Hospital Municipal de Tangará da Serra", acronym: "HMTS", city: "Tangará da Serra" },
      { name: "Hospital Regional de Alta Floresta - Albert Sabin", acronym: "HRAF", city: "Alta Floresta" },
      { name: "Hospital Regional de Colíder - Drº Masanitsu Takano", acronym: "HRCO", city: "Colíder" },
    ],
  },
  {
    state: "Mato Grosso do Sul",
    abbr: "MS",
    region: "Centro-Oeste",
    hospitals: [
      { name: "Hospital da Vida", acronym: "HV", city: "Dourados" },
    ],
  },
  {
    state: "Minas Gerais",
    abbr: "MG",
    region: "Sudeste",
    hospitals: [
      { name: "Hospital Municipal São Judas Tadeu", acronym: "HMSJT", city: "Ribeirão das Neves" },
      { name: "Hospital Municipal de Paracatú", acronym: "HMP", city: "Paracatú" },
    ],
  },
  {
    state: "Pará",
    abbr: "PA",
    region: "Norte",
    hospitals: [
      { name: "Hospital Regional Público do Marajó", acronym: "HOSPITAL DO MARAJÓ", city: "Breves" },
      { name: "Maternidade e Unidades Básicas de Saúde de Tomé - Açú", acronym: "—", city: "Tomé - Açú" },
      { name: "Unidade de Pronto Atendimento - Capanema", acronym: "UPA - CAPANEMA", city: "Capanema" },
    ],
  },
  {
    state: "Paraná",
    abbr: "PR",
    region: "Sul",
    hospitals: [
      { name: "Departamento Penitenciário Nacional - Catanduvas", acronym: "DEPEN", city: "Catanduvas" },
    ],
  },
  {
    state: "Rio Grande do Norte",
    abbr: "RN",
    region: "Nordeste",
    hospitals: [
      { name: "Departamento Penitenciário Nacional - Mossoró", acronym: "DEPEN", city: "Mossoró" },
    ],
  },
  {
    state: "Rondônia",
    abbr: "RO",
    region: "Norte",
    hospitals: [
      { name: "Hospital Regional de Guajará-Mirim", acronym: "HGM", city: "Guajará-Mirim", active: true },
      { name: "Hospital Municipal de Machadinho D'Oeste", acronym: "HMMD", city: "Machadinho D'Oeste", active: true },
      { name: "Hospital Municipal Antônio Luiz Macedo", acronym: "HMALM", city: "Nova Mamoré", active: true },
      { name: "Unidade de Pronto Atendimento de Porto Velho", acronym: "UPA - PORTO VELHO", city: "Porto Velho", active: true },
      { name: "Unidades Básica de Saúde de Porto Velho", acronym: "UBS - PORTO VELHO", city: "Porto Velho", active: true },
      { name: "Unidades Básica de Saúde de Nova Mamoré", acronym: "UBS - NOVA MAMORÉ", city: "Nova Mamoré", active: true },
      { name: "Hospital Municipal Drº Claudionor Couto Roriz", acronym: "—", city: "Ji - Paraná" },
    ],
  },
  {
    state: "São Paulo",
    abbr: "SP",
    region: "Sudeste",
    hospitals: [
      { name: "Hospital de Campanha de Bertioga", acronym: "HCAMP - BERTIOGA", city: "Bertioga" },
      { name: "Santa Casa de Presidente Venceslau", acronym: "—", city: "Presidente Venceslau" },
    ],
  },
  {
    state: "Tocantins",
    abbr: "TO",
    region: "Norte",
    hospitals: [
      { name: "Unidade de Pronto Atendimento - Araguaína", acronym: "UPA - ARAGUAÍNA", city: "Araguaína" },
    ],
  },
];
