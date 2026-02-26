export interface Hospital {
  name: string;
  acronym: string;
  city: string;
  active?: boolean;
}

export interface StateData {
  state: string;
  abbr: string;
  region: string;
  hospitals: Hospital[];
}
